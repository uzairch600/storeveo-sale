import { motion } from 'framer-motion'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-[var(--color-border-subtle)] px-5 py-14 md:px-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-xl text-stone-200 italic">
            STORE<span className="font-sans not-italic text-[var(--color-gold)]">VEO</span>
          </p>
          <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-stone-500">
            Storeveo.com is offered as a direct private sale — curated presentation,
            principal-to-principal dialogue, and confidentiality by default.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-10 gap-y-3 font-sans text-[13px] tracking-wide text-stone-400" aria-label="Footer">
          <a href="#why" className="hover:text-stone-100">
            Why this domain
          </a>
          <a href="#value" className="hover:text-stone-100">
            Value
          </a>
          <a href="#vision" className="hover:text-stone-100">
            Vision
          </a>
          <a href="#contact" className="hover:text-stone-100">
            Contact
          </a>
        </nav>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mt-12 max-w-6xl border-t border-[var(--color-border-subtle)] pt-8 font-sans text-xs text-stone-600"
      >
        © {year} Storeveo.com · All rights reserved. Not affiliated with any third-party
        trademark holders; descriptive references only.
      </motion.div>
    </footer>
  )
}
