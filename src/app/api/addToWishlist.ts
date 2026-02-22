"use server"

import axios from "axios"
import { getMyToken } from "./getMyToken"

export  async function addItemToWishlist(productId: string) {

  const token = await getMyToken()

  // console.log("TOKEN:", token) 

  const { data } = await axios.post(
    `https://ecommerce.routemisr.com/api/v1/wishlist` ,
    { productId: productId },
    {
      headers: {
        token: token as string
      }
    }
  )

  return data
}
