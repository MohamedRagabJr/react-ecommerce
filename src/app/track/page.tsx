"use client";

import { useState } from "react";
import Breadcrumb from "../_components/Breadcrumb";

export default function TrackPage() {
      const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Tracking Order" }];

  const [orderId, setOrderId] = useState("");
  const [result, setResult] = useState("");

  const handleTrack = () => {
    if (!orderId) return;
    setResult("Your order is currently being prepared for shipment.");
  };

  return (
    <>
        <Breadcrumb items={breadcrumbItems}/>
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">Track Your Order</h1>

      <p className="text-gray-600 mb-8">
        Enter your order ID to check the status of your shipment.
      </p>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3"
        />

        <button
          onClick={handleTrack}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Track
        </button>
      </div>

      {result && (
        <div className="mt-8 p-4 border rounded-lg bg-gray-50">
          {result}
        </div>
      )}
    </div>
    </>
  );
}