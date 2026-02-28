import { getMyToken } from "../api/getMyToken";

export async function removeItemFromWishlist(productId: string) {
  const token = await getMyToken();

  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {
        method: "DELETE",
        headers: {
          token: token as string
        }
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to remove item from wishlist: ${res.status}`)
    }

    return res.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}