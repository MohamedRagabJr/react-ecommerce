"use client";

import { useState, useContext } from "react";
import { CartContext } from "../_context/CartContext";
import { createCashOrder, createVisaOrder } from "./paymentAction";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";

import { toast } from "sonner";

export default function PaymentComponent() {
  const { cartId } = useContext(CartContext)!;

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [loading, setLoading] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    city: "",

    details: "",

    phone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setShippingAddress({
      ...shippingAddress,

      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    if (
      !shippingAddress.city ||
      !shippingAddress.details ||
      !shippingAddress.phone
    )
      return toast.error("Please fill all fields");

    try {
      setLoading(true);

      // CASH

      if (paymentMethod === "cash") {
        const data = await createCashOrder(cartId, shippingAddress);

        toast.success(data.message || "Order placed");
      }

      // VISA

      if (paymentMethod === "visa") {
        const data = await createVisaOrder(cartId, shippingAddress);

        if (data?.session?.url) {
          window.location.href = data.session.url;
        } else if (data?.url) {
          window.location.href = data.url;
        } else {
          toast.error("Unable to get payment URL");
        }
      }
    } catch {
      toast.error("Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* City */}

        <Input placeholder="City" name="city" onChange={handleChange} />

        {/* Address */}

        <Input placeholder="Address" name="details" onChange={handleChange} />

        {/* Phone */}

        <Input placeholder="Phone" name="phone" onChange={handleChange} />
        {/* Payment Method */}

        <div>
          <Label>Payment Method</Label>

          <RadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            className="flex gap-5 mt-2"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="cash" id="cash" />

              <Label htmlFor="cash">Cash</Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="visa" id="visa" />

              <Label htmlFor="visa">Visa</Label>
            </div>
          </RadioGroup>
        </div>

        <Button onClick={handleSubmit} className="w-full">
          {loading ? "Processing..." : "Place Order"}
        </Button>
      </CardContent>
    </Card>
  );
}
