"use server"
import { cookies } from "next/headers"
import { loginData } from "../types/auth.type"

export async function MyLogin( values : loginData){
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin` , {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
    let finalRes = await res.json()
    const myCookies = await cookies()
    myCookies.set("token" , finalRes.token , { maxAge: 60 * 60 * 24 , httpOnly: true , sameSite: "strict"})
}