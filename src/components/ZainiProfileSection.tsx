import { buildGeneralWhatsAppLink, HANDLER_NAME, ZAINI_PHOTO_URL } from '../config/site'
import { zainiExperienceStats, zainiHighlights } from '../data/trustContent'
import { WhatsAppIcon } from './WhatsAppIcon'

export function ZainiProfileSection() {
  return (
    <section
      id="zaini"
      aria-labelledby="zaini-heading"
      className="scroll-mt-24 border-b border-white/5 bg-black px-4 py-14 md:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#121212] lg:grid lg:grid-cols-2">
        <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[580px]">
          <img
            src={ZAINI_PHOTO_URL}
            alt={`${HANDLER_NAME}, Storeveo campaign lead`}
            width={800}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212] via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-[#121212]/90"
            aria-hidden
          />
          <div className="absolute bottom-4 left-4 lg:hidden">
            <p className="text-lg font-bold text-white">{HANDLER_NAME}</p>
            <p className="text-sm text-[#1DB954]">Campaign lead · Storeveo</p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#1DB954] uppercase">
            Your campaign lead
          </p>
          <h2 id="zaini-heading" className="mt-3 text-2xl font-bold text-white md:text-4xl">
            Meet {HANDLER_NAME}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#b3b3b3] md:text-lg">
            Music-first marketer specializing in Meta ads for Spotify growth. South Asia
            dominance and Tier-1 global expansion. You work directly with {HANDLER_NAME} from
            strategy to post-campaign handoff.
          </p>

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {zainiHighlights.map((line) => (
              <li key={line} className="flex gap-2 text-sm text-[#b3b3b3]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1DB954]" />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            {zainiExperienceStats.slice(0, 2).map((s) => (
              <div key={s.label} className="rounded-lg bg-[#181818] px-4 py-3">
                <p className="text-lg font-black text-white">
                  {s.value}
                  {s.suffix}
                </p>
                <p className="text-[10px] font-bold tracking-wide text-[#727272] uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href={buildGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1DB954] px-7 py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.02] sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Work with {HANDLER_NAME}
          </a>
        </div>
      </div>
    </section>
  )
}
