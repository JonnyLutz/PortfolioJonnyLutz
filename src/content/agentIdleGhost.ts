/** Colored segments for the idle “agent trace” typewriter (curated copy). Single-line status strings. */
export type GhostChunk = { className: string; text: string }

export const AGENT_IDLE_SNIPPETS: GhostChunk[][] = [
  [
    { className: 'text-violet/80', text: '[AgentIdleGhost]' },
    { className: 'text-slate/45', text: ' ' },
    { className: 'text-blue/80', text: 'INIT' },
    { className: 'text-slate/40', text: ' … ' },
    { className: 'text-green/85', text: 'OK' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'scan: ' },
    { className: 'text-blue/75', text: 'threat_surface' },
    { className: 'text-slate/45', text: ' … ' },
    { className: 'text-green/80', text: 'CLEAR' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'condition: ' },
    { className: 'text-green/85', text: 'NOMINAL' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'alarms: ' },
    { className: 'text-green/90', text: 'GREEN' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-orange/75', text: 'watchdog: ' },
    { className: 'text-slate/45', text: 'idle channel armed' },
  ],
  [
    { className: 'text-violet/80', text: '[AgentIdleGhost]' },
    { className: 'text-slate/45', text: ' ' },
    { className: 'text-blue/80', text: 'STATUS' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'telemetry: ' },
    { className: 'text-green/85', text: 'FLOWING' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'integrity: ' },
    { className: 'text-green/85', text: 'OK' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'policy: ' },
    { className: 'text-blue/75', text: 'EASTER_EGG' },
    { className: 'text-slate/45', text: ' … ' },
    { className: 'text-green/80', text: 'ALLOWED' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-orange/70', text: 'beacon: ' },
    { className: 'text-slate/45', text: 'no action required' },
  ],
  [
    { className: 'text-violet/80', text: '[AgentIdleGhost]' },
    { className: 'text-slate/45', text: ' ' },
    { className: 'text-blue/80', text: 'HEARTBEAT' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'link: ' },
    { className: 'text-green/85', text: 'STABLE' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'queue: ' },
    { className: 'text-green/85', text: 'EMPTY' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'anomaly scan: ' },
    { className: 'text-green/90', text: '0' },
    { className: 'text-slate/45', text: ' hits · ' },
    { className: 'text-slate/50', text: 'mood: ' },
    { className: 'text-blue/75', text: 'CALM' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-orange/75', text: 'note: ' },
    { className: 'text-slate/45', text: 'operator present; standing by' },
  ],
  [
    { className: 'text-violet/80', text: '[AgentIdleGhost]' },
    { className: 'text-slate/45', text: ' ' },
    { className: 'text-blue/80', text: 'DIAG' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'subsystem ' },
    { className: 'text-blue/75', text: 'idle_hook' },
    { className: 'text-slate/45', text: ': ' },
    { className: 'text-green/85', text: 'ARMED' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'subsystem ' },
    { className: 'text-blue/75', text: 'footer_sink' },
    { className: 'text-slate/45', text: ': ' },
    { className: 'text-green/85', text: 'READY' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'threat model: ' },
    { className: 'text-green/90', text: 'BENIGN' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'alarms: ' },
    { className: 'text-green/90', text: 'ALL_GREEN' },
  ],
  [
    { className: 'text-violet/80', text: '[AgentIdleGhost]' },
    { className: 'text-slate/45', text: ' ' },
    { className: 'text-blue/80', text: 'RUNLOG' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-green-dim/75', text: '✓ preflight' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-green-dim/75', text: '✓ spectators (1)' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'env: ' },
    { className: 'text-green/85', text: 'SAFE' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-slate/50', text: 'next: ' },
    { className: 'text-orange/80', text: 'COOLDOWN' },
    { className: 'text-slate/40', text: ' · ' },
    { className: 'text-blue/70', text: 'EOF' },
    { className: 'text-slate/40', text: ' — ' },
    { className: 'text-slate/45', text: 'nothing to escalate' },
  ],
]

export function flattenGhostChunks(chunks: GhostChunk[]): { char: string; className: string }[] {
  const out: { char: string; className: string }[] = []
  for (const c of chunks) {
    for (const char of c.text) {
      out.push({ char, className: c.className })
    }
  }
  return out
}

export function groupGhostRuns(
  flat: { char: string; className: string }[],
  visibleCount: number,
): { text: string; className: string }[] {
  const slice = flat.slice(0, visibleCount)
  const runs: { text: string; className: string }[] = []
  for (const item of slice) {
    const last = runs[runs.length - 1]
    if (last && last.className === item.className) {
      last.text += item.char
    } else {
      runs.push({ text: item.char, className: item.className })
    }
  }
  return runs
}
