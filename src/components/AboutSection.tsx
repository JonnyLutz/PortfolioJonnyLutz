import { site } from '../content/site'
import { useBadgeColor } from '../context/BadgeColorContext'

export function AboutSection() {
  const { scheme } = useBadgeColor()
  return (
    <section id="about" className="mb-16 scroll-mt-24 lg:mb-24" aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">
        About
      </h2>

      <div className="mt-10 min-w-0 max-w-prose space-y-4 text-slate lg:mt-12">
        {site.about.map((paragraph) => (
          <p key={paragraph} className="text-pretty text-base leading-relaxed lg:text-[1.05rem] lg:leading-[1.7]">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-16 flex items-center gap-4" aria-hidden>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate/20 to-slate/20" />
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className={`h-4 w-4 shrink-0 ${scheme.subtleIcon}`}>
          <circle cx="12" cy="12" r="2" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate/20 to-slate/20" />
      </div>
    </section>
  )
}
