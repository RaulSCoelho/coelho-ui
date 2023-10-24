import { ReactNode } from 'react'

import { CoelhoUIProvider } from '@coelho-ui/react'

export function Providers({ children }: { children: ReactNode }) {
  return <CoelhoUIProvider>{children}</CoelhoUIProvider>
}
