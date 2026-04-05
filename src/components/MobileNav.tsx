import { site } from '../content/site'

const LINKS_ALL = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const

/** Horizontal jump links — sidebar nav is hidden on small screens. */
export function MobileNav() {
  const links = LINKS_ALL.filter((link) => site.showProjectsSection || link.href !== '#projects')

  return (
    <nav
      className="sticky top-0 z-10 border-b border-white/5 bg-navy/90 px-6 py-3 backdrop-blur-md lg:hidden"
      aria-label="In-page"
    >
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="transition hover:text-blue focus-visible:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  )
}
