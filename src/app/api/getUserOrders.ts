"use server";

import axios from "axios";
import { getMyToken } from "./getMyToken";
import { jwtDecode } from "jwt-decode";

type DecodedTokenType = {
  id: string;
  name: string;
  email: string;
};

export async function getUserOrders() {
  const token = await getMyToken();

  if (!token) {
    throw new Error("No token found");
  }

  try {
    const userData = jwtDecode<DecodedTokenType>(token);

    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${userData.id}`,
      {
        headers: {
          token,
        },
      },
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch user orders")
    }
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}