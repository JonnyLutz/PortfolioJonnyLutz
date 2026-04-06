import { useEffect, useRef, useState } from 'react'

const SESSION_KEY = 'agent-idle-egg-last'

/** Production: long idle + cooldown so the footer trace is a rare easter egg. Dev: shorter so you can verify without ~1 min of absolute stillness. */
const DEV = import.meta.env.DEV
const IDLE_MS_MIN = DEV ? 12_000 : 45_000
const IDLE_MS_MAX = DEV ? 25_000 : 90_000
const COOLDOWN_MS = DEV ? 90_000 : 8 * 60 * 1000

function randomBetween(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function motionReduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * After random idle (45–90s in production; ~12–25s in dev), increments `episodeId` at most once per
 * cooldown window (8 minutes in production; 90s in dev). Resets on pointer/scroll/key/touch.
 * Resets on user activity. Disabled entirely when `prefers-reduced-motion: reduce`.
 */
export function useIdleEasterEgg(): number {
  const [episodeId, setEpisodeId] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimer = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    if (motionReduced()) {
      return undefined
    }

    const scheduleNext = (forcedDelayMs?: number) => {
      clearTimer()
      const delay = forcedDelayMs ?? randomBetween(IDLE_MS_MIN, IDLE_MS_MAX)
      timerRef.current = setTimeout(() => {
        timerRef.current = null
        tryFire()
      }, delay)
    }

    const tryFire = () => {
      if (document.hidden) {
        return
      }
      if (motionReduced()) {
        scheduleNext()
        return
      }
      const now = Date.now()
      const lastRaw = sessionStorage.getItem(SESSION_KEY)
      const last = lastRaw ? Number.parseInt(lastRaw, 10) : 0
      if (last > 0 && now - last < COOLDOWN_MS) {
        scheduleNext(COOLDOWN_MS - (now - last))
        return
      }
      sessionStorage.setItem(SESSION_KEY, String(now))
      setEpisodeId((n) => n + 1)
      scheduleNext()
    }

    const onActivity = () => {
      scheduleNext()
    }

    const passive = { passive: true } as const
    document.addEventListener('pointermove', onActivity, passive)
    document.addEventListener('keydown', onActivity, passive)
    document.addEventListener('scroll', onActivity, passive)
    window.addEventListener('scroll', onActivity, passive)
    document.addEventListener('touchstart', onActivity, passive)

    const onVisibility = () => {
      if (document.hidden) {
        clearTimer()
      } else {
        scheduleNext()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    scheduleNext()

    return () => {
      clearTimer()
      document.removeEventListener('pointermove', onActivity)
      document.removeEventListener('keydown', onActivity)
      document.removeEventListener('scroll', onActivity)
      window.removeEventListener('scroll', onActivity)
      document.removeEventListener('touchstart', onActivity)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return episodeId
}
