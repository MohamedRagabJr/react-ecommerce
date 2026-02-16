"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { ShoppingCart } from "lucide-react"

export default function AddtoCardbtn() {

  const handleAddToCart = () => {
    toast.success("Added to cart", {
      description: "Item has been successfully added to your cart.",
      action: {
        label: "Undo",
        onClick: () => toast.info("Item removed from cart"),
      },
    })
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
