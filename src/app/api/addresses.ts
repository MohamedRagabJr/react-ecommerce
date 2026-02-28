"use server";

import axios from "axios";
import { getMyToken } from "./getMyToken";

export interface AddressInput {
  name: string;
  details: string;
  phone: string;
  city: string;
}

export interface Address {
  _id: string;
  name: string;
  details: string;
  phone: string;
  city: string;
}

// ✅ Fetch addresses
export async function getUserAddresses(): Promise<Address[]> {
  const token = await getMyToken();

  try {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/addresses",
      { headers: { token: token as string } }
    );

    return data.data || [];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch addresses");
    }
    throw new Error("An unexpected error occurred");
  }
}

// ✅ Add address
export async function addAddress(formData: AddressInput) {
  const token = await getMyToken();

  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/addresses",
      formData,
      { headers: { token: token as string } }
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to add address");
    }
    throw new Error("An unexpected error occurred");
  }
}