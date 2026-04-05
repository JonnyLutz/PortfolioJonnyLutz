/* eslint-disable react-refresh/only-export-components -- provider + hook share one module */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { BADGE_SCHEMES, type BadgeScheme, type BadgeSchemeIndex } from './badgeSchemes'

export type { BadgeScheme, BadgeSchemeIndex }

type BadgeColorContextValue = {
  schemeIndex: BadgeSchemeIndex
  scheme: BadgeScheme
  setSchemeIndex: (i: BadgeSchemeIndex) => void
}

const BadgeColorContext = createContext<BadgeColorContextValue | null>(null)

export function BadgeColorProvider({ children }: { children: ReactNode }) {
  const [schemeIndex, setSchemeIndexState] = useState<BadgeSchemeIndex>(0)

  const setSchemeIndex = useCallback((i: BadgeSchemeIndex) => {
    setSchemeIndexState(i)
  }, [])

  const scheme = BADGE_SCHEMES[schemeIndex]

  const value = useMemo(
    () => ({ schemeIndex, scheme, setSchemeIndex }),
    [schemeIndex, scheme, setSchemeIndex],
  )

  return (
    <BadgeColorContext.Provider value={value}>
      {children}
    </BadgeColorContext.Provider>
  )
}

export function useBadgeColor(): BadgeColorContextValue {
  const ctx = useContext(BadgeColorContext)
  if (!ctx) {
    throw new Error('useBadgeColor must be used within BadgeColorProvider')
  }
  return ctx
}
