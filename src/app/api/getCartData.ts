"use server"

import axios from "axios"
import { getMyToken } from "./getMyToken"

export async function getUserData() {
  const token = await getMyToken()

  try {
    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v2/cart`, {
      headers: {
        token: token as string
      }
    })
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch user data")
    }
    throw new Error("An unexpected error occurred")
  }
}