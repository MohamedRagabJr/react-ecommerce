export default async function getBrands() {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands`, {method: 'GET', cache: 'no-store'}
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch brands: ${res.status}`)
    }

    const { data } = await res.json()
    return data
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}