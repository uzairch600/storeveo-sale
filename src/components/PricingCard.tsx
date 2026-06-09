import { Check, Clock, Target } from 'lucide-react'
import type { ReactNode } from 'react'
import type { PricingPackage } from '../data/packages'
import { WhatsAppIcon } from './WhatsAppIcon'

type Props = {
  pkg: PricingPackage
  icon: ReactNode
  whatsappHref: string
}

export function PricingCard({ pkg, icon, whatsappHref }: Props) {
  return (
    <article
      id={`package-${pkg.id}`}
      className={`group relative flex h-full scroll-mt-28 flex-col rounded-xl bg-[#121212] p-6 transition-all duration-300 md:p-7 ${
        pkg.popular
          ? 'ring-2 ring-[#1DB954] shadow-[0_0_40px_-12px_rgb(29_185_84_/_0.45)]'
          : 'hover:bg-[#181818]'
      }`}
    >
      {pkg.popular ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1DB954] px-4 py-1 text-[11px] font-bold tracking-wide text-black uppercase">
          Most Popular
        </span>
      ) : null}

      <div className="mb-5 flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
            pkg.popular ? 'bg-[#1DB954]/15 text-[#1DB954]' : 'bg-[#282828] text-white'
          }`}
          aria-hidden
        >
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
          {pkg.popular ? (
            <p className="text-xs font-semibold text-[#1DB954]">Most Popular</p>
          ) : (
            <p className="text-xs text-[#727272]">Promotion tier</p>
          )}
        </div>
      </div>

      <p className="text-4xl font-black tracking-tight text-white md:text-[2.75rem]">
        ${pkg.price}
        <span className="ml-1.5 text-base font-semibold text-[#b3b3b3]">USD</span>
      </p>

      <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
        <div className="flex gap-2.5 text-sm text-[#b3b3b3]">
          <Target className="mt-0.5 h-4 w-4 shrink-0 text-[#1DB954]" aria-hidden />
          <span>
            <span className="font-semibold text-white">Target: </span>
            {pkg.target}
          </span>
        </div>
        <div className="flex gap-2.5 text-sm text-[#b3b3b3]">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#1DB954]" aria-hidden />
          <span>
            <span className="font-semibold text-white">Delivery: </span>
            {pkg.deliveryTime}
          </span>
        </div>
      </div>

      <div className="mt-6 flex-1">
        <p className="mb-3 text-xs font-bold tracking-[0.15em] text-[#727272] uppercase">
          Includes
        </p>
        <ul className="space-y-2.5">
          {pkg.includes.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm text-[#b3b3b3]">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-[#1DB954]"
                strokeWidth={2.5}
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
          pkg.popular
            ? 'bg-[#25D366] text-white hover:bg-[#20bd5a]'
            : 'bg-white text-black hover:bg-[#f2f2f2]'
        }`}
      >
        <WhatsAppIcon className="h-4 w-4" />
        Buy on WhatsApp
      </a>
    </article>
  )
}
