"use server"
import axios from "axios";
import { getMyToken } from "../api/getMyToken";

export async function updateCount(productId: string, count: number) {
  const token = await getMyToken();

  try {
    const { data } = await axios.put(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
      {
        count
      },
      {
        headers: {
          token: token as string
        }
      }
    )
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to update item count")
    }
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}