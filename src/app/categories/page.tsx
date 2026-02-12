import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link"
import Breadcrumb from "../_components/Breadcrumb";
import getCategories from "../_components/api/getCategories"
import Image from "next/image"
export default async function Categories() {
  let res =  await getCategories()
  const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Categories" }];

  return (
    <>
      <div className="main-bg-100 mb-10 mx-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
        <div className="container mx-auto">
          
          <div className="flex flex-wrap py-4">
          
          {res?.map((category: any) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:1/5 p-2" key={category._id}>
              <Link href={`/categories/${category._id}`}>
              <Card className="relative mx-auto w-full max-w-sm pt-0" >
                <div className="absolute inset-0 " />
                <Image width={800} height={550}   
                  src={category.image}
                  alt="Event cover"
                  className="relative h-62.5 w-full object-cover rounded-xl rounded-bl-none rounded-br-none"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle className="line-clamp-1 text-center text-green-900 font-bold text-2xl">{category.name}</CardTitle>

                </CardHeader>
              </Card>
              </Link>
              
            </div>
            ))}
          </div>
        </div>
    </>
  )
}
