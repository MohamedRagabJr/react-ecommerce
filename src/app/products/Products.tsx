import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import getAllProducts from "../api/getProducts"
import Image from "next/image"
import { FaRegHeart } from "react-icons/fa6"
import { FaStar } from "react-icons/fa"
import AddToCartBtn from "../_components/AddToCartBt"

interface Product {
  id: string
  title: string
  description: string
  price: number
  imageCover: string
  ratingsAverage: number
  ratingsQuantity: number
  brand: { name: string }
}

export default async function Products() {
  const res = await getAllProducts()

  // ✅ Handle empty/failed fetch gracefully
  if (!res || res.length === 0) {
    return (
      <div className="flex justify-center items-center py-20 text-gray-500">
        No products found.
      </div>
    )
  }

  return (
    <div className="flex flex-wrap py-4">
      {res.map((product: Product) => (
        <div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
          key={product.id}
        >
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <Link href={`/products/${product.id}`}>
              <Image
                width={800}
                height={550}
                src={product.imageCover}
                alt={product.title} // ✅ meaningful alt text
                className="h-62.5 w-full object-contain rounded-xl"
              />
              <CardHeader>
                <span className="text-sm text-gray-500">{product.brand.name}</span>
                <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                <CardDescription>
                  <p className="line-clamp-1">{product.description}</p>

                  <div className="flex items-center mt-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.round(product.ratingsAverage)
                            ? "opacity-100"
                            : "opacity-30"
                        }
                      />
                    ))}
                    <span className="ml-2 text-gray-500 text-sm">
                      ({product.ratingsQuantity})
                    </span>
                  </div>

                  <h3 className="font-bold text-xl mt-2 text-black">
                    {product.price} EGP
                  </h3>
                </CardDescription>
              </CardHeader>
            </Link>

            <CardFooter className="flex items-center gap-3">
              <AddToCartBtn productId={product.id} />
              {/* ✅ Added sizing and button-like interaction to heart icon */}
              <button className="text-green-900 hover:text-red-500 transition cursor-pointer">
                <FaRegHeart size={20} />
              </button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  )
}