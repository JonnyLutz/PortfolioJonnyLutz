import { useEffect, useState } from 'react'
import {
  AGENT_IDLE_SNIPPETS,
  flattenGhostChunks,
  groupGhostRuns,
} from '../content/agentIdleGhost'

const HOLD_MS = 2_200
const FADE_MS = 900

type Phase = 'hidden' | 'typing' | 'hold' | 'out'

type Props = { episodeId: number }

export function AgentIdleGhost({ episodeId }: Props) {
  const [phase, setPhase] = useState<Phase>('hidden')
  const [visibleCount, setVisibleCount] = useState(0)
  const [snippetIndex, setSnippetIndex] = useState(0)

  useEffect(() => {
    if (episodeId === 0) {
      return undefined
    }

    const idx = Math.floor(Math.random() * AGENT_IDLE_SNIPPETS.length)
    const flat = flattenGhostChunks(AGENT_IDLE_SNIPPETS[idx])
    setSnippetIndex(idx)
    setPhase('typing')
    setVisibleCount(0)

    const timeoutIds: ReturnType<typeof setTimeout>[] = []
    let cancelled = false
    let i = 0

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn()
      }, ms)
      timeoutIds.push(id)
    }

    const typeStep = () => {
      if (cancelled) return
      if (i >= flat.length) {
        setPhase('hold')
        schedule(() => {
          if (cancelled) return
          setPhase('out')
          schedule(() => {
            if (cancelled) return
            setPhase('hidden')
            setVisibleCount(0)
          }, FADE_MS)
        }, HOLD_MS)
        return
      }
      i += 1
      setVisibleCount(i)
      const pause = 10 + Math.random() * 22
      schedule(typeStep, pause)
    }

    typeStep()

    return () => {
      cancelled = true
      for (const id of timeoutIds) {
        clearTimeout(id)
      }
    }
  }, [episodeId])

  if (phase === 'hidden') {
    return null
  }

  const flat = flattenGhostChunks(AGENT_IDLE_SNIPPETS[snippetIndex])
  const runs = groupGhostRuns(flat, visibleCount)

  return (
    <div
      className="pointer-events-none w-full min-w-0 border-b border-slate/10 pb-2 mb-1 sm:pb-2.5 sm:mb-1.5"
      aria-hidden
    >
      <div
        className={`w-full min-w-0 transition-[opacity,filter] duration-[900ms] ease-out ${
          phase === 'out' ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'
        }`}
      >
        <pre className="w-full min-w-0 overflow-x-auto overflow-y-hidden whitespace-nowrap text-center font-mono text-[10px] leading-none text-slate/90 sm:text-left sm:text-[11px] [scrollbar-width:thin]">
          {runs.map((run, j) => (
            <span key={`${episodeId}-${j}`} className={run.className}>
              {run.text}
            </span>
          ))}
          {phase === 'typing' || phase === 'hold' ? (
            <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-blue/50 align-middle sm:h-3.5" />
          ) : null}
        </pre>
      </div>
    </div>
  )
}
