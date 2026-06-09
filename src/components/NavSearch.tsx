import { useEffect, useMemo, useRef, useState } from 'react'
import { Globe, Package, Search, Sparkles } from 'lucide-react'
import { HANDLER_NAME } from '../config/site'
import { allPackages } from '../data/packages'

const pages = [
  { label: 'Why Storeveo', href: '#why', keywords: 'why choose benefits' },
  { label: 'Artist trust', href: '#trust', keywords: 'clients reviews testimonials' },
  { label: 'Live campaign proof', href: '#simulator', keywords: 'results streams trending' },
  { label: `Meet ${HANDLER_NAME}`, href: '#zaini', keywords: 'about experience lead' },
  { label: 'Pricing packages', href: '#packages', keywords: 'buy south asia global' },
]

const demoTerms = [
  'Amplified Wave',
  'Global Launch',
  'Starter Spin',
  'South Asia',
  HANDLER_NAME,
]

export function NavSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const [demoIndex, setDemoIndex] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)

  const demoActive = !focused && query.length === 0

  useEffect(() => {
    if (!demoActive) return
    const rotateTimer = window.setInterval(() => {
      setDemoIndex((n) => (n + 1) % demoTerms.length)
    }, 2400)
    return () => window.clearInterval(rotateTimer)
  }, [demoActive])

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    return () => document.removeEventListener('mousedown', onPointer)
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) {
      return {
        packages: allPackages.slice(0, 4),
        pages: pages.slice(0, 4),
      }
    }
    return {
      packages: allPackages.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.sectionTitle.toLowerCase().includes(q),
      ),
      pages: pages.filter(
        (p) =>
          p.label.toLowerCase().includes(q) ||
          p.keywords.toLowerCase().includes(q),
      ),
    }
  }, [query])

  const showDropdown = open && (focused || query.length > 0)
  const hasResults = results.packages.length > 0 || results.pages.length > 0

  function navigate(href: string) {
    setOpen(false)
    setFocused(false)
    setQuery('')
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={rootRef} className="relative w-full max-w-sm lg:max-w-md">
      <label htmlFor="site-search" className="sr-only">
        Search packages and sections
      </label>
      <Search
        className="pointer-events-none absolute top-1/2 left-4 z-10 h-4 w-4 -translate-y-1/2 text-[#b3b3b3]"
        aria-hidden
      />
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
        }}
        onFocus={() => {
          setFocused(true)
          setOpen(true)
        }}
        onBlur={() => setFocused(false)}
        placeholder={
          focused || query
            ? 'Packages, sections, regions…'
            : `Search “${demoTerms[demoIndex]}”`
        }
        className="w-full rounded-full bg-[#121212] py-2.5 pr-4 pl-11 text-sm text-white placeholder:text-[#727272] outline-none transition-colors hover:bg-[#282828] focus:bg-[#282828] focus:ring-2 focus:ring-[#1DB954]/40"
        autoComplete="off"
      />

      {showDropdown ? (
        <div className="absolute top-[calc(100%+8px)] right-0 left-0 z-50 overflow-hidden rounded-xl border border-white/10 bg-[#121212] shadow-[0_24px_48px_-12px_rgb(0_0_0_/_0.8)]">
          {!hasResults ? (
            <p className="px-4 py-6 text-center text-sm text-[#727272]">
              No matches. Try &ldquo;Amplified&rdquo; or &ldquo;Global&rdquo;
            </p>
          ) : (
            <>
              {results.pages.length > 0 ? (
                <div className="border-b border-white/5 p-2">
                  <p className="px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#727272] uppercase">
                    Pages
                  </p>
                  <ul>
                    {results.pages.map((page) => (
                      <li key={page.href}>
                        <button
                          type="button"
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-[#b3b3b3] transition-colors hover:bg-[#282828] hover:text-white"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => navigate(page.href)}
                        >
                          <Sparkles className="h-4 w-4 shrink-0 text-[#1DB954]" />
                          {page.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {results.packages.length > 0 ? (
                <div className="p-2">
                  <p className="px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#727272] uppercase">
                    Packages
                  </p>
                  <ul>
                    {results.packages.map((pkg) => {
                      const regional = pkg.sectionTitle.includes('South Asia')
                      return (
                        <li key={pkg.id}>
                          <button
                            type="button"
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-[#282828]"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => navigate(`#package-${pkg.id}`)}
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#282828] text-[#1DB954]">
                              {regional ? (
                                <Package className="h-4 w-4" aria-hidden />
                              ) : (
                                <Globe className="h-4 w-4" aria-hidden />
                              )}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-semibold text-white">
                                {pkg.name}
                              </span>
                              <span className="block truncate text-xs text-[#727272]">
                                ${pkg.price} · {regional ? 'South Asia' : 'Global'}
                              </span>
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ) : null}
            </>
          )}
        </div>
      ) : null}
    </div>
  )
}
