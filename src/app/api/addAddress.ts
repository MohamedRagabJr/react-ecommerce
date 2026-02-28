"use server"

import axios from "axios"
import { getMyToken } from "./getMyToken"

interface AddressInput {
  name: string
  details: string
  phone: string
  city: string
}

export async function addAddress(formData: AddressInput) {

  const token = await getMyToken()

  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/addresses",
      formData,
      {
        headers: {
          token: token as string
        }
      }
    )

    return data

  } catch (error) {

    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to add address"
      )
    }

    throw new Error("An unexpected error occurred")
  }
}