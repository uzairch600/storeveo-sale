import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function FloatingOffer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="complementary"
          aria-label="Quick offer action"
          initial={{ opacity: 0, y: 28, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-5 bottom-6 z-40 md:right-8 md:bottom-8"
        >
          <motion.button
            type="button"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="rounded-full border border-[rgb(201_169_98_/0.5)] bg-[rgb(201_169_98_/0.92)] px-6 py-3.5 font-sans text-[12px] font-bold tracking-[0.18em] text-[#141210] uppercase shadow-[0_12px_40px_-12px_rgb(201_169_98_/0.65)] backdrop-blur-sm"
            whileHover={{
              scale: 1.03,
              boxShadow:
                '0 16px 48px -14px rgb(201 169 98 / 0.55), 0 0 0 1px rgb(255 255 255 / 0.08)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            Make Offer
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
