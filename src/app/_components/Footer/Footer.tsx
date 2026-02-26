import Link from "next/link"
import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiYoutube,
} from "react-icons/fi"
import { FaTiktok } from "react-icons/fa"

const links = {
  Shop: [
    { label: "New Arrivals", href: "/products?sort=-createdAt" },
    { label: "All Products", href: "/products" },
    { label: "Brands", href: "/brands" },
    { label: "Categories", href: "/categories" },
    { label: "Sale", href: "/products?sort=-price" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Order Tracking", href: "/track" },
    { label: "Contact Us", href: "/contact" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

const socials = [
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiTwitter,   href: "#", label: "Twitter"   },
  { icon: FiFacebook,  href: "#", label: "Facebook"  },
  { icon: FaTiktok,    href: "#", label: "TikTok"    },
  { icon: FiYoutube,   href: "#", label: "YouTube"   },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-slate-500 mt-20 border-t border-slate-200">
      {/* Top strip */}
      <div className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl logo font-bold flex items-center text-gray-900">
          <span className="bg-green-900 h-9 w-9 mr-1 text-center main-slider content-center rounded-2xl text-white">R</span>
            Store
          </Link>
            <p className="text-sm mt-1 text-gray-600 max-w-xs">
              Quality products, delivered fast. Shop smarter every day.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-gray-600 hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all duration-200"
              >
                <Icon size={15} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 gap-10">
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
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} R Store. All rights reserved.</span>
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