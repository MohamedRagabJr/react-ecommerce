"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X, Search } from "lucide-react"
import { TiShoppingCart } from "react-icons/ti";
import { Profile } from "./Profile";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-xl logo font-bold flex items-center text-gray-900">
          <TiShoppingCart className="text-green-600"/>
            MyStore
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link prefetch href="/" className="nav-link">Home</Link>
            <Link prefetch href="/carts" className="nav-link">Carts</Link>
            <Link prefetch href="/products" className="nav-link">Products</Link>
            <Link prefetch href="/categories" className="nav-link">Categories</Link>
            <Link prefetch href="/brands" className="nav-link">Brands</Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-lg pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Search
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
          </div>

          {/* Cart */}
          <div className="flex gap-3 items-center">
           <Link href="/cart" className="relative ml-4">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
          
          <Link href="/login" className="relative ml-4">
            Login
          </Link>
          <Link href="/register" className="relative ml-4">
            Register
          </Link>
          <Profile />
          </div>
          

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden ml-3"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/categories" onClick={() => setOpen(false)}>Categories</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
