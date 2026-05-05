import { motion } from 'framer-motion'
import { useMemo } from 'react'

type Particle = {
  left: number
  top: number
  size: number
  duration: number
  delay: number
  opacity: number
}

/** Deterministic “random” per index — stable across SSR/re-renders, ESLint-pure. */
function hash01(i: number, salt: number): number {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

export function ParticleField() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 56 }, (_, i) => ({
      left: hash01(i, 1) * 100,
      top: hash01(i, 2) * 100,
      size: hash01(i, 3) * 2 + 0.35,
      duration: 28 + hash01(i, 4) * 36,
      delay: -hash01(i, 5) * 28,
      opacity: 0.08 + hash01(i, 6) * 0.22,
    }))
  }, [])

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgb(61_212_232_/_0.07),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_100%,rgb(201_169_98_/_0.06),transparent_50%)]" />

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[rgb(232_241_245)]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: '0 0 12px rgb(61 212 232 / 0.25)',
          }}
          animate={{
            y: [0, -18, 6, -12, 0],
            x: [0, 10, -6, 4, 0],
            opacity: [p.opacity, p.opacity * 1.4, p.opacity * 0.85, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[rgb(8_10_14)] via-transparent to-transparent" />
      <motion.div
        className="absolute inset-x-[-10%] bottom-0 flex h-[32%] items-end justify-center gap-1 opacity-[0.15] sm:gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.14 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        {[
          12, 24, 40, 18, 55, 28, 36, 14, 48, 22, 44, 16, 52, 26, 38, 20, 46,
          30,
        ].map((h, i) => (
          <motion.div
            key={i}
            className="w-px shrink-0 rounded-t-sm bg-[rgb(61_212_232)]"
            style={{ height: `${h}%` }}
            animate={{ opacity: [0.35, 0.85, 0.45] }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
