import { useState } from 'react'

const BG_IMAGES = [
  '/image.png',
  '/bg-robot-2.png',
  '/bg-robot-3.png',
  '/bg-robot-4.png',
]

export function BgPicker() {
  const [active, setActive] = useState(0)

  return (
    <>
      {/* Fixed background image layer */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
        style={{
          backgroundImage: `url(${BG_IMAGES[active]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.06,
          mixBlendMode: 'luminosity',
        }}
      />

      {/* Toggle buttons — fixed bottom-right */}
      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1.5"
        role="group"
        aria-label="Robot background artwork"
      >
        <span
          className="mb-0.5 text-blue drop-shadow-[0_0_6px_color-mix(in_srgb,var(--color-blue)_40%,transparent)]"
          aria-hidden
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M12 2v2" />
            <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" />
            <rect x="6" y="5" width="12" height="10" rx="2" />
            <circle cx="9.5" cy="10" r="1" fill="currentColor" stroke="none" />
            <circle cx="14.5" cy="10" r="1" fill="currentColor" stroke="none" />
            <path d="M9 14h6" />
            <path d="M8 19h8v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2Z" />
          </svg>
        </span>
        {BG_IMAGES.map((src, i) => {
          const primary = i % 2 === 0
          const isSelected = active === i
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
              onClick={() => setActive(i)}
              aria-label={`Background ${i + 1}`}
              aria-pressed={isSelected}
              className={`h-2.5 w-2.5 rounded-full border transition-all duration-200 ${
                isSelected ? `scale-125 ${activeClasses}` : idleClasses
              }`}
            />
          )
        })}
      </div>
    </>
  )
}
