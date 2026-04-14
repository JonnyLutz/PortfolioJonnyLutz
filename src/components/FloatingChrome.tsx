import { useEffect, useLayoutEffect, useState } from 'react'
import { BADGE_SCHEMES, type BadgeSchemeIndex } from '../context/badgeSchemes'
import { useBadgeColor } from '../context/BadgeColorContext'
import { useTheme } from '../context/ThemeContext'

/** Robot backgrounds from /public (cycle order). */
const BG_IMAGES = [
  '/image.png',
  '/bg-robot-2.png',
  '/bg-robot-3.png',
  '/bg-robot-4.png',
  '/bg-robot-5.png',
  '/grok-image-5f6ef946-f490-494d-b3cf-b78569c31ff8.png',
] as const

function schemeIndexForBackground(bgIndex: number): BadgeSchemeIndex {
  return (bgIndex % BADGE_SCHEMES.length) as BadgeSchemeIndex
}

/** How long each robot background + accent stays visible before crossfading to the next. */
const BG_CYCLE_MS = 7_000

/** Set `true` to resume automatic background + badge accent cycling. Manual controls still work when `false`. */
const BG_AUTO_CYCLE_ENABLED = false

/** Set `true` to turn UI chrome click sounds back on (theme toggle + next background). */
const CHROME_UI_SOUND_ENABLED = false

/** Reused so browsers don’t throttle one-shot AudioContexts. */
let chromeUiAudioContext: AudioContext | null = null

function getChromeUiAudioContext(): AudioContext | null {
  try {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    if (!chromeUiAudioContext || chromeUiAudioContext.state === 'closed') {
      chromeUiAudioContext = new Ctor()
    }
    return chromeUiAudioContext
  } catch {
    return null
  }
}

function scheduleUiBlip(
  ctx: AudioContext,
  freq: number,
  start: number,
  duration: number,
  peak = 0.052,
) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(freq, start)
  gain.gain.setValueAtTime(0, start)
  gain.gain.linearRampToValueAtTime(peak, start + 0.012)
  gain.gain.exponentialRampToValueAtTime(0.0008, start + duration)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(start)
  osc.stop(start + duration + 0.03)
}

/** Short two-tone blip — only call from a user gesture (click). */
function playRobotAdvanceSound() {
  if (!CHROME_UI_SOUND_ENABLED) return
  const ctx = getChromeUiAudioContext()
  if (!ctx) return
  void ctx.resume().catch(() => {})

  const t0 = ctx.currentTime
  scheduleUiBlip(ctx, 520, t0, 0.07)
  scheduleUiBlip(ctx, 784, t0 + 0.045, 0.09)
}

