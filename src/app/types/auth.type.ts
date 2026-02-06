import * as z from "zod"
import {LoginSchema} from "../schemas/auth.schemas"
export type loginData = z.infer< typeof LoginSchema>