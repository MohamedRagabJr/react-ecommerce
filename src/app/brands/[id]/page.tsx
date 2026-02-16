import getBrandDetails from "../../api/getBrandDetails"
import { notFound } from "next/navigation"
import Image from "next/image"
import Breadcrumb from "../../_components/Breadcrumb";
import {
  Card
} from "@/components/ui/card"
type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function BrandPage({ params }: Props) {
  const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Brand Details" }];
  const { id } = await params  
  const data = await getBrandDetails(id)

  if (!data) {
    notFound()
  }

  return (
    <>
    <Breadcrumb items={breadcrumbItems} />
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-center text-center">
          <div className="w-1/2">
            <Card>
                <Image
              src={data.image}
              alt={data.name}
              width={300}
              height={300}
              className="object-contain w-full h-48"
            />
            <h1 className="text-2xl font-bold border-t pt-4 text-green-900">{data.name}</h1>
            </Card>

          </div>

            
        </div>
    </div>
        
      
    </>
  )
}
