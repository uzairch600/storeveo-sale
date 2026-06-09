import {
  BarChart3,
  Globe2,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { BRAND_NAME } from '../config/site'
import { whyChooseItems } from '../data/trustContent'

const icons = [ShieldCheck, Zap, Headphones, MessageCircle, BarChart3, Globe2]

export function WhyStoreveoSection() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="scroll-mt-24 border-b border-white/5 bg-black px-4 py-14 md:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#1DB954] uppercase">
            Why {BRAND_NAME}
          </p>
          <h2 id="why-heading" className="mt-3 text-2xl font-bold text-white md:text-4xl">
            Built for artists who want real momentum, not empty numbers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#b3b3b3] md:text-lg">
            We combine Meta ads expertise, Spotify-native funnels, and a direct line to your
            campaign lead. No black boxes. No ghosting. Just growth you can measure.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {whyChooseItems.map((item, i) => {
            const Icon = icons[i] ?? ShieldCheck
            return (
              <article
                key={item.title}
                className="group rounded-xl bg-[#121212] p-6 transition-colors hover:bg-[#181818]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#1DB954]/15 text-[#1DB954] transition-colors group-hover:bg-[#1DB954]/25">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b3b3b3]">{item.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
