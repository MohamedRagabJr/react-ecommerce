import getProductDetails from "../../api/getProductDetails";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "../../_components/Breadcrumb";
import AddToCartBtn from "../../_components/AddToCartBt";
import AddToWishlistBtn from "../../_components/AddToWishlist";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Product Details" },
  ];
  const { id } = await params;
  const data = await getProductDetails(id);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
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
            <span className="text-green-900 font-bold">
              {data.category.name}
            </span>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.price} $</p>
            <div className="flex mt-4 gap-4">
              <AddToCartBtn productId={data.id} />
              <AddToWishlistBtn productId={data.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
