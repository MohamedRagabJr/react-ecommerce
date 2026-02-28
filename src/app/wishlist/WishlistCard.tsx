"use client";

import { useContext } from "react";
import { WishlistContext  } from "../_context/WishlistContext";
import {getUserWishlist} from "../api/getWishlist"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { FaStar } from "react-icons/fa"
import AddToCartBtn from "../_components/AddToCartBt"
import AddToWishlistBtn from "../_components/AddToWishlist"
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { removeItemFromWishlist } from "./removeWishlist";
import { toast } from "sonner";
import {useEffect ,useState} from "react";
import type Product from "../types/product.type";

export default function WishlistCard() {

const { wishlistItems, setWishlistItems, setnumOfWishlistItems } = useContext(WishlistContext)!;
  console.log(wishlistItems)
  const [isLoading, setIsLoading] = useState(true); 
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
    } finally {
      if (mounted) setIsLoading(false);
    }
  })();
  return () => { mounted = false; };
}, [setWishlistItems, setnumOfWishlistItems]);
async function handleDeleteItem(productId: string) {
  toast.promise(
    async () => {
      await removeItemFromWishlist(productId);

      // تحديث state مباشرة من الـ state الحالي
      setWishlistItems(prev => prev.filter(item => item._id !== productId));

      setnumOfWishlistItems(prev => prev - 1);

    },
    {
      success: "Item deleted successfully",
      loading: "Deleting...",
      error: "Something went wrong",
      position: "top-center",
      richColors: true,
    }
  );
}
if (isLoading) return <div className="flex justify-center py-20">Loading...</div>;

  return (
      <>
        <div className="flex flex-wrap py-4">
            {wishlistItems?.map((item :Product) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/4 p-2"
              key={item._id}
            >
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <Button 
                  className="-right-4 -top-4 absolute bg-linear-to-r to-[#2f6a4a] from-[#63a883] rounded-xl" 
                  onClick={(e) => {
                    e.preventDefault();  // prevent Link navigation
                    e.stopPropagation(); // stop event bubbling
                    handleDeleteItem(item._id);
                  }}
                >
                  <IoMdClose className="text-white" size={20}/>
                </Button>
                <Link href={`/products/${item._id}`}>
                  <Image
                    width={800}
                    height={550}
                    src={item.imageCover}
                    alt={item.title}
                    className="h-62.5 w-full object-contain rounded-xl"
                  />
                  <CardHeader>
                    <span className="text-sm text-gray-500">{item.brand?.name ?? "No Brand"}</span>
                    <CardTitle className="line-clamp-1">{item.title}</CardTitle>
                    <CardDescription>
                      <p className="line-clamp-1">{item.description}</p>
  
                      <div className="flex items-center mt-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < Math.round(item.ratingsAverage)
                                ? "opacity-100"
                                : "opacity-30"
                            }
                          />
                        ))}
                        <span className="ml-2 text-gray-500 text-sm">
                          ({item.ratingsQuantity})
                        </span>
                      </div>
  
                      <h3 className="font-bold text-xl mt-2 text-black">
                        {item.price} EGP
                      </h3>
                    </CardDescription>
                  </CardHeader>
                </Link>
  
                <CardFooter className="flex items-center gap-3">
                  <AddToCartBtn productId={item._id} />
                  <AddToWishlistBtn productId={item._id} />
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </>


  );
}