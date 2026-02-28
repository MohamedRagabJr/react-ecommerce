"use client";

import { useState } from "react";
import Sidebar from "../_components/Sidebar";
import Addresses from "../_components/Address";
import Profile from "../_components/Profile";

export default function AccountPage() {
  const [active, setActive] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <Sidebar active={active} setActive={setActive} />

        <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm">
          {active === "profile" && <Profile />}
          {active === "addresses" && <Addresses />}
        </div>
      </div>
    </div>
  );
}