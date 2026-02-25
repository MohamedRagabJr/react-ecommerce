import { getMyToken } from "../api/getMyToken";

export async function removeItemFromWishlist(productId){
const token = await getMyToken();

const res = await fetch(
`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
{
method:"DELETE",
headers:{
token:token as string
}
}
);

return res.json();

}