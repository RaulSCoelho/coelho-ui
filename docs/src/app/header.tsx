'use client'

import { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs'

import { Menu } from '@/components/Menu'
import { ThemeSwitcher } from '@/components/Switchers/ThemeSwitcher'
import { Navbar, NavbarContent, NavbarMenu, NavbarMenuToggle } from '@coelho-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
      <NavbarContent className="gap-4 py-2">
        <NavbarMenuToggle className="md:hidden" />
        <div className="relative aspect-square h-5/6">
          <Image src="/logo.png" alt="logo" fill />
        </div>
        <h1 className="text-3xl">CoelhoUI</h1>
      </NavbarContent>

      <NavbarContent className="flex gap-4">
        <Link href="https://github.com/RaulSCoelho/coelho-ui" target="_blank">
          <BsGithub size={24} className="text-default-600 dark:text-default-500" />
        </Link>
        <ThemeSwitcher />
      </NavbarContent>

      <NavbarMenu>
        <Menu />
      </NavbarMenu>
    </Navbar>
  )
}
