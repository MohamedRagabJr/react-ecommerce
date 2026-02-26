import CategorySlider from "./_components/Slider/CategorySlider";
import Slider from "./_components/Slider/Slider";
import Products from "./products/Products";
import Pagination from "./products/Pagination"
import getAllProducts from "./api/getProducts"
import getBrands from "./api/getBrands"
import getCategories from "./api/getCategories"
import {PageProps} from "./types/product.type"

export default async function Home({ searchParams }: PageProps) {
  const [{ data: products, totalPages }, brands, categories] = await Promise.all([
      getAllProducts(searchParams),
      getBrands(),
      getCategories(),
    ])
  return (
    <>
      <Slider />
      <CategorySlider />
      <div className="flex-1 min-w-0">
            {/* Products — passed as prop, no change to Products.tsx internals */}
            <Products products={products} />

            {/* Pagination */}
            <Pagination totalPages={totalPages} />
          </div>
    </>
  );
}
