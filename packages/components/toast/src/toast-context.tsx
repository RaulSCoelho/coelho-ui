import { ReactNode, useEffect, useState } from 'react'

import { createContext } from '@coelho-ui/react-utils'
import { groupBy, uniqueID } from '@coelho-ui/shared-utils'
import { AnimatePresence } from 'framer-motion'

import { ToastProps } from './toast'
import ToastWrapper from './toast-wrapper'

interface RaiseToastProps
  extends Pick<
    ToastProps,
    'message' | 'position' | 'duration' | 'color' | 'rounded' | 'icon' | 'hideIcon' | 'className' | 'classNames'
  > {}

export interface ToastContext {
  toast(props: RaiseToastProps): void
  closeAll(): void
}

export const [ToastContextProvider, useToast] = createContext<ToastContext>({
  name: 'ToastContext',
  strict: true,
  errorMessage: 'useToastContext: `context` is undefined. Seems you forgot to wrap component within <Toast />'
})

export interface ToastProviderProps {
  children: ReactNode
  limit?: number
}

export function ToastProvider({ children, limit }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  const groupedToasts = groupBy(toasts, 'position', undefined, 'bottom-left')

  useEffect(() => {
    if (limit && toasts.length > limit) {
      setToasts(prev => prev.filter((_, i) => i >= prev.length - limit))
    }
  }, [limit, toasts.length])

  function toast(props: ToastProps) {
    const id = uniqueID('toast')
    setToasts(prev => [...prev, { ...props, id, onClose: close }])
  }

  function close(toastId: string) {
    setToasts(prev => prev.filter(m => m.id !== toastId))
  }

  function closeAll() {
    setToasts([])
  }

  return (
    <ToastContextProvider value={{ toast, closeAll }}>
      {children}
      <AnimatePresence>
        {Object.entries(groupedToasts).map(
          ([key, value]) => value.length > 0 && <ToastWrapper toasts={value} position={key as any} key={key} />
        )}
      </AnimatePresence>
    </ToastContextProvider>
  )
}
