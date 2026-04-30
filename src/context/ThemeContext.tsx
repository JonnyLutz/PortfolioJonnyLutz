'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

const STORAGE_KEY = 'jonny-dev-theme'

export type ThemeMode = 'dark' | 'light'

type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * Read the stored theme from localStorage (client-only).
 * Falls back to system preference, then 'dark'.
 */
function readStoredTheme(): ThemeMode {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* ignore */
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }
  return 'dark'
}

function applyThemeClass(mode: ThemeMode) {
  if (typeof window === 'undefined') return
  const root = document.documentElement
  if (mode === 'light') {
    root.classList.add('light')
  } else {
    root.classList.remove('light')
  }
  root.style.colorScheme = mode === 'light' ? 'light' : 'dark'
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', mode === 'light' ? '#e8f0fa' : '#05080f')
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Start with 'dark' as the default to avoid hydration mismatch.
  // The real stored theme is read after mount in the useEffect below.
  const [theme, setThemeState] = useState<ThemeMode>('dark')

  // After mount, read the stored theme from localStorage
  useEffect(() => {
    const stored = readStoredTheme()
    setThemeState(stored)
  }, [])

  // Apply theme class and persist to localStorage whenever theme changes
  useEffect(() => {
    applyThemeClass(theme)
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, theme)
      } catch {
        /* ignore */
      }
    }
  }, [theme])

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
