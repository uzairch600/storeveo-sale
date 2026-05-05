import { motion } from 'framer-motion'

export function Vision() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="relative overflow-hidden border-y border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] px-5 py-24 md:px-8 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgb(26_77_92_/0.35),transparent_55%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-[11px] font-semibold tracking-[0.35em] text-[rgb(61_212_232_/0.85)] uppercase"
        >
          Claim the horizon
        </motion.p>
        <motion.h2
          id="vision-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.12] font-medium text-stone-50"
        >
          Built for{' '}
          <span className="italic text-[var(--color-gold)]">Visionaries</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mt-10 space-y-6 font-sans text-lg leading-[1.75] text-stone-400 md:text-xl"
        >
          <p>
            The next wave of commerce does not live inside siloed carts — it lives
            inside unified operating layers: messaging, payments, discovery, and AI
            orchestration woven into one decisive interface.
          </p>
          <p className="text-stone-300">
            Whether your roadmap echoes an{' '}
            <strong className="font-semibold text-stone-100">
              everything-app thesis
            </strong>{' '}
            or a sovereign marketplace spanning continents,{' '}
            <strong className="font-semibold text-[var(--color-gold)]">
              Storeveo.com
            </strong>{' '}
            is the flagship spine — minimal syllables, maximal gravitational pull.
          </p>
          <p>
            Under ambitious stewardship, this territory supports cinematic launches:
            neural storefronts, autonomous fulfillment alliances, and legacy-grade
            consumer rituals engineered for the century ahead.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
