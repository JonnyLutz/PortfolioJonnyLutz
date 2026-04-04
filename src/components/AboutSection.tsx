import { site } from '../content/site'

export function AboutSection() {
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
    </section>
  )
}
