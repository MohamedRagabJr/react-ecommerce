export default async function getProductDetails() {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products`, {method: 'GET', cache: 'no-store'}
  )
  const { data } = await res.json()
  return data
}