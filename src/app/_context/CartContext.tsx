"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import { getUserData } from "../api/getCartData";

interface CartContextType {
  cartItems: any;
  setCartItems: React.Dispatch<React.SetStateAction<any>>;
  numOfCartItems: number;
  setnumOfCartItems: React.Dispatch<React.SetStateAction<number>>;
  cartId: string | null;
  setcartId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<any>(null);
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
