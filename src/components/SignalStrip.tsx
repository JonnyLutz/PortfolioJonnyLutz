import { motion } from 'framer-motion'
import { site } from '../content/site'

export function SignalStrip() {
  return (
    <section
      id="signals"
      className="scroll-mt-20 border-t border-border bg-surface/40 py-16 md:py-20"
      aria-labelledby="signals-heading"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <h2 id="signals-heading" className="sr-only">
          Impact signals
        </h2>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">Signals</p>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Directional metrics from recent delivery — rounded for a public page, not an earnings report.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {site.signals.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-lg border border-border bg-void/50 p-4"
            >
              <p className="font-mono text-2xl font-semibold tabular-nums text-signal md:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-fg">{s.label}</p>
              <p className="mt-1 font-mono text-[10px] text-muted">{s.hint}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
