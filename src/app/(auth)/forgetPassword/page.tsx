"use client"

import { useForm } from "react-hook-form"
import { forgotPassword } from "../../api/forgotPassword"
import { toast } from "sonner"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"



export default function ForgotPassword() {


  const form = useForm({

    defaultValues: {

      email: ""

    }

  })


  async function onSubmit(values: any) {

    try {

      await forgotPassword(values.email)

      toast.success("Reset code sent to your email")

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

            {...form.register("email")}

            placeholder="Enter your email"

            type="email"

          />


          <Button className="mt-5">

            Send Code

          </Button>


        </form>

      </Card>

    </div>

  )

}