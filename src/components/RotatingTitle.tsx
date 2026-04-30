'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const TITLES = ['Software Engineer', 'Builder', 'Problem Solver', 'Super-Dad'] as const

/** Typing speed (ms per character). */
const TYPE_MS = 65
/** Deleting speed (ms per character). */
const DELETE_MS = 35
/** Pause after fully typed before deleting. */
const HOLD_MS = 2_000
/** Pause after fully deleted before typing next. */
const PAUSE_MS = 400

type Phase = 'typing' | 'holding' | 'deleting' | 'pausing'

/**
 * Cycles through TITLES with a typewriter effect:
 * type → hold → delete → pause → next title.
 * Respects prefers-reduced-motion (shows static text instead).
 */
export function RotatingTitle() {
  const [index, setIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const title = TITLES[index]

  const clear = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => {
    // Respect reduced motion — just show the first title statically.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCharCount(TITLES[0].length)
      return
    }

    clear()

    switch (phase) {
      case 'typing':
        if (charCount < title.length) {
          timerRef.current = setTimeout(() => setCharCount((c) => c + 1), TYPE_MS)
        } else {
          timerRef.current = setTimeout(() => setPhase('holding'), 0)
        }
        break
      case 'holding':
        timerRef.current = setTimeout(() => setPhase('deleting'), HOLD_MS)
        break
      case 'deleting':
        if (charCount > 0) {
          timerRef.current = setTimeout(() => setCharCount((c) => c - 1), DELETE_MS)
        } else {
          timerRef.current = setTimeout(() => setPhase('pausing'), 0)
        }
        break
      case 'pausing':
        timerRef.current = setTimeout(() => {
          setIndex((i) => (i + 1) % TITLES.length)
          setPhase('typing')
        }, PAUSE_MS)
        break
    }

    return clear
  }, [phase, charCount, title.length, clear])

  const displayed = title.slice(0, charCount)
  const showCursor = phase === 'typing' || phase === 'deleting'

  return (
    <span className="inline-flex items-baseline">
      <span>{displayed}</span>
      <span
        className={`ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.05em] bg-blue ${
          showCursor ? 'animate-pulse' : 'opacity-0'
        }`}
        aria-hidden
      />
    </span>
  )
}
