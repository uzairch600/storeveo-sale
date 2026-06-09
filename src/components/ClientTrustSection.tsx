import { Quote, Star } from 'lucide-react'
import {
  artistCategories,
  clientTestimonials,
  trustStats,
} from '../data/trustContent'
import { BRAND_NAME } from '../config/site'

export function ClientTrustSection() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="scroll-mt-24 border-b border-white/5 bg-[#121212] px-4 py-14 md:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#1DB954] uppercase">
            Artist trust
          </p>
          <h2 id="trust-heading" className="mt-3 text-2xl font-bold text-white md:text-4xl">
            Clients choose {BRAND_NAME} for clarity, speed, and results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#b3b3b3]">
            Independent artists, labels, and managers from Lahore to London trust us to
            turn ad spend into listener growth they can feel in the algorithm.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/5 bg-[#181818] px-4 py-6 text-center md:px-6"
            >
              <p className="text-2xl font-black text-[#1DB954] md:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold tracking-wide text-[#727272] uppercase md:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-white/5 bg-[#181818] py-4">
          <div className="trust-marquee flex gap-8 whitespace-nowrap">
            {[...artistCategories, ...artistCategories].map((cat, i) => (
              <span
                key={`${cat}-${i}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#727272]"
              >
                <Star className="h-3.5 w-3.5 text-[#1DB954]" aria-hidden />
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {clientTestimonials.map((t) => (
            <blockquote
              key={t.artist}
              className="flex h-full flex-col rounded-xl bg-black/40 p-6 ring-1 ring-white/5"
            >
              <Quote className="h-8 w-8 text-[#1DB954]/40" aria-hidden />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#b3b3b3]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-bold text-white">{t.artist}</p>
                <p className="mt-1 text-xs font-semibold text-[#1DB954]">{t.result}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
