import { getMyToken } from "./getMyToken";

export async function getUserWishlist() {
const token = await getMyToken();
const res = await fetch(
"https://ecommerce.routemisr.com/api/v1/wishlist",
{
headers:{
token: token as string
}
}
);

return res.json();

}