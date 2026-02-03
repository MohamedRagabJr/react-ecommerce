
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import getAllProducts from "../_components/api/getProducts"
import Image from "next/image"
export default async function Products() {

let res =  await getAllProducts()
  return (
    <>

    <div className="flex flex-wrap py-4">
      
      {res?.map((product: any) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:1/5 p-2" key={product.id}>
          <Link href={`/products/${product.id}`}>
          <Card className="relative mx-auto w-full max-w-sm pt-0" >
            <div className="absolute inset-0 " />
            <Image width={800} height={550}   
              src={product.imageCover}
              alt="Event cover"
              className="relative h-62.5 w-full object-contain rounded-xl"
            />
            <CardHeader>
              <CardAction>
              </CardAction>
              <CardTitle className="line-clamp-1">{product.title}</CardTitle>
              <CardDescription className="line-clamp-1">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline">Add To Cart</Button>
            </CardFooter>
          </Card>
          </Link>
          
        </div>
        ))}
    </div>


    
  </>
  )
}
