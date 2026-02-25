import * as z from "zod"
import {LoginSchema , RegisterSchema}  from "../schemas/auth.schemas"
export type loginData = z.infer< typeof LoginSchema>
export type registerData = z.infer< typeof RegisterSchema>