"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useContext } from "react";
import { CartContext } from "../_context/CartContext";

export default function OrderSummary() {
  const { numOfCartItems, cartItems } = useContext(CartContext);
  console.log("Cart Items in OrderSummary:", cartItems);
  return (
    <>
      <Card className="p-5">
        <h3 className="text-xl font-bold text-green-900">Order Summary</h3>
        <div className="flex justify-between">
          <p className="text-gray-400">Number of Item</p>
          <p className="text-black">{numOfCartItems}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Subtotal</p>
          <p className="text-black">{cartItems.totalCartPrice} EGP</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Number of Item</p>
          <p className="text-black">Free</p>
        </div>
        <div className="flex justify-between font-bold border-t pt-4">
          <p className="text-gray-400">Total</p>
          <p className="text-black">{cartItems.totalCartPrice} EGP</p>
        </div>
        <div className="btns">
          <Button className="w-full mt-5 border rounded-xl py-3 h-auto text-black bg-white">
            Continue Shopping
          </Button>
          <Button className="w-full h-auto py-3 rounded-xl mt-5">
            Checkout
          </Button>
        </div>
      </Card>
    </>
  );
}
