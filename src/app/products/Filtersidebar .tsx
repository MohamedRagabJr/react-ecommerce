"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useCallback, useState, useTransition } from "react"
import { FiSearch, FiX, FiChevronDown, FiChevronUp, FiSliders } from "react-icons/fi"

interface Brand {
  _id: string
  name: string
}

interface Category {
  _id: string
  name: string
}

interface FilterSidebarProps {
  brands: Brand[]
  categories: Category[]
}

const SORT_OPTIONS = [
  { label: "Default", value: "" },
  { label: "Price: High → Low", value: "-price" },
  { label: "Price: Low → High", value: "price" },
  { label: "Top Rated", value: "-ratingsAverage" },
  { label: "Most Reviewed", value: "-ratingsQuantity" },
]

function Section({
  title,
  children,
  defaultOpen = true,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-slate-100 pb-4 mb-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-sm font-semibold text-slate-700 mb-3 hover:text-emerald-600 transition-colors"
      >
        {title}
        {open ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
      </button>
      {open && <div>{children}</div>}
    </div>
  )
}

export default function FilterSidebar({ brands, categories }: FilterSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [keyword, setKeyword] = useState(searchParams.get("keyword") ?? "")
  const [sort, setSort] = useState(searchParams.get("sort") ?? "")
  const [priceMin, setPriceMin] = useState(searchParams.get("price[gte]") ?? "")
  const [priceMax, setPriceMax] = useState(searchParams.get("price[lte]") ?? "")
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get("brand") ?? "")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.getAll("category[in]")
  )

  const buildURL = useCallback(
    (overrides: {
      keyword?: string
      sort?: string
      "price[gte]"?: string
      "price[lte]"?: string
      brand?: string
      "category[in]"?: string[]
    }) => {
      const kw      = overrides.keyword      !== undefined ? overrides.keyword      : keyword
      const s       = overrides.sort         !== undefined ? overrides.sort         : sort
      const pMin    = overrides["price[gte]"] !== undefined ? overrides["price[gte]"] : priceMin
      const pMax    = overrides["price[lte]"] !== undefined ? overrides["price[lte]"] : priceMax
      const b       = overrides.brand        !== undefined ? overrides.brand        : selectedBrand
      const cats    = overrides["category[in]"] !== undefined ? overrides["category[in]"]! : selectedCategories

      // Build manually to avoid URLSearchParams encoding brackets
      const parts: string[] = []
      if (kw)   parts.push(`keyword=${encodeURIComponent(kw)}`)
      if (s)    parts.push(`sort=${encodeURIComponent(s)}`)
      if (pMin) parts.push(`price[gte]=${encodeURIComponent(pMin)}`)
      if (pMax) parts.push(`price[lte]=${encodeURIComponent(pMax)}`)
      if (b)    parts.push(`brand=${encodeURIComponent(b)}`)
      cats.forEach((c) => parts.push(`category[in]=${encodeURIComponent(c)}`))
      parts.push("page=1") // reset page on every filter change

      return `${pathname}?${parts.join("&")}`
    },
    [keyword, sort, priceMin, priceMax, selectedBrand, selectedCategories, pathname]
  )

  function navigate(overrides: Parameters<typeof buildURL>[0]) {
    startTransition(() => router.push(buildURL(overrides)))
  }

  function toggleCategory(id: string) {
    const next = selectedCategories.includes(id)
      ? selectedCategories.filter((c) => c !== id)
      : [...selectedCategories, id]
    setSelectedCategories(next)
    navigate({ "category[in]": next })
  }

  function clearAll() {
    setKeyword("")
    setSort("")
    setPriceMin("")
    setPriceMax("")
    setSelectedBrand("")
    setSelectedCategories([])
    startTransition(() => router.push(pathname))
  }

  const hasFilters =
    keyword || sort || priceMin || priceMax || selectedBrand || selectedCategories.length > 0

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sticky top-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <FiSliders className="text-emerald-500" size={16} />
            <span className="font-bold text-slate-800 text-sm tracking-wide uppercase">
              Filters
            </span>
          </div>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-xs text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors"
            >
              <FiX size={12} /> Clear all
            </button>
          )}
        </div>

        {isPending && (
          <div className="mb-3 text-xs text-emerald-500 animate-pulse">Updating…</div>
        )}

        {/* Keyword */}
        <Section title="Search">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={13} />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && navigate({ keyword })}
              placeholder="Search products…"
              className="w-full pl-8 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => navigate({ keyword })}
            className="mt-2 w-full text-xs bg-linear-to-r to-[#2f6a4a] from-[#63a883] hover:bg-emerald-600 text-white rounded-lg py-1.5 transition-colors"
          >
            Search
          </button>
        </Section>

        {/* Sort */}
        <Section title="Sort By">
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value)
              navigate({ sort: e.target.value })
            }}
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Section>

        {/* Price Range */}
        <Section title="Price Range (EGP)">
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              className="w-1/2 text-sm border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="number"
              placeholder="Max"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              className="w-1/2 text-sm border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <button
            onClick={() => navigate({ "price[gte]": priceMin, "price[lte]": priceMax })}
            className="mt-2 w-full text-xs bg-linear-to-r to-[#2f6a4a] from-[#63a883] hover:bg-slate-800 text-white rounded-lg py-1.5 transition-colors"
          >
            Apply Price
          </button>
        </Section>

        {/* Brand */}
        <Section title="Brand">
          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="brand"
                checked={selectedBrand === ""}
                onChange={() => {
                  setSelectedBrand("")
                  navigate({ brand: "" })
                }}
                className="accent-emerald-500"
              />
              <span className="text-sm text-slate-600 group-hover:text-emerald-600 transition-colors">
                All Brands
              </span>
            </label>
            {brands.map((b) => (
              <label key={b._id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="brand"
                  checked={selectedBrand === b._id}
                  onChange={() => {
                    setSelectedBrand(b._id)
                    navigate({ brand: b._id })
                  }}
                  className="accent-emerald-500"
                />
                <span className="text-sm text-slate-600 group-hover:text-emerald-600 transition-colors">
                  {b.name}
                </span>
              </label>
            ))}
          </div>
        </Section>

        {/* Categories */}
        <Section title="Categories" defaultOpen={false}>
          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            {categories.map((c) => (
              <label key={c._id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(c._id)}
                  onChange={() => toggleCategory(c._id)}
                  className="accent-emerald-500"
                />
                <span className="text-sm text-slate-600 group-hover:text-emerald-600 transition-colors">
                  {c.name}
                </span>
              </label>
            ))}
          </div>
        </Section>
      </div>
    </aside>
  )
}