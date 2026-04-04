import { motion } from 'framer-motion'
import { site } from '../content/site'
import { ArrowUpRight } from 'lucide-react'

export function WorkGrid() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 md:py-28" aria-labelledby="work-heading">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">Selected work</p>
        <h2 id="work-heading" className="mt-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          High-trust surfaces
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          A sample of the problems I gravitate toward — complex state, many stakeholders, and zero patience for flaky
          experiences.
        </p>

        <ul className="mt-12 flex flex-col gap-4">
          {site.projects.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <article className="group flex flex-col gap-3 rounded-xl border border-border bg-raised/40 p-5 transition hover:border-signal/35 hover:bg-raised md:flex-row md:items-start md:justify-between md:gap-8 md:p-6">
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-fg">
                    {p.title}
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-muted opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      aria-hidden
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
                <p className="shrink-0 font-mono text-[11px] text-iris/90 md:pt-1 md:text-right">{p.stack}</p>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
