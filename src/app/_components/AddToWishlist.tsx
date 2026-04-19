"use client";

import { Button } from "@/components/ui/button";
import { addItemToWishlist } from "../api/addToWishlist";
import { removeItemFromWishlist } from "../wishlist/removeWishlist";
import { toast } from "sonner";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useWishlist } from "../_context/WishlistContext";
import { getUserWishlist } from "../api/getWishlist";

export default function AddToWishlistBtn({ productId }: { productId: string }) {
  const { wishlistItems, setWishlistItems, setnumOfWishlistItems } = useWishlist();

  const isWishlisted = wishlistItems?.some((item: { _id: string }) => item._id === productId);

  async function toggleWishlist() {
    try {
      if (isWishlisted) {
        await removeItemFromWishlist(productId);
        toast.success("Removed");
      } else {
        await addItemToWishlist(productId);
        toast.success("Added");
      }
      
      // Refresh the full wishlist data
      const updatedData = await getUserWishlist();
      setWishlistItems(updatedData.data);
      setnumOfWishlistItems(updatedData.count);
      
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
