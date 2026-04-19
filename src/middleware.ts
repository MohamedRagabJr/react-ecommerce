import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
   const jwt = await getToken({ req, secret: process.env.AUTH_SECRET });

   if (jwt != null){
    return NextResponse.next();
   }
   
   const url = req.nextUrl.clone();
   url.pathname = "/login";
   return NextResponse.redirect(url);
}

export const config = {
    matcher : ["/cart" , "/order"]
}
