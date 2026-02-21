"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import {addItemToCart}  from "../api/addToCart"

export default function AddToCartBtn({productId} : {productId:string}) {

 async function handleAddToCart() {
  const data = await addItemToCart(productId)
  console.log("data from add to cart" , data)
 }

  return (
    <div className="flex items-center gap-2 w-full">
        <Button
      onClick={handleAddToCart}
      className="rounded-xl bg-gradient-to-r from-[#2f6a4a] to-[#63a883] text-white hover:opacity-90 transition w-4/5 cursor-pointer"
    >
      <ShoppingCart className="mr-2 h-4 w-1/5" />
      Add To Cart
    </Button>
    </div>
  )
}
