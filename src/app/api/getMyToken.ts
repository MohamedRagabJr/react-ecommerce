import { getServerSession } from "next-auth";
import { nextAuthConfig } from "../../lib/nextauth.config";

export async function getMyToken() {
  try {
    const session = await getServerSession(nextAuthConfig);
    return session?.realTokenFromBackend;
  } catch (error) {
    console.error("Token retrieval error:", error);
    return null;
  }
}