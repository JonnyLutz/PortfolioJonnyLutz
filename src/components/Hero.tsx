import { motion } from 'framer-motion'
import { site } from '../content/site'
import { AgentPulse } from './AgentPulse'
import { Cpu, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-raised px-3 py-1 font-mono text-[11px] text-muted"
          >
            <Cpu className="h-3.5 w-3.5 text-signal" aria-hidden />
            {site.employer}
          </motion.p>
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-fg md:text-5xl lg:text-[3.25rem]"
          >
            Jonathan{' '}
            <span className="bg-gradient-to-r from-signal to-iris bg-clip-text text-transparent">Lutz</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-2 text-lg font-medium text-signal md:text-xl"
          >
            {site.role}
            <Sparkles className="ml-2 inline-block h-4 w-4 align-[-2px] text-iris opacity-90" aria-hidden />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {site.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-signal px-5 py-2.5 text-sm font-semibold text-void transition hover:bg-signal-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-fg transition hover:border-signal/50 hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              LinkedIn
            </a>
            <a
              href={site.links.email}
              className="inline-flex items-center justify-center rounded-md border border-transparent px-5 py-2.5 text-sm font-medium text-muted underline-offset-4 hover:text-fg hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              Email
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="md:pt-6"
        >
          <AgentPulse />
          <p className="mt-3 font-mono text-[10px] text-muted/80 md:text-[11px]">
            Illustration only — not live inference. Represents how I think about agent loops + human review.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
