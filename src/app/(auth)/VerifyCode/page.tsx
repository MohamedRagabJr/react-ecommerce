"use client";
import { useForm } from "react-hook-form";
import { verifyResetCode } from "../../api/verifyResetCode";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Breadcrumb from "../../_components/Breadcrumb"

export default function VerifyCode() {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Verify Code" },
  ];

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(values: any) {
    try {
      await verifyResetCode(values.code);

      toast.success("Code verified");

      router.push("/reset-password");
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
            <Input {...form.register("code")} placeholder="Enter reset code" />

            <Button className="mt-5 w-full bg-linear-to-r to-[#2f6a4a] from-[#63a883]">Verify Code</Button>
          </form>
        </Card>
      </div>
    </>
  );
}
