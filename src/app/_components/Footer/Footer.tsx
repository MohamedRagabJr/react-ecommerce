import Link from "next/link"

const links = {
  Shop: [
    { label: "All Products", href: "/products" },
    { label: "Brands", href: "/brands" },
    { label: "Categories", href: "/categories" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Order Tracking", href: "/track" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-slate-500 border-t border-slate-200">      

      {/* Link columns */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <h4 className="text-green-900 text-2xl font-bold uppercase tracking-widest mb-3">
              {group}
            </h4>
            <ul className="space-y-2.5">
              {items.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 hover:text-emerald-600 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* logo */}
          <div className="flex flex-col gap-4 justify-center">
            <Link href="/" className=" logo font-bold flex items-center text-5xl text-gray-900">
          <span className="bg-linear-to-r from-[#2f6a4a] to-[#63a883] mr-1 text-center main-slider content-center rounded-full text-white w-15 h-15">R</span>
            Store
          </Link>
            <p className="text-sm mt-1 text-gray-600 max-w-xs">
              Quality products, delivered fast. Shop smarter every day.
            </p>
          </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span className="text-lg">© {new Date().getFullYear()} R Store. All rights reserved.</span>
          <div className="flex items-center gap-1.5">
            {["VISA", "MC", "PayPal", "Cash"].map((m) => (
              <span
                key={m}
                className="px-2 py-0.5 rounded border border-slate-200 text-gray-600 font-medium bg-white"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}