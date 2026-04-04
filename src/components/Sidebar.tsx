import { useEffect, useMemo, useState } from 'react'
import { site } from '../content/site'

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

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export function Sidebar() {
  const [active, setActive] = useState<string>('about')
  const nav = useMemo(
    () => NAV.filter((item) => site.showProjectsSection || item.id !== 'projects'),
    [site.showProjectsSection]
  )

  useEffect(() => {
    const sectionEls = nav.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    )
    if (sectionEls.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-15% 0px -50% 0px', threshold: 0 }
    )

    for (const el of sectionEls) {
      observer.observe(el)
    }
    return () => observer.disconnect()
  }, [nav])

  return (
    <header className="lg:sticky lg:top-0 lg:max-h-screen lg:py-24 lg:flex lg:flex-col lg:justify-between lg:gap-16">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-light sm:text-5xl">
          <a
            href="#about"
            className="rounded-sm transition hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green focus-visible:text-green"
          >
            {site.name}
          </a>
        </h1>
        <h2 className="mt-4 text-lg font-medium tracking-tight text-slate-light sm:text-xl">{site.title}</h2>
        <p className="mt-4 max-w-xs leading-normal text-slate">{site.tagline}</p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page">
          <ul className="flex flex-col gap-3">
            {nav.map(({ id, label }) => {
              const isActive = active === id
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`group inline-flex items-center gap-3 py-1 text-xs font-bold uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green focus-visible:text-green ${
                      isActive ? 'text-slate-light hover:text-green' : 'text-slate hover:text-green'
                    }`}
                  >
                    <span
                      className={`h-px w-8 transition-all ${
                        isActive
                          ? 'bg-slate-light group-hover:bg-green'
                          : 'bg-slate group-hover:w-12 group-hover:bg-green'
                      }`}
                      aria-hidden
                    />
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 lg:mt-0">
        <ul className="flex gap-5 text-slate" aria-label="Social">
          <li>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate transition hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              aria-label="GitHub"
            >
              <IconGithub className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate transition hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="#contact-form"
              className="text-slate transition hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              aria-label="Contact form"
            >
              <IconMail className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
