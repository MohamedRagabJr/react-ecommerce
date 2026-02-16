import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthConfig : NextAuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize :async function(Credentials){
                const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin` , {
                method: "POST",
                body: JSON.stringify(Credentials),
                headers: {
                    "Content-Type": "application/json"
                }
                })
                let finalRes = await res.json()
                if (finalRes.message == "success"){
                    return finalRes.user
                }else{
                    return null
                }
            }

        })
    ],
    // secret : process.env.AUTH_SECRET

    pages: {
        signIn: "/login",
        signOut: "/register",
        
    },
    callbacks: {
        jwt(params) {
            console.log("params" , params);
            if(params.user){
                params.token.realTokenFromBackend = params.userrealTokenFromBackend;
            }
            return params.token
        },
        session(params){
            console.log("params" , params);
            
            return params.session
        }
    }
    
}