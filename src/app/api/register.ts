"use server"

import { registerData } from "../types/auth.type"

export async function MyRegister(values: registerData) {

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || "Register failed")
  }

  return data
}