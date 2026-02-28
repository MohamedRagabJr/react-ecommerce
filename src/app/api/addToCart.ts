"use server"

import axios from "axios"
import { getMyToken } from "./getMyToken"

export async function addItemToCart(productId: string) {

  const token = await getMyToken()

  // console.log("TOKEN:", token) 

  try {
    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v2/cart`,
      { productId: productId },
      {
        headers: {
          token: token as string
        }
      }
    )

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to add item to cart")
    }
    throw new Error("An unexpected error occurred")
  }
}