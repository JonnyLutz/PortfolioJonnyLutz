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
  image?: string
  imageAlt?: string
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
      ) : (
        <div
          className="flex h-44 w-full items-center justify-center overflow-hidden rounded-lg border border-slate/20 bg-navy-light px-3 text-center sm:h-52 md:h-56 lg:h-60"
          aria-hidden
        >
          <span className="font-mono text-[10px] leading-snug text-slate/70">Image · soon</span>
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-medium text-slate-light">
          {project.title}
          {!project.href ? (
            <span className="ml-2 align-middle font-mono text-[10px] font-normal uppercase tracking-wider text-slate/80">
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
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate marker:text-slate/60">
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
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate marker:text-slate/60">
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
      <p className="mt-3 max-w-xl text-sm text-slate">
        Featured build with a live demo — wearable-backed health data, dark UI, and a production deploy on Amplify.
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {(site.projects as readonly ProjectItem[]).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
