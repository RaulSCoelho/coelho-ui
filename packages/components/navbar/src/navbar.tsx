import { ReactNode, forwardRef, useEffect, useState } from 'react'

import { pickChildren } from '@coelho-ui/react-utils'
import { navbar } from '@coelho-ui/theme'

import { NavbarProvider } from './navbar-context'
import NavbarMenu from './navbar-menu'

export interface NavbarProps {
  children: ReactNode
  isMenuOpen?: boolean
  height?: number | string
  shouldHideOnScroll?: boolean
  setIsMenuOpen?: (isOpen: boolean) => void
  onMenuOpenChange?: (isOpen: boolean) => void
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  (
    {
      children,
      height = '4rem',
      isMenuOpen: isMenuOpenProps = false,
      setIsMenuOpen: setIsMenuOpenProps,
      onMenuOpenChange
    },
    ref
  ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(isMenuOpenProps)
    const isControlled = typeof setIsMenuOpenProps !== 'undefined'
    const menuOpen = isControlled ? isMenuOpenProps : isMenuOpen
    const setMenuOpen = isControlled ? setIsMenuOpenProps : setIsMenuOpen

    const [childrenWithoutMenu, menu] = pickChildren(children, NavbarMenu)

    useEffect(() => {
      onMenuOpenChange?.(menuOpen)
    }, [menuOpen, onMenuOpenChange])

    return (
      <NavbarProvider
        value={{
          isMenuOpen: menuOpen,
          setIsMenuOpen: setMenuOpen,
          height
        }}
      >
        <nav ref={ref} className={navbar({ isMenuOpen: menuOpen })} style={{ height }}>
          {childrenWithoutMenu}
        </nav>
        {menu}
      </NavbarProvider>
    )
  }
)

Navbar.displayName = 'CoelhoUI.Navbar'

export default Navbar
