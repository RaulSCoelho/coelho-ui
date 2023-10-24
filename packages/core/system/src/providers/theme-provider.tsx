'use client'

import { ReactNode, createContext, useContext, useEffect, useMemo } from 'react'

import { useIsMounted } from '@coelho-ui/use-is-mounted'
import { useLocalStorage } from '@coelho-ui/use-local-storage'
import { UseMediaQueryResponse, useMediaQuery } from '@coelho-ui/use-media-query'

export const defaultThemes = ['light', 'dark'] as const
export type Theme = (typeof defaultThemes)[number] | (string & {})
export type ThemeWithSystem = Theme | 'system'
export type SystemTheme = UseMediaQueryResponse['systemTheme']

export interface ThemesContextProps {
  theme: {
    list: Theme[]
    selected: Theme
    system: boolean
    set(theme: ThemeWithSystem): void
  }
}

export interface ThemesProviderProps {
  children: ReactNode
  additionalThemes?: string[]
}

export const ThemesContext = createContext({} as ThemesContextProps)

export function ThemesProvider({ children, additionalThemes = [] }: ThemesProviderProps) {
  const isMounted = useIsMounted()
  const { systemTheme } = useMediaQuery()
  const [theme, setTheme, removeStoredTheme] = useLocalStorage<ThemeWithSystem>('theme', 'system')
  const isSystem = theme === 'system'
  const themes = useMemo(() => [...defaultThemes, ...additionalThemes], [additionalThemes])

  useEffect(() => {
    document.documentElement.classList.remove(...themes)
    const selectedTheme = theme === 'system' ? systemTheme : theme

    if (themes.includes(selectedTheme)) {
      document.documentElement.classList.add(selectedTheme)
      setTheme(theme)
    } else {
      removeStoredTheme()
    }
  }, [theme, systemTheme, themes, setTheme, removeStoredTheme])

  return (
    <ThemesContext.Provider
      value={{
        theme: {
          list: themes,
          selected: isSystem ? systemTheme : theme,
          system: isSystem,
          set: setTheme
        }
      }}
    >
      {isMounted && children}
    </ThemesContext.Provider>
  )
}

export function useTheme() {
  const { theme } = useContext(ThemesContext)
  return theme
}
