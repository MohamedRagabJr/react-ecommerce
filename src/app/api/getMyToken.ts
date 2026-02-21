"use server"

import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function getMyToken(){
  const myCookies = await cookies()
  const TokenFromBackend = myCookies.get("next-auth.session-token")?.value
   const decodedToken =  await decode({token: TokenFromBackend , secret: process.env.AUTH_SECRET!})
   return decodedToken?.realTokenFromBackend


}