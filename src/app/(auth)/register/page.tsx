"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../schemas/auth.schemas";
import { registerData } from "../../types/auth.type";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MyRegister } from "../../api/register";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import Link from "next/link";
import Breadcrumb from "../../_components/Breadcrumb";

export default function Register() {
  const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Register" }];
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },

    resolver: zodResolver(RegisterSchema),
  });

  async function handleRegister(values: registerData) {
    try {
      await MyRegister(values);

      toast.success("Account created successfully");

      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto mt-10">
        <Card className="max-w-2xl p-7 mx-auto">
          <form onSubmit={form.handleSubmit(handleRegister)}>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="mb-5">
                  <FieldLabel>Name</FieldLabel>

                  <Input {...field} />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* EMAIL */}

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="mb-5">
                  <FieldLabel>Email</FieldLabel>

                  <Input {...field} type="email" />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* PASSWORD */}

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="mb-5">
                  <FieldLabel>Password</FieldLabel>

                  <Input {...field} type="password" />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* REPASSWORD */}

            <Controller
              name="rePassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="mb-5">
                  <FieldLabel>Confirm Password</FieldLabel>

                  <Input {...field} type="password" />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* PHONE */}

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Phone</FieldLabel>

                  <Input {...field} />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button className="mt-5 w-full bg-linear-to-r to-[#2f6a4a] from-[#63a883]">
              Register
            </Button>
            <Link
              href="/login"
              className="underline block mt-5 text-center text-green-800"
            >
              Already have an account? Log in here
            </Link>
          </form>
        </Card>
      </div>
    </>
  );
}
