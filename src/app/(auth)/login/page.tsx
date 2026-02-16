"use client"
import { useForm, Controller } from "react-hook-form";
import {zodResolver } from "@hookform/resolvers/zod";
import {LoginSchema} from "../../schemas/auth.schemas";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { loginData } from "../../types/auth.type";
import { Card } from "@/components/ui/card";
import { MyLogin } from "../../api/login";
import {signIn} from "next-auth/react"

export default function Login() {
  const form =  useForm({
    defaultValues: {
      email: "",
      password: "",
    }, resolver: zodResolver(LoginSchema)
  })
  async function handleLogin(values:loginData){
    signIn("credentials" , {...values , redirect: true , callbackUrl: "/"})
  }
  return (
    <>
    <div className="container mx-auto mt-10">
       <Card className="max-w-2xl p-7 mx-auto">
          <form onSubmit={form.handleSubmit(handleLogin)}>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Login button not working on mobile"
                    autoComplete="off"
                    className="mb-5"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Login button not working on mobile"
                    autoComplete="off"
                    type="password"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Button type="submit" className="mt-5">Login</Button>
          </form>
        </Card>
    </div>
       
      
    </>
  )
}
