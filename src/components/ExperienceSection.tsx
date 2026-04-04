import { site } from '../content/site'

function TechTag({ label }: { label: string }) {
  return (
    <li>
      <span className="mr-1.5 mb-1 inline-block rounded-full bg-green/10 px-3 py-1 text-xs font-medium text-green">{label}</span>
    </li>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-16 scroll-mt-24 lg:mb-24" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-sm font-bold uppercase tracking-widest text-slate-light">
        Experience
      </h2>

      <div className="mt-10">
        <ol className="flex flex-col gap-16">
          {site.experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <div className="lg:grid lg:grid-cols-[minmax(0,6.5rem)_minmax(0,1fr)] lg:gap-8">
                <div className="mb-2 font-mono text-xs uppercase tracking-wide text-slate lg:mb-0">
                  {job.period}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-medium text-slate-light">
                    {job.title}
                    <span className="text-slate"> · </span>
                    <span className="text-slate">{job.company}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{job.summary}</p>
                  {job.bullets.length > 0 ? (
                    <ul className="mt-3 list-none space-y-2 text-sm text-slate">
                      {job.bullets.map((b) => (
                        <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-slate">
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <ul className="mt-4 flex flex-wrap gap-x-1 gap-y-2">
                    {job.stack.map((tech) => (
                      <TechTag key={tech} label={tech} />
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
