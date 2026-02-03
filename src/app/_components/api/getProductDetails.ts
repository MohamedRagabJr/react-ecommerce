export default async function getProductDetails(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`, {method: 'GET', cache: 'no-store'}
  )
  const { data } = await res.json()
  return data
}
