import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Globe2,
  Sparkles,
  Zap,
} from 'lucide-react'

const items = [
  {
    title: 'Brandable & Memorable',
    body: 'Store meets evolution — a rare linguistic pairing built for recall at scale.',
    icon: Sparkles,
  },
  {
    title: 'AI × Commerce × Ecosystem',
    body: 'Positioned for next-gen platforms where unified commerce and intelligence converge.',
    icon: BrainCircuit,
  },
  {
    title: 'Short, Premium .com',
    body: 'Single-brand gravity with flagship credibility — nothing hyphenated, nothing diluted.',
    icon: Zap,
  },
  {
    title: 'Global Scale, Ready Now',
    body: 'A territory-sized identity engineered for multinational rollout without rebranding debt.',
    icon: Globe2,
  },
]

export function WhyStoreveo() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="font-sans text-[11px] font-semibold tracking-[0.32em] text-[rgb(61_212_232_/0.85)] uppercase">
            Territory
          </p>
          <h2
            id="why-heading"
            className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-tight font-medium text-stone-50"
          >
            Not Just a Domain —{' '}
            <span className="italic text-[var(--color-gold)]">A Territory</span>
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-stone-400">
            Claim an asset built for founders who think in decades — executives who
            understand naming power compounds across channels, hardware, and entire
            operating ecosystems.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[rgb(12_12_15_/0.85)] p-8 shadow-[inset_0_1px_0_rgb(255_255_255_/0.04)] transition-colors hover:border-[rgb(201_169_98_/0.22)]"
            >
              <div className="absolute -top-12 -right-8 h-32 w-32 rounded-full bg-[rgb(61_212_232_/0.06)] blur-3xl transition-opacity group-hover:opacity-90" />
              <item.icon
                className="relative mb-5 text-[var(--color-gold)]"
                size={28}
                strokeWidth={1.25}
                aria-hidden
              />
              <h3 className="relative font-sans text-lg font-semibold tracking-wide text-stone-100">
                {item.title}
              </h3>
              <p className="relative mt-3 font-sans text-[15px] leading-relaxed text-stone-400">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
