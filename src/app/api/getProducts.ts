import type Product from "../types/product.type"
export interface ProductParams {
  page?: string
  limit?: string
  sort?: string
  keyword?: string
  brand?: string
  "price[gte]"?: string
  "price[lte]"?: string
  "category[in]"?: string | string[]
}
export default async function getAllProducts(params: ProductParams = {}): Promise<{
  data: Product[]
  totalPages: number
  currentPage: number
}> {
  try {
    const parts: string[] = []

    const cats = params["category[in]"]
    const { "category[in]": _cats, ...rest } = params

    Object.entries(rest).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") return
      parts.push(`${key}=${encodeURIComponent(value as string)}`)
    })

    if (cats) {
      const arr = Array.isArray(cats) ? cats : [cats]
      arr.forEach((c) => { if (c) parts.push(`category[in]=${encodeURIComponent(c)}`) })
    }

    const limit = Number(params.limit ?? 20)
    if (!parts.some((p) => p.startsWith("limit="))) {
      parts.push(`limit=${limit}`)
    }

    const url = `https://ecommerce.routemisr.com/api/v1/products?${parts.join("&")}`
    console.log("[getAllProducts] URL:", url)

    const res = await fetch(url, { method: "GET", cache: "no-store" })

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`)
    }

    const json = await res.json()

    const totalResults: number = json.results ?? json.data?.length ?? 0
    const totalPages = Math.ceil(totalResults / limit) || 1
    const currentPage = json.paginationResult?.currentPage ?? Number(params.page ?? 1)

    console.log(`[getAllProducts] totalResults: ${totalResults} | limit: ${limit} | totalPages: ${totalPages}`)

    return {
      data: json.data ?? [],
      totalPages,
      currentPage,
    }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}