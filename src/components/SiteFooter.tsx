import { site } from '../content/site'
import { AgentIdleGhost } from './AgentIdleGhost'

function IconGithub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

type SiteFooterProps = {
  /** Drives the idle “agent trace” Easter egg; increments from `useIdleEasterEgg`. */
  idleEpisodeId?: number
}

export function SiteFooter({ idleEpisodeId = 0 }: SiteFooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative z-[1] mt-auto border-t border-slate/15 bg-navy-light/25"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-3.5 lg:px-12">
        <AgentIdleGhost episodeId={idleEpisodeId} />
        <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          <p
            className="flex flex-wrap items-center justify-center gap-x-2.5 font-mono text-sm font-medium uppercase leading-snug tracking-[0.14em] text-slate sm:justify-start"
            aria-label={`Copyright ${year} ${site.name}. ${site.location}.`}
          >
            <span className="text-slate/70">©</span>
            <abbr title={site.name} className="cursor-default no-underline">
              JL
            </abbr>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate/40" aria-hidden />
            <span className="tabular-nums text-slate/80">{year}</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate/40" aria-hidden />
            <span className="text-slate/80 normal-case tracking-normal">{site.location}</span>
          </p>
          <ul className="flex items-center gap-5 text-slate" aria-label="Social links">
            <li>
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                aria-label="GitHub"
              >
                <IconGithub className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
