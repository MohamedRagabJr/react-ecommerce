"use server";

import axios from "axios";
import { getMyToken } from "../api/getMyToken";

type ShippingAddressType = {
  city: string;
  details: string;
  phone: string;
};

// CASH ORDER

export async function createCashOrder(
  cartId: string,
  shippingAddress: ShippingAddressType,
) {
  const token = await getMyToken();

  try {
    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
      {
        shippingAddress,
      },
      {
        headers: {
          token,
        },
      },
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to create cash order")
    }
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}

// VISA ORDER

export async function createVisaOrder(
  cartId: string,
  shippingAddress: ShippingAddressType,
) {
  const token = await getMyToken();

  try {
    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
      {
        shippingAddress,
      },
      {
        headers: {
          token,
        },
      },
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to create visa order")
    }
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}