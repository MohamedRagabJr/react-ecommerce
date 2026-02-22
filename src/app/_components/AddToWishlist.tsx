"use client";

import { Button } from "@/components/ui/button";
import { addItemToWishlist } from "../api/addToWishlist";
import { toast } from "sonner";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function AddToWishlistBtn({ productId }: { productId: string }) {

  const [isWishlisted, setIsWishlisted] = useState(false);
useEffect(()=>{
 // check if product in wishlist
},[])
  async function handleAddToWidhlist() {
    try {
      const data = await addItemToWishlist(productId);

      console.log("Wishlist Response:", data);

      if (data.status === "success") {
        setIsWishlisted(true);
      }

      toast.success(data.message || "Item added to Wishlist!");

    } catch (error: any) {

      toast.error(
        error.message || "Failed to add item to Wishlist. Please try again.",
      );

    }
  }
 

  return (
    <Button
      onClick={handleAddToWidhlist}
      className="text-green-900 hover:bg-green-900 hover:text-white bg-white max-w-7 transition cursor-pointer"
    >

      {isWishlisted ? <FaHeart size={30}/> : <FaRegHeart size={30} />}

    </Button>
  );
}