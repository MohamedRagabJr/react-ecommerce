"use server";

export async function verifyResetCode(code: string) {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resetCode: code,
        }),
      },
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Invalid Code");
    }

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
  }
}