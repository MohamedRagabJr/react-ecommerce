
export default async function getCategories() {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories`, {method: 'GET', cache: 'no-store'}
  )
  const { data } = await res.json()
  return data
}
