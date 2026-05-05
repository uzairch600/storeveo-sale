import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Why This Domain', href: '#why' },
  { label: 'Value', href: '#value' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToOffer = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }, [])

  return (
    <motion.header
      role="banner"
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-[var(--color-border-subtle)] bg-[rgb(6_6_7_/0.82)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a
          href="#home"
          className="group flex items-baseline gap-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
          aria-label="Storeveo.com — top of page"
        >
          <span className="font-display text-2xl tracking-[0.02em] text-stone-100 italic md:text-[1.65rem]">
            STORE
          </span>
          <span className="font-sans text-lg font-medium tracking-[0.35em] text-[var(--color-gold)] md:text-xl">
            VEO
          </span>
        </a>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[13px] font-medium tracking-[0.14em] text-stone-400 uppercase transition-colors hover:text-stone-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={scrollToOffer}
            className="hidden rounded-full border border-[rgb(201_169_98_/0.45)] bg-[rgb(201_169_98_/0.08)] px-5 py-2.5 font-sans text-[13px] font-semibold tracking-[0.12em] text-[var(--color-gold)] uppercase shadow-[inset_0_1px_0_rgb(255_255_255_/0.06)] transition-colors hover:bg-[rgb(201_169_98_/0.14)] sm:inline-flex"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Make an Offer
          </motion.button>

          <button
            type="button"
            className="inline-flex rounded-lg border border-white/10 p-2 text-stone-200 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-[var(--color-border-subtle)] bg-[rgb(6_6_7_/0.96)] backdrop-blur-xl lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-5 py-4"
              aria-label="Mobile primary"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 font-sans text-sm tracking-[0.12em] text-stone-300 uppercase hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <motion.button
                type="button"
                onClick={scrollToOffer}
                className="mt-2 rounded-full border border-[rgb(201_169_98_/0.45)] bg-[rgb(201_169_98_/0.08)] px-5 py-3 font-sans text-[13px] font-semibold tracking-[0.12em] text-[var(--color-gold)] uppercase"
                whileTap={{ scale: 0.98 }}
              >
                Make an Offer
              </motion.button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
