import Products from "./Products"
import Breadcrumb from "../_components/Breadcrumb"
import FilterSidebar from "./Filtersidebar "
import Pagination from "./Pagination"
import getAllProducts, { ProductParams } from "../api/getProducts"
import getBrands from "../api/getBrands"
import getCategories from "../api/getCategories"

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = await searchParams

  const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Products" }]

  const params: ProductParams = {
    page:            resolvedParams["page"] as string | undefined,
    sort:            resolvedParams["sort"] as string | undefined,
    keyword:         resolvedParams["keyword"] as string | undefined,
    brand:           resolvedParams["brand"] as string | undefined,
    "price[gte]":    resolvedParams["price[gte]"] as string | undefined,
    "price[lte]":    resolvedParams["price[lte]"] as string | undefined,
    "category[in]":  resolvedParams["category[in]"] as string | string[] | undefined,
  }


  const [{ data: products, totalPages }, brands, categories] = await Promise.all([
    getAllProducts(params),
    getBrands(),
    getCategories(),
  ])


  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <FilterSidebar brands={brands} categories={categories} />

          <div className="flex-1 min-w-0">
            <Products products={products} />
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </>
  )
}