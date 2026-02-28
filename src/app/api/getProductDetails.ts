export default async function getProductDetails(id: string) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`, {method: 'GET', cache: 'no-store'}
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch product details: ${res.status}`)
    }

    const { data } = await res.json()
    return data
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}