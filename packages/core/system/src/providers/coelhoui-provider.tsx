'use client'

import { ToastProvider } from '@coelho-ui/toast'

import { ThemesProvider, ThemesProviderProps } from './theme-provider'

interface CoelhoUIProviderProps extends ThemesProviderProps {
  toastLimit?: number
}

export function CoelhoUIProvider({ children, additionalThemes = [], toastLimit }: CoelhoUIProviderProps) {
  return (
    <ThemesProvider additionalThemes={additionalThemes}>
      <ToastProvider limit={toastLimit}>{children}</ToastProvider>
    </ThemesProvider>
  )
}
