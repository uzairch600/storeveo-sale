import { motion } from 'framer-motion'

const rows = [
  {
    category: 'Comparable tone · ultra-premium brandables',
    example: 'Flagship single-word .com cohort',
    note: 'Comparable acquisitions routinely exceed mid‑six figures at brokerage.',
  },
  {
    category: 'Potential brand equity',
    example: 'Global umbrella positioning',
    note: 'Suitable for a flagship commerce OS spanning AI agents and fulfillment.',
  },
  {
    category: 'Buyer-fit ROI',
    example: 'Strategic acquirers · founders · funds',
    note: 'Replacing a weak identity downstream costs multiples of securing territory Day‑one.',
  },
]

const stats = [
  { value: '$250k–$1M+', label: 'Not uncommon exits · marquee brandables' },
  { value: '∞', label: 'Downstream savings vs rebrand & trademark churn' },
  { value: 'Single ledger item', label: 'Fortified narrative vs fractured naming stacks' },
]

export function ValueProposition() {
  return (
    <section
      id="value"
      aria-labelledby="value-heading"
      className="relative px-5 py-24 md:px-8 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgb(201_169_98_/0.25),transparent)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-sans text-[11px] font-semibold tracking-[0.32em] text-[rgb(61_212_232_/0.85)] uppercase">
            Economics of rarity
          </p>
          <h2
            id="value-heading"
            className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-stone-50"
          >
            Why Pay <span className="text-[var(--color-gold)]">$90,000?</span>
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-stone-400">
            Because visionary acquisitions optimize for{' '}
            <strong className="font-semibold text-stone-200">
              optionality
            </strong>
            , not sticker shock — positioning territory early avoids exponential costs later.
          </p>
        </motion.div>

        <motion.ul
          className="mt-14 divide-y divide-[var(--color-border-subtle)] overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[rgb(10_10_12_/0.6)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          aria-label="Value comparison highlights"
        >
          {rows.map((row, i) => (
            <motion.li
              key={row.category}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid gap-4 px-6 py-6 md:grid-cols-[1fr_1fr_1.15fr] md:items-center md:gap-6 md:px-8 md:py-7"
            >
              <span className="font-sans text-xs font-semibold tracking-[0.18em] text-[var(--color-gold-muted)] uppercase">
                {row.category}
              </span>
              <span className="font-sans text-sm font-medium text-stone-200">
                {row.example}
              </span>
              <span className="font-sans text-sm leading-relaxed text-stone-500">
                {row.note}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[var(--color-border-subtle)] bg-[rgb(12_12_14_/0.65)] px-6 py-7 text-center"
            >
              <p className="font-display text-3xl text-[var(--color-gold)] md:text-[2rem]">
                {s.value}
              </p>
              <p className="mt-3 font-sans text-[13px] leading-snug tracking-wide text-stone-500">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mt-14 max-w-2xl border-l-2 border-[rgb(61_212_232_/0.45)] pl-6 font-sans text-sm italic leading-relaxed text-stone-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Premium domain brokerage-level presentation — meticulous positioning,
          disciplined narrative, and confidentiality-forward outreach for serious
          principals only.
        </motion.p>
      </div>
    </section>
  )
}
