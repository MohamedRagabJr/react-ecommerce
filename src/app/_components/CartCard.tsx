import { Card } from "@/components/ui/card";
import Image from "next/image";
import image1 from "../../../public/slide2.jpg"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../_context/CartContext";


export default function CartCard() {
    const { cartItems } = useContext(CartContext)
    type cartItems = {
        _id: string,
        product: {
            title: string,
            imageCover: string,
            category: {
                name: string
            },
            brand: {
                name: string
            }
        },
        count: number,
        price: number
    }

  return (
    <>
    {cartItems?.products?.map((item:cartItems) => 
    <Card  className="flex flex-row p-4 mb-5 items-center" key={item._id}>
        <div className="card-img">
            <Image className="object-contain h-32" src={item.product.imageCover} width={200} height={200} alt="Product Image" />
        </div>
        <div className="card-body w-full">
            <div className="flex justify-between">
                <div className="left">
                    <h3 className="text-lg font-bold text-green-900 mb-1">{item.product.title}</h3>
                    <h6 className="text-sm text-gray-500 mb-2"> {item.product.brand.name} - <span>{item.product.category.name} </span> </h6>
                    <div className="flex gap-2">
                            <button className="quantity-btn border p-2 rounded-sm">
                                <FaMinus />
                            </button>
                            <p className="quantity p-2">{item.count}</p>
                            <button className="quantity-btn border p-2 rounded-sm">
                                <FaPlus />
                            </button>

                    </div>
                </div>
                <div className="right flex flex-col justify-around items-end w-28">
                    <p className="text-xl font-bold text-green-900 mb-1"> EGP {item.price}</p>
                    <button className="remove-btn text-sm text-red-500">Remove</button>
                </div>
            </div>
        </div>
      </Card>
    )}
      
    </>
  )
}
