"use client";

import { Button } from "@/components/ui/button";
import { addItemToWishlist } from "../api/addToWishlist";
import { removeItemFromWishlist } from "../wishlist/removeWishlist";
import { toast } from "sonner";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { WishlistContext } from "../_context/WishlistContext";

export default function AddToWishlistBtn({ productId }: { productId: string }) {
  const context = useContext(WishlistContext);

  if (!context) {
    return null;
  }

  const { wishlistItems, setWishlistItems } = context;

  const isWishlisted = wishlistItems?.some((item: { _id: string }) => item._id === productId);

  async function toggleWishlist() {
    try {
      if (isWishlisted) {
        const data = await removeItemFromWishlist(productId);

        setWishlistItems(data.data);

        toast.success("Removed");
      } else {
        const data = await addItemToWishlist(productId);

        setWishlistItems(data.data);

        toast.success("Added");
      }
    } catch {
      toast.error("Error");
    }
  }

  return (
    <Button
      onClick={toggleWishlist}
      className="bg-linear-to-r to-[#2f6a4a] from-[#63a883] rounded-xl"
    >
      {isWishlisted ? <FaHeart size={30} /> : <FaRegHeart size={30} />}
    </Button>
  );
}