/** Theme toggle: brighter ascending pair for light, lower mellow pair for dark. */
function playThemeToggleSound(mode: 'light' | 'dark') {
  if (!CHROME_UI_SOUND_ENABLED) return
  const ctx = getChromeUiAudioContext()
  if (!ctx) return
  void ctx.resume().catch(() => {})

  const t0 = ctx.currentTime
  if (mode === 'light') {
    scheduleUiBlip(ctx, 740, t0, 0.055, 0.048)
    scheduleUiBlip(ctx, 1100, t0 + 0.035, 0.075, 0.04)
  } else {
    scheduleUiBlip(ctx, 340, t0, 0.085, 0.048)
    scheduleUiBlip(ctx, 260, t0 + 0.05, 0.095, 0.036)
  }
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(mq.matches)
    const onChange = () => setReduce(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduce
}

const themeBase =
  'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue'
const themeIdle =
  'border-slate/35 bg-navy-light/80 text-slate-light opacity-75 hover:opacity-100 hover:border-blue/40'
const themeActive =
  'scale-105 border-blue/70 bg-navy-light text-blue ring-1 ring-blue/35'

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function RobotGlyph({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 2v2" />
      <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" />
      <rect x="6" y="5" width="12" height="10" rx="2" />
      <circle cx="9.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <path d="M9 14h6" />
      <path d="M8 19h8v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2Z" />
    </svg>
  )
}

export function FloatingChrome() {
  const { theme, setTheme } = useTheme()
  const { setSchemeIndex } = useBadgeColor()
  const [bgActive, setBgActive] = useState(0)
  const isLight = theme === 'light'
  const reduceMotion = usePrefersReducedMotion()
  const fadeMs = reduceMotion ? 0 : 1400

  useLayoutEffect(() => {
    setSchemeIndex(schemeIndexForBackground(bgActive))
  }, [bgActive, setSchemeIndex])

  useEffect(() => {
    if (reduceMotion || !BG_AUTO_CYCLE_ENABLED) return
    const id = window.setInterval(() => {
      setBgActive((prev) => (prev + 1) % BG_IMAGES.length)
    }, BG_CYCLE_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
        style={{
          opacity: isLight ? 0.045 : 0.06,
          mixBlendMode: isLight ? 'multiply' : 'luminosity',
        }}
      >
        {BG_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === bgActive ? 1 : 0,
              transitionProperty: 'opacity',
              transitionDuration: `${fadeMs}ms`,
            }}
          />
        ))}
      </div>

      {/* Toggle controls: large screens only (hidden on mobile — unclear grouping in one row) */}
      <div
        className="fixed left-5 z-50 hidden flex-col items-center gap-0.5 lg:flex"
        style={{
          top: 'max(1.25rem, env(safe-area-inset-top, 0px))',
        }}
        role="group"
        aria-label="Color theme"
      >
        <button
          type="button"
          onClick={() => {
            if (!reduceMotion) playThemeToggleSound('light')
            setTheme('light')
          }}
          aria-label="Light mode"
          aria-pressed={theme === 'light'}
          className={`${themeBase} ${theme === 'light' ? themeActive : themeIdle}`}
        >
          <SunIcon className="h-2 w-2" />
        </button>
        <button
          type="button"
          onClick={() => {
            if (!reduceMotion) playThemeToggleSound('dark')
            setTheme('dark')
          }}
          aria-label="Dark mode"
          aria-pressed={theme === 'dark'}
          className={`${themeBase} ${theme === 'dark' ? themeActive : themeIdle}`}
        >
          <MoonIcon className="h-2 w-2" />
        </button>
      </div>

      <div
        className="fixed right-6 z-50 hidden flex-col items-center gap-1.5 lg:flex"
        style={{
          bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))',
        }}
        role="group"
        aria-label="Robot background artwork"
      >
        <button
          type="button"
          onClick={() => {
            if (!reduceMotion) playRobotAdvanceSound()
            setBgActive((prev) => (prev + 1) % BG_IMAGES.length)
          }}
          aria-label="Next robot background"
          title="Next background"
          className="group/robot mb-0.5 cursor-pointer rounded-lg p-1.5 text-blue outline-none drop-shadow-[0_0_6px_color-mix(in_srgb,var(--color-blue)_40%,transparent)] transition-[transform,color,filter] duration-200 ease-out hover:scale-105 hover:text-blue-bright hover:drop-shadow-[0_0_10px_color-mix(in_srgb,var(--color-blue)_55%,transparent)] active:scale-95 active:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
        >
          <RobotGlyph className="h-5 w-5 transition-transform duration-200 ease-out group-hover/robot:-translate-y-px" />
        </button>
        {BG_IMAGES.map((src, i) => {
          const primary = i % 2 === 0
          const selected = bgActive === i
          const activeClasses = primary
            ? 'border-blue-bright bg-blue ring-2 ring-blue/50'
            : 'border-orange-bright bg-orange ring-2 ring-orange/50'
          const idleClasses = primary
            ? 'border-blue/35 bg-blue/20 hover:border-blue/55 hover:bg-blue/35'
            : 'border-orange/35 bg-orange/20 hover:border-orange/55 hover:bg-orange/35'
          return (
            <button
              key={src}
              type="button"
              onClick={() => setBgActive(i)}
              aria-label={`Background ${i + 1}`}
              aria-pressed={selected}
              className={`h-2.5 w-2.5 rounded-full border transition-none ${
                selected ? `scale-125 ${activeClasses}` : idleClasses
              }`}
            />
          )
        })}
      </div>
    </>
  )
}
