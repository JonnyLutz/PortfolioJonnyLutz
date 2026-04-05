import { useState } from 'react'
import { BADGE_SCHEMES, type BadgeSchemeIndex } from '../context/badgeSchemes'
import { useBadgeColor } from '../context/BadgeColorContext'
import { useTheme } from '../context/ThemeContext'

const BG_IMAGES = [
  '/image.png',
  '/bg-robot-2.png',
  '/bg-robot-3.png',
  '/bg-robot-4.png',
] as const

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
  const { schemeIndex, setSchemeIndex } = useBadgeColor()
  const [bgActive, setBgActive] = useState(0)
  const isLight = theme === 'light'

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
        style={{
          backgroundImage: `url(${BG_IMAGES[bgActive]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: isLight ? 0.045 : 0.06,
          mixBlendMode: isLight ? 'multiply' : 'luminosity',
        }}
      />

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
          onClick={() => setTheme('light')}
          aria-label="Light mode"
          aria-pressed={theme === 'light'}
          className={`${themeBase} ${theme === 'light' ? themeActive : themeIdle}`}
        >
          <SunIcon className="h-2 w-2" />
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          aria-label="Dark mode"
          aria-pressed={theme === 'dark'}
          className={`${themeBase} ${theme === 'dark' ? themeActive : themeIdle}`}
        >
          <MoonIcon className="h-2 w-2" />
        </button>
      </div>

      <div
        className="fixed left-6 z-50 hidden flex-row items-center gap-2.5 lg:flex"
        style={{
          bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))',
        }}
        role="group"
        aria-label="Badge and accent color"
      >
        <span
          className="text-slate-light drop-shadow-[0_0_8px_rgba(200,241,255,0.15)]"
          aria-hidden
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="h-3 w-3"
          >
            <circle cx="12" cy="12" r="5.5" />
          </svg>
        </span>
        <div className="flex flex-row items-center gap-2">
          {([0, 1, 2, 3] as const).map((i) => {
            const isSelected = schemeIndex === i
            return (
              <button
                key={i}
                type="button"
                aria-label={`Accent color ${i + 1}`}
                aria-pressed={isSelected}
                onClick={() => setSchemeIndex(i as BadgeSchemeIndex)}
                className={`h-2.5 w-2.5 shrink-0 rounded-full border transition-all duration-200 ${
                  isSelected ? BADGE_SCHEMES[i].dotActive : BADGE_SCHEMES[i].dotIdle
                }`}
              />
            )
          })}
        </div>
      </div>

      <div
        className="fixed right-6 z-50 hidden flex-col items-center gap-1.5 lg:flex"
        style={{
          bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))',
        }}
        role="group"
        aria-label="Robot background artwork"
      >
        <span
          className="mb-0.5 text-blue drop-shadow-[0_0_6px_color-mix(in_srgb,var(--color-blue)_40%,transparent)]"
          aria-hidden
        >
          <RobotGlyph className="h-5 w-5" />
        </span>
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
              className={`h-2.5 w-2.5 rounded-full border transition-all duration-200 ${
                selected ? `scale-125 ${activeClasses}` : idleClasses
              }`}
            />
          )
        })}
      </div>
    </>
  )
}
