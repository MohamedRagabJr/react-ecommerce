export default async function getCategoryDetails(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}`, {method: 'GET', cache: 'no-store'}
  )
  const { data } = await res.json()
  return data
}
