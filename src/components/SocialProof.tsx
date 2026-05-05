import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export function SocialProof() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="relative px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-[rgb(201_169_98_/0.18)] bg-[rgb(10_10_12_/0.85)] px-8 py-12 text-center shadow-[inset_0_1px_0_rgb(255_255_255_/0.05)] md:px-14 md:py-16"
        >
          <ShieldCheck
            className="mx-auto mb-6 text-[var(--color-gold)]"
            size={36}
            strokeWidth={1.15}
            aria-hidden
          />
          <h2
            id="proof-heading"
            className="font-display text-2xl font-medium text-stone-50 md:text-[2rem]"
          >
            Attention from serious builders —{' '}
            <span className="italic text-stone-400">
              not curiosity browsers.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-stone-400 md:text-lg">
            This domain has already surfaced within confidential circles evaluating
            flagship identities for next-generation commerce infrastructure.
          </p>
          <p className="mt-10 font-sans text-[11px] font-semibold tracking-[0.35em] text-[rgb(61_212_232_/0.75)] uppercase">
            Serious inquiries only · Limited principal bandwidth
          </p>
        </motion.div>
      </div>
    </section>
  )
}
