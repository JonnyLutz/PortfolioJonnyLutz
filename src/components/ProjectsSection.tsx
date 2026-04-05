import { site } from '../content/site'

export type ProjectItem = {
  title: string
  description: string
  stack: readonly string[]
  href?: string
  hrefLabel?: string
  image?: string
  imageAlt?: string
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="mr-1.5 mb-1 inline-block rounded-full border border-slate/40 px-3 py-1 text-xs text-slate">{label}</span>
  )
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const hasImage = Boolean(project.image && project.imageAlt)

  return (
    <article className="group flex flex-col gap-4 sm:flex-row sm:gap-6">
      {hasImage ? (
        <div className="aspect-video w-full shrink-0 overflow-hidden rounded border border-white/10 sm:aspect-square sm:w-32 sm:max-w-[8rem]">
          <img
            src={project.image}
            alt={project.imageAlt!}
            width={400}
            height={300}
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>
      ) : (
        <div
          className="flex aspect-video w-full shrink-0 items-center justify-center rounded border border-white/5 bg-navy-light px-3 text-center sm:aspect-square sm:w-32 sm:max-w-[8rem]"
          aria-hidden
        >
          <span className="font-mono text-[10px] leading-snug text-slate/70">Image · soon</span>
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-medium text-slate-light">
          {project.title}
          <span className="ml-2 align-middle font-mono text-[10px] font-normal uppercase tracking-wider text-slate/80">
            placeholder
          </span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-x-1 gap-y-2">
          {project.stack.map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green transition hover:text-green-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
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
  return (
    <section id="projects" className="mb-16 scroll-mt-24 lg:mb-24" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="border-l-2 border-green/50 pl-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-light"
      >
        Projects
      </h2>
      <p className="mt-3 max-w-xl text-sm text-slate">
        New case studies and demos are on the way. These slots are placeholders until each project has a repo, write-up, or
        live link.
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {(site.projects as readonly ProjectItem[]).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
