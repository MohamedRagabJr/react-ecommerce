"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import { updateCount } from "../cart/UpdateCount";
import { toast } from "sonner";
import { deleteItem, deleteUserItem } from "../cart/DeletProduct";

export default function CartCard() {
  const { cartItems, setCartItems, numOfCartItems, setnumOfCartItems } =
    useContext(CartContext);
  type cartItems = {
    _id: string;
    product: {
      title: string;
      _id: string;
      imageCover: string;
      category: {
        name: string;
      };
      brand: {
        name: string;
      };
    };
    count: number;
    price: number;
  };
  async function handleUpadateCount(productId: string, count: number) {
    toast.promise(() => updateCount(productId, count), {
      success: function (res) {
        setCartItems(res.data);
        setnumOfCartItems(res.numOfCartItems);
        return "added to cart successfully";
      },
      loading: "in progress",
      error: "something went wrong",
      position: "top-center",
      richColors: true,
    });
  }
  async function handleDeleteItem(productId: string) {
    toast.promise(() => deleteItem(productId), {
      success: function (res) {
        setCartItems(res.data);
        setnumOfCartItems(res.numOfCartItems);
        return "Item deleted successfully";
      },
      loading: "in progress",
      error: "something went wrong",
      position: "top-center",
      richColors: true,
    });
  }
  async function handleClearCart() {
    toast.promise(() => deleteUserItem(""), {
      success: function (res) {
        setCartItems(null);
        setnumOfCartItems(0);
        return "cart deleted successfully";
      },
      loading: "in progress",
      error: "something went wrong",
      position: "top-center",
      richColors: true,
    });
  }
  return (
    <>
      {cartItems?.products?.map((item: cartItems) => (
        <Card className="flex flex-row p-4 mb-5 items-center" key={item._id}>
          <div className="card-img">
            <Image
              className="object-contain h-32"
              src={item.product.imageCover}
              width={200}
              height={200}
              alt="Product Image"
            />
          </div>
          <div className="card-body w-full">
            <div className="flex justify-between">
              <div className="left">
                <h3 className="text-lg font-bold text-green-900 mb-1">
                  {item.product.title}
                </h3>
                <h6 className="text-sm text-gray-500 mb-2">
                  {" "}
                  {item.product.brand.name} -{" "}
                  <span>{item.product.category.name} </span>{" "}
                </h6>
                <div className="flex gap-2">
                  <button
                    className="quantity-btn border p-2 rounded-sm"
                    onClick={() =>
                      handleUpadateCount(item.product._id, item.count - 1)
                    }
                  >
                    <FaMinus />
                  </button>
                  <p className="quantity p-2">{item.count}</p>
                  <button
                    className="quantity-btn border p-2 rounded-sm"
                    onClick={() =>
                      handleUpadateCount(item.product._id, item.count + 1)
                    }
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="right flex flex-col justify-around items-end w-28">
                <p className="text-xl font-bold text-green-900 mb-1">
                  {" "}
                  EGP {item.price}
                </p>
                <button
                  className="remove-btn text-sm text-red-500"
                  onClick={() => handleDeleteItem(item.product._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </Card>
      ))}
      <Button
        className="mt-7 text-red-500 w-auto bg-white border cursor-pointer hover:bg-red-500 hover:text-white"
        onClick={handleClearCart}
      >
        Clear Cart
      </Button>
    </>
  );
}
