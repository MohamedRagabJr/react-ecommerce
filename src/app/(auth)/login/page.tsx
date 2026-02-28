"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../schemas/auth.schemas";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginData } from "../../types/auth.type";
import { Card } from "@/components/ui/card";
import { MyLogin } from "../../api/login";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Breadcrumb from "../../_components/Breadcrumb";
export default function Login() {
  const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Login" }];
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  async function handleLogin(values: loginData) {
    signIn("credentials", { ...values, redirect: true, callbackUrl: "/" });
  }
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-2 gap-6">
          <Card className="w-full p-7 mx-auto">
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
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
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
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <div className="block mt-4">
                <Link
                  className="text-green-800 underline"
                  href="/forgetPassword"
                >
                  Forgot your password?
                </Link>
              </div>
              <Button
                type="submit"
                className="mt-5 w-full bg-linear-to-r to-[#2f6a4a] from-[#63a883]"
              >
                Login
              </Button>
            </form>
          </Card>
          <div className="flex flex-col gap-5 justify-center">
            <h2 className="font-bold text-green-800 text-3xl">Iam new here</h2>
            <p>
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </p>
            <Link
              className="bg-linear-to-r to-[#2f6a4a] from-[#63a883] px-7 text-white py-2.5 rounded-lg text-center"
              href="/register"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
