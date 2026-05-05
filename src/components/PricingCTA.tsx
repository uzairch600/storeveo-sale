import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { CONTACT_EMAIL } from '../config/contact'

const mailOfferHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Serious inquiry — Storeveo.com',
)}`

export function PricingCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="pricing-heading"
      className="relative scroll-mt-28 border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-sans text-[11px] font-semibold tracking-[0.32em] text-[rgb(61_212_232_/0.85)] uppercase">
            Acquisition
          </p>
          <h2
            id="pricing-heading"
            className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-stone-50"
          >
            Investment:{' '}
            <span className="text-[var(--color-gold)]">$90,000 USD</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-stone-400">
            Principals may propose alternatives — exceptional offers receive
            accelerated consideration. This is legacy territory; anchor your narrative
            once.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[var(--color-border-subtle)] bg-[rgb(10_10_12_/0.85)] px-6 py-8 text-left shadow-[inset_0_1px_0_rgb(255_255_255_/0.04)] md:px-8 md:py-9"
        >
          <p className="font-sans text-sm font-semibold tracking-wide text-stone-200">
            Registrar &amp; transfer
          </p>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-stone-400">
            <strong className="font-semibold text-stone-200">
              Storeveo.com
            </strong>{' '}
            is parked on{' '}
            <strong className="font-semibold text-stone-300">Hostinger</strong>{' '}
            under our account and DNS — we retain full control.{' '}
            <strong className="font-semibold text-stone-200">
              Hostinger is not involved in the sale
            </strong>
            ; this stays between serious buyer and seller.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-stone-400">
            <strong className="font-semibold text-stone-200">
              Email us directly.
            </strong>{' '}
            After payment clears successfully, we transfer the domain to you
            outright — registrar auth code / standard ICANN transfer. No broker in the
            middle unless you bring one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-10 flex flex-col items-center gap-6"
        >
          <a
            href={mailOfferHref}
            className="inline-flex items-center gap-3 rounded-2xl border border-[var(--color-border-subtle)] bg-[rgb(12_12_14_/0.65)] px-6 py-5 font-sans text-sm text-stone-300 transition-colors hover:border-[rgb(201_169_98_/0.25)] hover:text-stone-100"
          >
            <Mail className="shrink-0 text-[var(--color-gold)]" size={22} />
            <span className="text-left">
              <span className="block text-[11px] tracking-[0.2em] text-stone-500 uppercase">
                Direct line
              </span>
              <span className="break-all font-medium text-stone-100 md:break-normal">
                {CONTACT_EMAIL}
              </span>
            </span>
          </a>

          <motion.a
            href={mailOfferHref}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-10 py-4 font-sans text-[13px] font-bold tracking-[0.14em] text-[#141210] uppercase shadow-[0_0_0_1px_rgb(255_255_255_/0.06)]"
            whileHover={{
              scale: 1.02,
              boxShadow:
                '0 0 0 1px rgb(255 255 255 / 0.08), 0 18px 40px -12px rgb(201 169 98 / 0.45)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Email — Make an Offer
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
