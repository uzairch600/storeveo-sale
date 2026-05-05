import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { ParticleField } from './ParticleField'

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24"
    >
      <ParticleField />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65 }}
          className="mb-6 font-sans text-[11px] font-semibold tracking-[0.35em] text-[rgb(61_212_232_/0.85)] uppercase"
        >
          Legacy-grade digital territory
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.98] font-medium tracking-[-0.02em] text-stone-50"
        >
          Storeveo<span className="text-[var(--color-gold)]">.com</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.65 }}
          className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-stone-400 md:text-xl"
        >
          A premium digital asset for the future of commerce — where evolution
          meets empire-scale ambition.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42, duration: 0.6 }}
          className="mt-4 font-display text-xl italic text-stone-300 md:text-2xl"
        >
          The evolution of the everything store.{' '}
          <span className="text-[var(--color-gold)]">Valued at $90,000.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.55 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <motion.button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-8 py-4 font-sans text-[13px] font-bold tracking-[0.14em] text-[#141210] uppercase shadow-[0_0_0_1px_rgb(255_255_255_/0.06)]"
            whileHover={{
              scale: 1.02,
              boxShadow:
                '0 0 0 1px rgb(255 255 255 / 0.08), 0 18px 40px -12px rgb(201 169 98 / 0.45)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Make an Offer
          </motion.button>
          <motion.button
            type="button"
            onClick={() => scrollTo('why')}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-sans text-[13px] font-semibold tracking-[0.14em] text-stone-200 uppercase backdrop-blur-sm transition-colors hover:border-[rgb(61_212_232_/0.35)] hover:bg-[rgb(61_212_232_/0.06)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="relative mx-auto mt-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] tracking-[0.35em] text-stone-500 uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-stone-500" size={22} strokeWidth={1.25} />
        </motion.span>
      </motion.div>
    </section>
  )
}
