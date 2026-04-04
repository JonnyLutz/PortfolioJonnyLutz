import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STEPS = [
  { status: 'idle', lines: ['agent.status: standby', 'context: repo + design tokens'] },
  {
    status: 'plan',
    lines: ['> ingest route graph', '> map Cloudscape → layout primitives', '> estimate a11y checks'],
  },
  {
    status: 'build',
    lines: ['> apply patch: FeaturePanel.tsx', '> wire metrics hook', '> run cypress: smoke'],
  },
  { status: 'ship', lines: ['✓ review queue cleared', '✓ canary: green', 'handoff: ready'] },
] as const

export function AgentPulse() {
  const [i, setI] = useState(0)
  const step = STEPS[i]

  const interval = useMemo(() => (step.status === 'idle' ? 3200 : 2600), [step.status])

  useEffect(() => {
    const t = window.setInterval(() => {
      setI((n) => (n + 1) % STEPS.length)
    }, interval)
    return () => window.clearInterval(t)
  }, [interval])

  return (
    <div
      className="rounded-lg border border-border bg-raised/90 p-4 font-mono text-[11px] leading-relaxed text-muted shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] md:text-xs"
      role="status"
      aria-live="polite"
      aria-label="Illustrative agent activity"
    >
      <div className="mb-3 flex items-center gap-2 border-b border-border pb-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/40 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
        </span>
        <span className="text-fg/90">synthetic agent trace</span>
        <span className="ml-auto rounded bg-surface px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-signal">
          {step.status}
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step.status}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="space-y-1"
        >
          {step.lines.map((line) => (
            <p key={line} className="text-muted">
              {line}
            </p>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
