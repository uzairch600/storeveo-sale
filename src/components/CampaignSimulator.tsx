import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Play, TrendingUp, Users, Zap } from 'lucide-react'
import { HANDLER_NAME } from '../config/site'
import { trendingSongs, type TrendingSong } from '../data/trendingSongs'

const ROTATE_MS = 3500

function AnimatedCounter({
  from,
  to,
  durationMs,
  pauseMs,
}: {
  from: number
  to: number
  durationMs: number
  pauseMs: number
}) {
  const [value, setValue] = useState(from)

  useEffect(() => {
    let frame = 0
    let start = 0
    let phase: 'up' | 'pause' | 'reset' = 'up'
    let pauseStart = 0

    const tick = (now: number) => {
      if (phase === 'up') {
        if (!start) start = now
        const t = Math.min((now - start) / durationMs, 1)
        const eased = 1 - (1 - t) ** 3
        setValue(Math.round(from + (to - from) * eased))
        if (t >= 1) {
          phase = 'pause'
          pauseStart = now
        }
      } else if (phase === 'pause') {
        if (now - pauseStart >= pauseMs) {
          phase = 'reset'
          start = 0
        }
      } else {
        setValue(from)
        phase = 'up'
        start = 0
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [from, to, durationMs, pauseMs])

  return <>{value.toLocaleString()}</>
}

function chartProgress(rank: number) {
  return Math.min(94, Math.max(22, 100 - rank / 6.5))
}

const bars = [38, 52, 44, 68, 58, 82, 74, 96, 88, 100]

function TrendingMarquee({
  activeId,
  songs,
}: {
  activeId: string
  songs: TrendingSong[]
}) {
  const loop = useMemo(() => [...songs, ...songs], [songs])

  return (
    <div className="relative -mx-1 overflow-hidden sm:-mx-2">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#121212] to-transparent sm:w-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#121212] to-transparent sm:w-10"
        aria-hidden
      />
      <div className="trending-marquee flex w-max gap-3 py-1 sm:gap-4">
        {loop.map((song, i) => {
          const active = song.id === activeId
          return (
            <div
              key={`${song.id}-${i}`}
              className="w-[108px] shrink-0 sm:w-[120px]"
            >
              <div
                className={`relative aspect-square overflow-hidden rounded-md bg-[#282828] transition-shadow duration-500 ${
                  active
                    ? 'ring-2 ring-[#1DB954] ring-offset-2 ring-offset-[#121212]'
                    : ''
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${song.artGradient}`}
                />
                {active ? (
                  <span className="absolute right-1.5 bottom-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#1DB954] text-black shadow-lg sm:h-8 sm:w-8">
                    <Play className="h-3.5 w-3.5 fill-black sm:h-4 sm:w-4" aria-hidden />
                  </span>
                ) : null}
              </div>
              <p className="mt-2 truncate text-xs font-bold text-white sm:text-[13px]">
                {song.title}
              </p>
              <p className="truncate text-[11px] text-[#b3b3b3]">
                {song.artists.split(',')[0]?.trim()}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function CampaignSimulator() {
  const [trackIndex, setTrackIndex] = useState(0)
  const [fadeKey, setFadeKey] = useState(0)
  const track = trendingSongs[trackIndex]!
  const chartWidth = chartProgress(track.chartStart)

  useEffect(() => {
    const rotateId = window.setInterval(() => {
      setTrackIndex((i) => (i + 1) % trendingSongs.length)
      setFadeKey((k) => k + 1)
    }, ROTATE_MS)
    return () => window.clearInterval(rotateId)
  }, [])

  const growthPct = useMemo(() => {
    const mid = (track.streamsFrom + track.streamsTo) / 2
    return Math.round(((mid - track.streamsFrom) / track.streamsFrom) * 100)
  }, [track.streamsFrom, track.streamsTo])

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-4 shadow-[0_24px_80px_-24px_rgb(29_185_84_/_0.35)] sm:p-5 md:p-6"
      aria-label="Live campaign performance preview"
      aria-live="polite"
    >
      <div className="pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full bg-[#1DB954]/20 blur-3xl" />

      <div className="relative flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <p className="text-sm font-bold text-white sm:text-base">
          Spotify growth · {HANDLER_NAME}
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DB954]/15 px-3 py-1 text-[11px] font-bold text-[#1DB954]">
          <span className="live-pulse h-2 w-2 rounded-full bg-[#1DB954]" />
          Live
        </span>
      </div>

      <div
        key={fadeKey}
        className="track-fade relative mt-4 flex gap-3 rounded-xl bg-[#181818] p-3 sm:p-4"
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md shadow-lg sm:h-16 sm:w-16">
          <div className={`absolute inset-0 bg-gradient-to-br ${track.artGradient}`} />
          <div className="eq-bars absolute inset-x-0 bottom-1 flex items-end justify-center gap-[2px] px-1.5">
            {[0.4, 0.7, 0.5, 0.85, 0.6].map((h, i) => (
              <span
                key={i}
                className="eq-bar w-1 rounded-full bg-white/90"
                style={
                  {
                    '--eq-h': `${h}`,
                    '--eq-delay': `${i * 0.1}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-white sm:text-base">{track.title}</p>
          <p className="truncate text-xs text-[#b3b3b3] sm:text-sm">{track.artists}</p>
          <p className="mt-1 text-xs font-semibold text-[#1DB954] sm:text-[13px]">
            +{growthPct}% streams · promoted by {HANDLER_NAME}
          </p>
        </div>
      </div>

      <div className="relative mt-5 sm:mt-6">
        <div className="mb-3 flex items-center justify-between px-0.5">
          <h3 className="text-base font-bold text-white sm:text-lg">Trending songs</h3>
          <span className="text-xs font-semibold text-[#727272]">Show all</span>
        </div>
        <TrendingMarquee activeId={track.id} songs={trendingSongs} />
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
        <div className="rounded-xl bg-[#181818] p-3 sm:p-4">
          <div className="flex items-center gap-1.5 text-[#727272]">
            <Zap className="h-3.5 w-3.5" aria-hidden />
            <span className="text-[10px] font-bold tracking-wide uppercase sm:text-[11px]">
              Verified streams
            </span>
          </div>
          <p className="mt-1 font-mono text-xl font-black tabular-nums text-white sm:text-2xl">
            <AnimatedCounter
              key={`streams-${track.id}`}
              from={track.streamsFrom}
              to={track.streamsTo}
              durationMs={2400}
              pauseMs={800}
            />
          </p>
        </div>
        <div className="rounded-xl bg-[#181818] p-3 sm:p-4">
          <div className="flex items-center gap-1.5 text-[#727272]">
            <Users className="h-3.5 w-3.5" aria-hidden />
            <span className="text-[10px] font-bold tracking-wide uppercase sm:text-[11px]">
              New listeners
            </span>
          </div>
          <p className="mt-1 font-mono text-xl font-black tabular-nums text-white sm:text-2xl">
            <AnimatedCounter
              key={`listeners-${track.id}`}
              from={track.listenersFrom}
              to={track.listenersTo}
              durationMs={2200}
              pauseMs={800}
            />
          </p>
        </div>
      </div>

      <div className="relative mt-4 rounded-xl bg-[#181818] p-3 sm:mt-5 sm:p-4">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 font-semibold text-[#b3b3b3]">
            <TrendingUp className="h-3.5 w-3.5 text-[#1DB954]" aria-hidden />
            Chart momentum
          </span>
          <span
            key={track.id}
            className="track-fade font-mono text-base font-bold text-[#1DB954] sm:text-lg"
          >
            #{track.chartStart}
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#282828] sm:h-2.5">
          <div
            className="chart-progress h-full rounded-full bg-[#1DB954]"
            style={{ width: `${chartWidth}%` }}
          />
        </div>
        <p className="mt-2 text-[11px] text-[#727272] sm:text-xs">
          Meta ads + retargeting · optimized by {HANDLER_NAME}
        </p>
      </div>

      <div className="relative mt-4 flex h-14 items-end gap-1 rounded-xl bg-[#181818] px-3 pb-2 pt-3 sm:mt-5 sm:h-16 sm:gap-1.5 sm:px-4">
        {bars.map((h, i) => (
          <span
            key={`${track.id}-${i}`}
            className="stream-bar flex-1 rounded-sm bg-[#1DB954]/80"
            style={
              {
                '--bar-h': `${h}%`,
                '--bar-delay': `${i * 0.08}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <p className="relative mt-2 text-center text-[10px] font-semibold tracking-wide text-[#727272] uppercase">
        7-day stream velocity
      </p>
    </div>
  )
}
