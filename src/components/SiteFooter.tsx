import { site } from '../content/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Vite + React + Tailwind.
        </p>
        <div className="flex gap-6 font-mono text-xs">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            github/{site.handle}
          </a>
        </div>
      </div>
    </footer>
  )
}
