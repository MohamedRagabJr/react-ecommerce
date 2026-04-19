"use client";

import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { getUserData } from "../api/getCartData";
import { CartData } from "../types/product.type";

interface CartContextType {
  cartItems: CartData | null;
  setCartItems: React.Dispatch<React.SetStateAction<CartData | null>>;
  numOfCartItems: number;
  setnumOfCartItems: React.Dispatch<React.SetStateAction<number>>;
  cartId: string | null;
  setcartId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
}

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartData | null>(null);
  const [numOfCartItems, setnumOfCartItems] = useState(0);
  const [cartId, setcartId] = useState<string | null>(null);

  async function getData() {
    try {
      const userDataCart = await getUserData();

      console.log("User Cart Data:", userDataCart);

      setCartItems(userDataCart.data);

      setnumOfCartItems(userDataCart.numOfCartItems);

      setcartId(userDataCart.cartId);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function loadCart() {
      await getData();
    }

    loadCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        numOfCartItems,
        setnumOfCartItems,
        cartId,
        setcartId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
