"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { resetPassword } from "../../api/resetPassword";

import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import Breadcrumb from "../../_components/Breadcrumb";

export default function ResetPassword() {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Reset Password" },
  ];
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      newPassword: "",
    },
  });

  async function onSubmit(values: any) {
    try {
      await resetPassword(values);

      toast.success("Password reset successfully");

      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto mt-10">
        <Card className="max-w-xl p-7 mx-auto">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* EMAIL */}

            <Input
              {...form.register("email")}
              placeholder="Enter your email"
              type="email"
              className="mb-4"
            />

            {/* NEW PASSWORD */}

            <Input
              {...form.register("newPassword")}
              placeholder="Enter new password"
              type="password"
            />

            <Button className="mt-5 w-full bg-linear-to-r to-[#2f6a4a] from-[#63a883]">Reset Password</Button>
          </form>
        </Card>
      </div>
    </>
  );
}
