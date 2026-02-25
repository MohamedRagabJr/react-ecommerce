"use client"

import { useForm } from "react-hook-form"

import { changePassword } from "../../api/changePassword"

import { toast } from "sonner"

import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"

import { Card } from "@/components/ui/card"

export default function ChangePassword() {


  const form = useForm()


  async function onSubmit(values: any) {

    try {

      await changePassword(values)

      toast.success("Password changed")

    }

    catch (error: any) {

      toast.error(error.message)

    }

  }


  return (
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

      <Button>

        Change Password

      </Button>

    </form>
</Card>
</div>

  )

}