import { site } from '../content/site'
import { useBadgeColor } from '../context/BadgeColorContext'

export type ProjectItem = {
  title: string
  description: string
  /** Optional pills when you are not using `stackBullets`. */
  stack?: readonly string[]
  /** One bullet per layer/tool — full stack in prose form. */
  stackBullets?: readonly string[]
  /** What makes the project different — product or engineering angle. */
  highlights?: readonly string[]
  href?: string
  hrefLabel?: string
  /** GitHub repository (icon next to project title). */
  repoHref?: string
  image?: string
  imageAlt?: string
}

function IconGithub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function TechPill({ label }: { label: string }) {
  const { scheme } = useBadgeColor()
  return (
    <span
      className={`mr-1.5 mb-1 inline-block rounded-full border border-slate/25 px-3 py-1 text-xs font-medium ${scheme.tagPill}`}
    >
      {label}
    </span>
  )
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const hasImage = Boolean(project.image && project.imageAlt)

  return (
    <article className="group flex flex-col gap-6">
      {hasImage ? (
        project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="block h-44 w-full overflow-hidden rounded-lg border border-slate/25 bg-navy-light/40 transition hover:border-blue/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue sm:h-52 md:h-56 lg:h-60"
            aria-label={`${project.hrefLabel ?? 'Open live demo'} — ${project.title}`}
          >
            <img
              src={project.image}
              alt={project.imageAlt!}
              width={1200}
              height={675}
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </a>
        ) : (
          <div className="h-44 w-full overflow-hidden rounded-lg border border-slate/25 bg-navy-light/40 sm:h-52 md:h-56 lg:h-60">
            <img
              src={project.image}
              alt={project.imageAlt!}
              width={1200}
              height={675}
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
        )
      ) : (
        <div
          className="flex h-44 w-full items-center justify-center overflow-hidden rounded-lg border border-slate/20 bg-navy-light px-3 text-center sm:h-52 md:h-56 lg:h-60"
          aria-hidden
        >
          <span className="font-mono text-[10px] leading-snug text-slate/85">Image · soon</span>
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="flex flex-wrap items-center gap-2 text-base font-medium">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-light transition-colors hover:text-blue focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            >
              {project.title}
            </a>
          ) : (
            <span className="text-slate-light">{project.title}</span>
          )}
          {project.repoHref ? (
            <a
              href={project.repoHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 rounded-sm text-slate transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              aria-label={`${project.title} on GitHub`}
            >
              <IconGithub className="h-5 w-5" />
            </a>
          ) : null}
          {!project.href ? (
            <span className="font-mono text-[10px] font-normal uppercase tracking-wider text-slate/90">
              placeholder
            </span>
          ) : null}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">{project.description}</p>

        {project.highlights?.length ? (
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-light">
              What stands out
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate marker:text-slate/75">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.stackBullets?.length ? (
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-light">
              Tech stack
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate marker:text-slate/75">
              {project.stackBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.stack?.length && !project.stackBullets?.length ? (
          <div className="mt-3 flex flex-wrap gap-x-1 gap-y-2">
            {project.stack.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
        ) : null}
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue transition hover:text-blue-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            {project.hrefLabel ?? 'View project'}
            <span aria-hidden>↗</span>
          </a>
        ) : null}
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const { scheme } = useBadgeColor()
  return (
    <section id="projects" className="mb-16 scroll-mt-24 lg:mb-24" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className={`border-l-2 pl-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-light ${scheme.headingBorder}`}
      >
        Projects
      </h2>

      <div className="mt-12 flex flex-col gap-12">
        {(site.projects as readonly ProjectItem[]).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
