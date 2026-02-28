"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { changePassword } from "../../api/changePassword";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Breadcrumb from "../../_components/Breadcrumb";
export default function ChangePassword() {
  const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Change Your Password" }];
  const form = useForm();
  const router = useRouter();

  async function onSubmit(values: any) {
    try {
      await changePassword(values);

      toast.success("Password changed");
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
            <Input
              className="mb-5"
              {...form.register("currentPassword")}
              placeholder="Current Password"
              type="password"
            />

            <Input
              className="mb-5"
              {...form.register("password")}
              placeholder="New Password"
              type="password"
            />

            <Input
              className="mb-5"
              {...form.register("rePassword")}
              placeholder="Confirm New Password"
              type="password"
            />

            <Button className="mt-5 w-full bg-linear-to-r to-[#2f6a4a] from-[#63a883]">Change Password</Button>
          </form>
        </Card>
      </div>
    </>
  );
}
