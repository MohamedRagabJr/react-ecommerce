"use server";

import { getMyToken } from "./getMyToken";

export async function getUserWishlist() {
  const token = await getMyToken();

  if (!token) {
    return { data: [], count: 0, status: "unauthorized" };
  }

  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      {
        method: "GET",
        headers: {
          token: token as string
        },
        cache: "no-store"
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch wishlist: ${res.status}`)
    }

    return res.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}