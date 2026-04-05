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
    <header className="max-lg:pt-6 lg:sticky lg:top-0 lg:max-h-screen lg:py-24 lg:flex lg:flex-col lg:justify-between lg:gap-16">
      <div>
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-light ring-2 ring-blue/30">
            <span className="font-mono text-base font-bold tracking-tight text-blue select-none">JL</span>
            <span className="absolute inset-0 rounded-full ring-1 ring-slate/20" aria-hidden />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-blue/20 to-transparent" aria-hidden />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-light sm:text-5xl">
          <a
            href="#about"
            className="rounded-sm transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue focus-visible:text-blue"
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
                    className={`group inline-flex items-center gap-3 py-1 text-xs font-bold uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue focus-visible:text-blue ${
                      isActive ? 'text-slate-light hover:text-blue' : 'text-slate hover:text-blue'
                    }`}
                  >
                    <span
                      className={`h-px w-8 transition-all ${
                        isActive
                          ? 'bg-slate-light group-hover:bg-blue'
                          : 'bg-slate group-hover:w-12 group-hover:bg-blue'
                      }`}
                      aria-hidden
                    />
                    {label}
                    <span className="ml-auto translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 text-blue text-xs" aria-hidden>↗</span>
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
              className="text-slate transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
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
              className="text-slate transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="#contact-form"
              className="text-slate transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
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
