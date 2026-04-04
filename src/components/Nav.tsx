const links = [
  { href: '#lab', label: 'Lab' },
  { href: '#signals', label: 'Signals' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/80 bg-void/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-mono text-xs font-medium tracking-tight text-signal hover:text-signal-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          jlutz<span className="text-muted">.dev</span>
        </a>
        <nav aria-label="Primary" className="flex gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
