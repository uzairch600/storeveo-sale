import { useEffect, useState } from 'react'
import {
  BarChart3,
  Link2,
  Megaphone,
  Radio,
  Sparkles,
} from 'lucide-react'
import { HANDLER_NAME } from '../config/site'

const pipelineSteps = [
  { label: 'Smart link', icon: Link2 },
  { label: 'Meta ads', icon: Megaphone },
  { label: 'Streams', icon: Radio },
  { label: 'Report', icon: BarChart3 },
]

const winLines = [
  'Desi Hip-Hop · avg +340% stream lift',
  'Indie-Pop · 5K verified in 10 days',
  'Tier 1 rollout · USA / UK / CA',
  'Retargeting · pixel-optimized funnel',
]

export function HeroPipeline() {
  const [activeStep, setActiveStep] = useState(0)
  const [winIndex, setWinIndex] = useState(0)
  const [fadeKey, setFadeKey] = useState(0)

  useEffect(() => {
    const stepId = window.setInterval(() => {
      setActiveStep((s) => (s + 1) % pipelineSteps.length)
    }, 1400)
    const winId = window.setInterval(() => {
      setWinIndex((i) => (i + 1) % winLines.length)
      setFadeKey((k) => k + 1)
    }, 2800)
    return () => {
      window.clearInterval(stepId)
      window.clearInterval(winId)
    }
  }, [])

  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-white/10 bg-[#121212] p-6 shadow-[0_20px_50px_-20px_rgb(0_0_0_/_0.6)] md:p-8">
      <div className="flex items-center justify-between gap-3 px-1">
        <p className="text-[11px] font-bold tracking-[0.2em] text-[#727272] uppercase">
          Release pipeline
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DB954]/10 px-3 py-1 text-[11px] font-bold text-[#1DB954]">
          <span className="live-pulse h-1.5 w-1.5 rounded-full bg-[#1DB954]" />
          {HANDLER_NAME} · online
        </span>
      </div>

      <div className="relative mt-7 px-2 md:mt-8">
        <div
          className="absolute top-6 right-[8%] left-[8%] h-px bg-[#282828]"
          aria-hidden
        />
        <div
          className="pipeline-flow absolute top-6 right-[8%] left-[8%] h-px bg-[#1DB954]"
          aria-hidden
        />
        <ol className="relative grid grid-cols-4 gap-3">
          {pipelineSteps.map((step, i) => {
            const active = i === activeStep
            const done = i < activeStep
            const Icon = step.icon
            return (
              <li key={step.label} className="flex flex-col items-center text-center">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                    active
                      ? 'border-[#1DB954] bg-[#1DB954] text-black shadow-[0_0_16px_-2px_rgb(29_185_84_/_0.6)]'
                      : done
                        ? 'border-[#1DB954]/45 bg-[#1DB954]/15 text-[#1DB954]'
                        : 'border-[#282828] bg-[#181818] text-[#727272]'
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                </span>
                <span
                  className={`mt-2.5 text-[10px] font-bold tracking-wide uppercase ${
                    active ? 'text-white' : 'text-[#727272]'
                  }`}
                >
                  {step.label}
                </span>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="mt-7 flex-1 space-y-4 rounded-xl bg-[#181818] px-5 py-5 md:px-6 md:py-6">
        <p className="text-[10px] font-bold tracking-[0.16em] text-[#727272] uppercase">
          Reach comparison
        </p>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-[#727272]">
            <span>Organic only</span>
            <span>12%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#282828]">
            <div className="h-full w-[12%] rounded-full bg-[#404040]" />
          </div>
        </div>
        <div className="space-y-1 pt-1">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-white">With {HANDLER_NAME}</span>
            <span className="font-bold text-[#1DB954]">89%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-[#282828]">
            <div className="reach-bar h-full rounded-full bg-[#1DB954]" />
          </div>
        </div>
      </div>

      <div
        key={fadeKey}
        className="track-fade mt-5 flex items-start gap-2.5 rounded-xl border border-[#1DB954]/20 bg-[#1DB954]/10 px-5 py-3.5"
      >
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#1DB954]" aria-hidden />
        <p className="text-sm leading-relaxed text-[#b3b3b3]">{winLines[winIndex]}</p>
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-white/5 px-1 pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1DB954] text-sm font-black text-black">
          Z
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold text-white">{HANDLER_NAME}</p>
          <p className="text-[11px] text-[#727272]">Campaign lead · replies on WhatsApp</p>
        </div>
      </div>
    </div>
  )
}
