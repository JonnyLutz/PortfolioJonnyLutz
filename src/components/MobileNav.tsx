'use client'

import { site } from '@/src/content/site'
import { deriveNavItems } from '@/src/lib/deriveNavItems'

/** Horizontal jump links — sidebar nav is hidden on small screens. */
export function MobileNav() {
  const nav = deriveNavItems(site)

  return (
    <nav
      className="sticky top-0 z-10 border-b border-slate/20 bg-navy-light/90 px-6 py-3 backdrop-blur-md lg:hidden"
      aria-label="In-page"
    >
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate">
        {nav.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
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
