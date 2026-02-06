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

export default function Login() {
  const form =  useForm({
    defaultValues: {
      email: "",
      password: "",
    }, resolver: zodResolver(LoginSchema)
  })
  async function handleLogin(values:loginData){
    console.log(values)
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin` , {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
    let finalRes = await res.json()
    console.log(finalRes)
  }
  return (
    <>
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
        <Button type="submit">Login</Button>
      </form>
    </>
  )
}
