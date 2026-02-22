"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { addItemToCart } from "../api/addToCart";
import { toast } from "sonner";
import { CartContext } from "../_context/CartContext";

export default function AddToCartBtn({ productId }: { productId: string }) {
  const { setCartItems, setnumOfCartItems } = useContext(CartContext)!;
  const [loading, setLoading] = useState(false);
  async function handleAddToCart() {
    try {
      setLoading(true);
      const data = await addItemToCart(productId);
      console.log("Add to Cart Response:", data);
      toast.success(data.message || "Item added to cart!");
      setnumOfCartItems(data.numOfCartItems);
      setCartItems(data.data);
    } catch (error: any) {
      toast.error(
        error.message || "Failed to add item to cart. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleAddToCart}
      className="rounded-xl bg-linear-to-r from-[#2f6a4a] to-[#63a883] text-white hover:opacity-90 transition w-4/5 cursor-pointer"
    >
      <ShoppingCart className="mr-2 h-4 w-1/5" />

      {loading ? "Adding..." : "Add To Cart"}
    </Button>
  );
}
