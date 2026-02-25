"use client";

import { Button } from "@/components/ui/button";
import { addItemToWishlist } from "../api/addToWishlist";
import { removeItemFromWishlist } from "../wishlist/removeWishlist";
import { toast } from "sonner";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { WishlistContext } from "../_context/WishlistContext";

export default function AddToWishlistBtn({ productId }) {

  const {
    wishlistItems,
    setWishlistItems
  } = useContext(WishlistContext);


  const isWishlisted = wishlistItems?.some(
    (item) => item._id === productId
  );


  async function toggleWishlist() {

    try {

      if (isWishlisted) {

        const data = await removeItemFromWishlist(productId);

        setWishlistItems(data.data);

        toast.success("Removed");

      }

      else {

        const data = await addItemToWishlist(productId);

        setWishlistItems(data.data);

        toast.success("Added");

      }

    }

    catch {

      toast.error("Error");

    }

  }


  return (

    <Button onClick={toggleWishlist}>

      {isWishlisted

        ? <FaHeart size={30} />

        : <FaRegHeart size={30} />

      }

    </Button>

  );

}