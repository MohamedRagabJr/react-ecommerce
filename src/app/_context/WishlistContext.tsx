"use client";

import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { getUserWishlist } from "../api/getWishlist";
import type Product from "../types/product.type";

interface WishlistContextType {
  wishlistItems: Product[] | null;
  setWishlistItems: React.Dispatch<React.SetStateAction<Product[] | null>>;
  numOfWishlistItems: number;
  setnumOfWishlistItems: React.Dispatch<React.SetStateAction<number>>;
}

export const WishlistContext =
  createContext<WishlistContextType | null>(null);

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistContextProvider");
  }
  return context;
}

export default function WishlistContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlistItems, setWishlistItems] = useState<Product[] | null>(null);

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