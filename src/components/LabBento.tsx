import { motion } from 'framer-motion'
import { site } from '../content/site'
import { Bot, Layers, ShieldCheck } from 'lucide-react'

const icons = [Bot, Layers, ShieldCheck]

export function LabBento() {
  return (
    <section id="lab" className="scroll-mt-20 border-t border-border py-20 md:py-28" aria-labelledby="lab-heading">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">Lab</p>
        <h2 id="lab-heading" className="mt-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          Front-end craft × AI systems
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          The overlap I care about: interfaces customers feel, and the automation that keeps teams fast without
          cutting corners on quality.
        </p>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {site.lab.map((item, index) => {
            const Icon = icons[index] ?? Bot
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col rounded-xl border border-border bg-raised/60 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
              >
                <Icon className="h-8 w-8 text-signal" strokeWidth={1.25} aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
                <p className="mt-4 font-mono text-[10px] leading-snug text-iris/90">{item.tag}</p>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
