import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User { realTokenFromBackend?: string }
  interface Session { realTokenFromBackend?: string }
}
declare module "next-auth/jwt" {
  interface JWT { realTokenFromBackend?: string }
}

export const nextAuthConfig: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt"
  },

  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        })

        const finalRes = await res.json()

        if (finalRes.message === "success") {
          return { ...finalRes.user, realTokenFromBackend: finalRes.token } // ✅
        }

        return null
      },
    }),
  ],

  pages: { signIn: "/login" },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.realTokenFromBackend = user.realTokenFromBackend // ✅
      }
      return token
    },
    session({ session, token }) {
      session.realTokenFromBackend = token.realTokenFromBackend // ✅
      return session
    },
  },
  
}