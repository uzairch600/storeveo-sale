import { buildGeneralWhatsAppLink, HANDLER_NAME, ZAINI_PHOTO_URL } from '../config/site'
import { zainiExperienceStats, zainiHighlights } from '../data/trustContent'
import { WhatsAppIcon } from './WhatsAppIcon'
import { ZainiExperienceSimulator } from './ZainiExperienceSimulator'

export function ZainiProfileSection() {
  const hasPhoto = ZAINI_PHOTO_URL.length > 0

  return (
    <section
      id="zaini"
      aria-labelledby="zaini-heading"
      className="scroll-mt-24 border-b border-white/5 bg-black px-4 py-14 md:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#1DB954] uppercase">
              Your campaign lead
            </p>
            <h2 id="zaini-heading" className="mt-3 text-2xl font-bold text-white md:text-4xl">
              Meet {HANDLER_NAME}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#b3b3b3] md:text-lg">
              Music-first marketer specializing in Meta ads for Spotify growth. South Asia
              dominance and Tier-1 global expansion. You work directly with {HANDLER_NAME} from
              strategy to post-campaign handoff.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <div className="relative shrink-0">
                {hasPhoto ? (
                  <img
                    src={ZAINI_PHOTO_URL}
                    alt={HANDLER_NAME}
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-full object-cover ring-2 ring-[#1DB954] ring-offset-2 ring-offset-black"
                  />
                ) : (
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#1DB954] to-[#14833b] text-3xl font-black text-black ring-2 ring-[#1DB954]/50 ring-offset-2 ring-offset-black"
                    aria-label={`${HANDLER_NAME} profile photo placeholder`}
                  >
                    Z
                  </div>
                )}
                <span className="absolute -right-0.5 -bottom-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-black bg-[#1DB954]">
                  <span className="live-pulse h-2 w-2 rounded-full bg-black/30" />
                </span>
              </div>
              <div>
                <p className="text-xl font-bold text-white">{HANDLER_NAME}</p>
                <p className="text-sm text-[#1DB954]">Lead · Music promotion</p>
                <p className="mt-1 text-xs text-[#727272]">
                  {hasPhoto ? 'Campaign lead' : 'Profile photo coming soon'}
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {zainiHighlights.map((line) => (
                <li
                  key={line}
                  className="flex gap-2 text-sm text-[#b3b3b3]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1DB954]" />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              {zainiExperienceStats.slice(0, 2).map((s) => (
                <div key={s.label} className="rounded-lg bg-[#121212] px-4 py-3">
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
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-7 py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Work with {HANDLER_NAME}
            </a>
          </div>

          <ZainiExperienceSimulator />
        </div>
      </div>
    </section>
  )
}
