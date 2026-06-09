import { useEffect, useState } from 'react'
import {
  BRAND_NAME,
  HANDLER_NAME,
  LOGO_URL,
  buildGeneralWhatsAppLink,
} from '../config/site'
import { NavSearch } from './NavSearch'
import { WhatsAppIcon } from './WhatsAppIcon'

const navLinks = [
  { label: 'Why Storeveo', href: '#why' },
  { label: 'Meet Zaini', href: '#zaini' },
  { label: 'Pricing', href: '#packages' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-white/10 bg-black/90 backdrop-blur-xl'
          : 'border-transparent bg-black'
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-3 px-4 py-3 md:gap-4 md:px-6 lg:flex-nowrap lg:px-8">
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label={`${BRAND_NAME} home`}
        >
          <img
            src={LOGO_URL}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
          />
          <span className="hidden font-sans text-xl font-bold tracking-tight text-white sm:inline md:text-2xl">
            {BRAND_NAME}
          </span>
        </a>

        <nav
          className="order-3 flex w-full items-center justify-center gap-1 rounded-full bg-[#121212] p-1 lg:order-2 lg:w-auto lg:gap-0 lg:bg-transparent lg:p-0"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#b3b3b3] transition-colors hover:bg-[#282828] hover:text-white lg:px-3.5 lg:text-sm lg:hover:bg-transparent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="order-2 ml-auto flex min-w-0 flex-1 items-center justify-end gap-3 lg:order-3 lg:max-w-md lg:flex-1">
          <div className="hidden min-w-0 flex-1 md:block">
            <NavSearch />
          </div>

          <a
            href={buildGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span className="hidden sm:inline">{HANDLER_NAME}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 px-4 py-2.5 md:hidden">
        <NavSearch />
      </div>
    </header>
  )
}
