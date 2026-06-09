import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import {
  Activity,
  Clock,
  Megaphone,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import { HANDLER_NAME } from '../config/site'
import {
  zainiActivityFeed,
  zainiExperienceStats,
} from '../data/trustContent'

const expertise = [
  { label: 'Meta Ads', icon: Megaphone },
  { label: 'Pixel setup', icon: Target },
  { label: 'Lookalikes', icon: Users },
  { label: 'Retargeting', icon: Activity },
  { label: 'Smart links', icon: TrendingUp },
]

function StatCounter({
  target,
  durationMs,
  resetKey,
}: {
  target: number
  durationMs: number
  resetKey: number
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1)
      const eased = 1 - (1 - t) ** 3
      setValue(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, durationMs, resetKey])

  return <>{value}</>
}

export function ZainiExperienceSimulator() {
  const [expertiseIndex, setExpertiseIndex] = useState(0)
  const [feedOffset, setFeedOffset] = useState(0)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const a = window.setInterval(() => {
      setExpertiseIndex((i) => (i + 1) % expertise.length)
    }, 2200)
    const b = window.setInterval(() => {
      setFeedOffset((o) => (o + 1) % zainiActivityFeed.length)
      setTick((t) => t + 1)
    }, 3200)
    return () => {
      window.clearInterval(a)
      window.clearInterval(b)
    }
  }, [])

  const campaigns = zainiExperienceStats[3]!.value
  const artists = zainiExperienceStats[1]!.value

  return (
    <div className="rounded-2xl border border-white/10 bg-[#121212] p-5 md:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#727272] uppercase">
            Experience dashboard
          </p>
          <p className="text-sm font-bold text-white">{HANDLER_NAME}&apos;s live ops</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DB954]/15 px-3 py-1 text-[10px] font-bold text-[#1DB954]">
          <span className="live-pulse h-1.5 w-1.5 rounded-full bg-[#1DB954]" />
          Active now
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {expertise.map((item, i) => {
          const Icon = item.icon
          const on = i === expertiseIndex
          return (
            <span
              key={item.label}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold transition-all ${
                on
                  ? 'bg-[#1DB954] text-black'
                  : 'bg-[#181818] text-[#727272]'
              }`}
            >
              <Icon className="h-3 w-3" aria-hidden />
              {item.label}
            </span>
          )
        })}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[#181818] p-4">
          <p className="text-[9px] font-bold tracking-wide text-[#727272] uppercase">
            Campaigns (Q)
          </p>
          <p className="mt-1 font-mono text-2xl font-black text-white">
            <StatCounter target={campaigns} durationMs={1400} resetKey={tick} />
          </p>
        </div>
        <div className="rounded-xl bg-[#181818] p-4">
          <p className="text-[9px] font-bold tracking-wide text-[#727272] uppercase">
            Artists supported
          </p>
          <p className="mt-1 font-mono text-2xl font-black text-[#1DB954]">
            <StatCounter target={artists} durationMs={1600} resetKey={tick} />+
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-[#181818] p-4">
        <div className="flex items-center gap-2 text-[#727272]">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          <span className="text-[10px] font-bold tracking-wide uppercase">
            Response SLA
          </span>
        </div>
        <div className="mt-3 flex items-end gap-2">
          <span className="text-3xl font-black text-white">&lt;2</span>
          <span className="pb-1 text-sm font-semibold text-[#b3b3b3]">hours on WhatsApp</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#282828]">
          <div className="sla-bar h-full rounded-full bg-[#1DB954]" />
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl bg-[#181818] p-3">
        <p className="mb-2 text-[9px] font-bold tracking-wide text-[#727272] uppercase">
          Recent activity
        </p>
        <div className="relative h-16 overflow-hidden">
          {zainiActivityFeed.map((line, i) => {
            const visible = i === feedOffset
            return (
              <p
                key={line}
                className={`absolute inset-x-0 text-xs leading-snug transition-all duration-500 ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                } text-[#b3b3b3]`}
              >
                <span className="font-semibold text-[#1DB954]">→</span> {line}
              </p>
            )
          })}
        </div>
      </div>

      <div className="eq-bars mt-4 flex h-8 items-end justify-center gap-1 rounded-lg bg-[#181818] px-3 py-2">
        {[0.5, 0.85, 0.6, 0.95, 0.7, 0.8, 0.55].map((h, i) => (
          <span
            key={i}
            className="eq-bar w-1.5 rounded-full bg-[#1DB954]/70"
            style={
              {
                '--eq-h': `${h}`,
                '--eq-delay': `${i * 0.09}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}
