import { site } from '../content/site'
import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">Contact</p>
        <h2 id="contact-heading" className="mt-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          Let&apos;s build something sharp
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Especially interested in conversations about AI developer tooling, design systems at scale, and front-end
          architecture for regulated or high-stakes products.
        </p>
        <a
          href={site.links.email}
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-fg transition hover:border-signal/50 hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
        >
          <Mail className="h-4 w-4 text-signal" aria-hidden />
          Say hello
        </a>
      </div>
    </section>
  )
}
