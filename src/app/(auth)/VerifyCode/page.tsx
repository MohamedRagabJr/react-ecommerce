"use client"

import { useForm } from "react-hook-form"

import { verifyResetCode } from "../../api/verifyResetCode"

import { toast } from "sonner"

import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"

import { Card } from "@/components/ui/card"



export default function VerifyCode() {


  const router = useRouter()


  const form = useForm({

    defaultValues: {

      code: ""

    }

  })


  async function onSubmit(values: any) {

    try {

      await verifyResetCode(values.code)

      toast.success("Code verified")

      router.push("/reset-password")

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

            {...form.register("code")}

            placeholder="Enter reset code"

          />


          <Button className="mt-5">

            Verify Code

          </Button>


        </form>

      </Card>

    </div>

  )

}