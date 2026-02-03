import getProductDetails from "../../_components/api/getProductDetails"
import { notFound } from "next/navigation"
import Image from "next/image"
type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params  
  const data = await getProductDetails(id)

  if (!data) {
    notFound()
  }

  return (
    <>
    <div className="container mx-auto py-4">
      <div className="flex items-center">
          <div className="w-1/3">
            <Image
              src={data.imageCover}
              alt={data.title}
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="w-2/3">
          <span className="text-green-400">{data.category.name}</span>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.price} $</p></div>
            
        </div>
    </div>
        
      
    </>
  )
}
