"use server"
import axios from "axios";
import { getMyToken } from "../api/getMyToken";

export async function deleteItem(productId: string) {
  const token = await getMyToken();

  try {
    const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
      {
        headers: {
          token: token as string
        }
      }
    )
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to delete item")
    }
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}

export async function deleteUserItem(productId: string) {
  const token = await getMyToken();

  try {
    const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v2/cart`,
      {
        headers: {
          token: token as string
        }
      }
    )
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to delete user cart")
    }
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}