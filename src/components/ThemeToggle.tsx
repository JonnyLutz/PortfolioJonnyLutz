import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const base =
    'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue'
  const idle =
    'border-slate/35 bg-navy-light/80 text-slate-light opacity-75 hover:opacity-100 hover:border-blue/40'
  const active =
    'scale-105 border-blue/70 bg-navy-light text-blue ring-1 ring-blue/35'

  return (
    <div
      className="fixed left-5 top-5 z-50 flex flex-col items-center gap-0.5"
      role="group"
      aria-label="Color theme"
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-label="Light mode"
        aria-pressed={theme === 'light'}
        className={`${base} ${theme === 'light' ? active : idle}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-2 w-2"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-label="Dark mode"
        aria-pressed={theme === 'dark'}
        className={`${base} ${theme === 'dark' ? active : idle}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-2 w-2"
          aria-hidden
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </div>
  )
}
