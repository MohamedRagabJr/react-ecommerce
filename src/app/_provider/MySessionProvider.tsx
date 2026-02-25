"use client";

import { SessionProvider } from "next-auth/react";
import CartContextProvider from "../_context/CartContext";
import WishlistContextProvider from "../_context/WishlistContext";


export default function MySessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider>
      <CartContextProvider>
        <WishlistContextProvider>

          {children}

        </WishlistContextProvider>
      </CartContextProvider>
    </SessionProvider>
    </>
  );
}
