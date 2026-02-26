"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useTransition } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

interface PaginationProps {
  totalPages: number
}

export default function Pagination({ totalPages }: PaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const currentPage = Number(searchParams.get("page") ?? "1")

  function goTo(page: number) {
    if (page < 1 || page > totalPages) return
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(page))
    startTransition(() => router.push(`${pathname}?${params.toString()}`))
  }

  if (totalPages <= 1) return null

  // Build visible page numbers with ellipsis
  function getPages(): (number | "...")[] {
    const delta = 2
    const range: number[] = []
    const pages: (number | "...")[] = []

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    if (range[0] > 2) pages.push(1, "...")
    else pages.push(1)

    pages.push(...range)

    if (range[range.length - 1] < totalPages - 1) pages.push("...", totalPages)
    else pages.push(totalPages)

    return pages
  }

  const pages = getPages()

  return (
    <div className="flex items-center justify-center gap-1.5 py-8">
      {/* Prev */}
      <button
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1 || isPending}
        className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        <FiChevronLeft size={14} />
        Prev
      </button>

      {/* Page numbers */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="px-2 text-slate-400 select-none">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => goTo(p as number)}
            disabled={isPending}
            className={`w-9 h-9 text-sm rounded-lg font-medium transition-all ${
              p === currentPage
                ? "bg-linear-to-r to-[#2f6a4a] from-[#63a883] text-white shadow-sm shadow-emerald-200 border-0"
                : "border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600"
            }`}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages || isPending}
        className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        Next
        <FiChevronRight size={14} />
      </button>

      {isPending && (
        <span className="ml-2 text-xs text-emerald-500 animate-pulse">Loading…</span>
      )}
    </div>
  )
}