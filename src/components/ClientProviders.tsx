'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { Toaster } from 'sonner'
import { BadgeColorProvider } from '../context/BadgeColorContext'
import { useTheme } from '../context/ThemeContext'
import { useIdleEasterEgg } from '../hooks/useIdleEasterEgg'

/* ------------------------------------------------------------------ */
/*  Idle easter-egg context — lets any descendant read the episode id  */
/* ------------------------------------------------------------------ */

const IdleEpisodeContext = createContext(0)

/** Read the current idle episode id (provided by ClientProviders). */
export function useIdleEpisodeId(): number {
  return useContext(IdleEpisodeContext)
}

/* ------------------------------------------------------------------ */
/*  ClientProviders                                                    */
/* ------------------------------------------------------------------ */

interface ClientProvidersProps {
  children: ReactNode
}

/**
 * Single client boundary wrapping all context providers and client-only logic.
 * Provides BadgeColorProvider, Sonner Toaster (theme-aware), and the idle
 * easter egg hook — exposing the episode id via context so SiteFooter (and
 * any other descendant) can consume it.
 */
export function ClientProviders({ children }: ClientProvidersProps) {
  const { theme } = useTheme()
  const idleEpisodeId = useIdleEasterEgg()

  return (
    <BadgeColorProvider>
      <IdleEpisodeContext.Provider value={idleEpisodeId}>
        <Toaster
          theme={theme === 'dark' ? 'dark' : 'light'}
          position="top-center"
          richColors
        />
        {children}
      </IdleEpisodeContext.Provider>
    </BadgeColorProvider>
  )
}
