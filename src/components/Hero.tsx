import { Sparkles } from 'lucide-react'
import {
  BRAND_NAME,
  HANDLER_NAME,
  buildGeneralWhatsAppLink,
} from '../config/site'
import { HeroPipeline } from './HeroPipeline'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-white/5 bg-black"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(29_185_84_/_0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgb(255_255_255_/_0.04),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-5 pb-10 md:px-6 md:pt-6 md:pb-12 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-10 xl:grid-cols-[1.1fr_minmax(0,460px)] xl:gap-12">
          <div className="flex max-w-xl flex-col justify-center">
            <span className="inline-flex w-fit max-w-full items-center gap-2 self-start rounded-full bg-[#1DB954]/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#d4d4d4] uppercase">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#1DB954]" aria-hidden />
              Music promotion · Verified streams
            </span>

            <h1
              id="hero-heading"
              className="mt-4 text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.08] font-bold tracking-tight text-white"
            >
              Scale your sound with{' '}
              <span className="text-[#1DB954]">{BRAND_NAME}</span>
            </h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#b3b3b3] md:text-lg">
              Premium Meta ads campaigns, smart-link setup, and real listener growth, built
              for artists who refuse to stay regional forever.
            </p>

            <p className="mt-3 text-sm font-medium text-[#b3b3b3]">
              Your campaign lead:{' '}
              <a
                href="#zaini"
                className="font-bold text-white underline-offset-2 hover:text-[#1DB954] hover:underline"
              >
                {HANDLER_NAME}
              </a>
              <span className="text-[#727272]"> · WhatsApp anytime</span>
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#packages"
                className="inline-flex items-center justify-center rounded-full bg-[#1DB954] px-8 py-3.5 text-sm font-bold text-black transition-all hover:scale-[1.02] hover:bg-[#1ed760] active:scale-[0.98]"
              >
                View packages
              </a>
              <a
                href={buildGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#121212] px-8 py-3.5 text-sm font-bold text-white transition-all hover:border-white/30 hover:bg-[#282828]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                WhatsApp {HANDLER_NAME}
              </a>
            </div>
          </div>

          <div className="flex h-full w-full lg:justify-end">
            <HeroPipeline />
          </div>
        </div>
      </div>
    </section>
  )
}
