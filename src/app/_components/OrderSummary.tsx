"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import { FaArrowLeftLong } from "react-icons/fa6";

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
          <p className="text-black">  {cartItems?.totalCartPrice ?? 0} EGP</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Number of Item</p>
          <p className="text-black">Free</p>
        </div>
        <div className="flex justify-between font-bold border-t pt-4">
          <p className="text-gray-400">Total</p>
          <p className="text-black">  {cartItems?.totalCartPrice ?? 0} EGP</p>
        </div>
        <div className="btns">
          <Link href="/products" className="w-full mt-5 border flex justify-center gap-1 items-center rounded-xl py-3 h-auto text-gray-900! hover:text-white! hover:bg-linear-to-r to-[#2f6a4a] from-[#63a883] bg-white">
            <FaArrowLeftLong /> Continue Shopping
          </Link>
          <Link href="/payment" className="w-full block h-auto text-center text-white py-3 bg-linear-to-r to-[#2f6a4a] from-[#63a883] rounded-xl mt-5">
            Checkout
          </Link>
        </div>
      </Card>
    </>
  );
}
