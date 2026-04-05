import { site } from '../content/site'

function TechTag({ label }: { label: string }) {
  return (
    <li>
      <span className="mr-1.5 mb-1 inline-block rounded-full bg-orange/10 px-3 py-1 text-xs font-medium text-orange">{label}</span>
    </li>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-16 scroll-mt-24 lg:mb-24" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="border-l-2 border-orange/60 pl-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-light"
      >
        <span className="mr-2 inline-block align-middle opacity-60" aria-hidden>
          <svg viewBox="0 0 20 20" fill="currentColor" className="inline h-4 w-4 text-orange"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.32.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd" /><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z" /></svg>
        </span>
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
