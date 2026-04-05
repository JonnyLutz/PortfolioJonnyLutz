import { BADGE_SCHEMES, type BadgeSchemeIndex } from '../context/badgeSchemes'
import { useBadgeColor } from '../context/BadgeColorContext'

export function BadgeColorPicker() {
  const { schemeIndex, setSchemeIndex } = useBadgeColor()

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex flex-row items-center gap-2.5"
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
                isSelected
                  ? BADGE_SCHEMES[i].dotActive
                  : BADGE_SCHEMES[i].dotIdle
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}
