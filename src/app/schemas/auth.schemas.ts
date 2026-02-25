import * as z from "zod"
export const LoginSchema = z.object({
    email: z.string().min(1 , "Email is required").email("Invalid email format"),
    password: z.string().nonempty().min(6 , "Password must be at least 6 characters long")
})

export const RegisterSchema = z.object({

  name: z.string().min(3),

  email: z.string().email(),

  password: z.string().min(6),

  rePassword: z.string(),

  phone: z.string().min(11).max(11)

})
.refine((data) => data.password === data.rePassword, {

  message: "Passwords don't match",
  path: ["rePassword"]

})