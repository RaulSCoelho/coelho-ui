import './globals.css'
import { ReactNode } from 'react'

import { Menu } from '@/components/Menu'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from './header'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Home | Coelho UI',
    template: '%s | Coelho UI'
  },
  icons: {
    icon: '/logo.png'
  },
  description: 'Coelho Digital React Components with Tailwind CSS'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth antialiased`}>
      <body className="scrollbar scrollbar-track-zinc-300/75 scrollbar-thumb-[#8888884b]" suppressHydrationWarning>
        <div className="flex h-[100dvh] flex-col">
          <Providers>
            <Header />
            <div className="flex h-[calc(100dvh-64px)]">
              <div className="h-full min-w-fit overflow-auto border-r border-divider p-4 pr-10 max-md:hidden">
                <Menu />
              </div>
              <div className="grow overflow-auto p-5">{children}</div>
            </div>
          </Providers>
        </div>
      </body>
    </html>
  )
}
