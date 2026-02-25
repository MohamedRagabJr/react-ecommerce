"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import { getUserWishlist } from "../api/getWishlist";

interface WishlistContextType {
  wishlistItems: any;
  setWishlistItems: React.Dispatch<React.SetStateAction<any>>;
  numOfWishlistItems: number;
  setnumOfWishlistItems: React.Dispatch<React.SetStateAction<number>>;
}

export const WishlistContext =
  createContext<WishlistContextType | null>(null);

export default function WishlistContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlistItems, setWishlistItems] = useState<any>(null);

  const [numOfWishlistItems, setnumOfWishlistItems] = useState(0);

  async function loadWishlist() {
    try {
      const data = await getUserWishlist();

      setWishlistItems(data.data);

      setnumOfWishlistItems(data.count);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await getUserWishlist();
        if (!mounted) return;

        setWishlistItems(data.data);

        setnumOfWishlistItems(data.count);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        setWishlistItems,
        numOfWishlistItems,
        setnumOfWishlistItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}