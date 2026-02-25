"use server";

import { cookies } from "next/headers";

export async function changePassword(values: any) {
  const token = (await cookies()).get("token")?.value;

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",

    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",

        token: token!,
      },

      body: JSON.stringify(values),
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
