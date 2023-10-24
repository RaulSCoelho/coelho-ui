import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { navbarMenuToggle } from '@coelho-ui/theme'

import { useNavbarContext } from './navbar-context'

export interface NavbarMenuToggleProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'onClick'> {}

const NavbarMenuToggle = forwardRef<HTMLButtonElement, NavbarMenuToggleProps>(({ className }, ref) => {
  const { isMenuOpen, setIsMenuOpen } = useNavbarContext()
  const { base, toggle } = navbarMenuToggle({ isMenuOpen })

  return (
    <button ref={ref} className={base({ className })} onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <span className={toggle()}></span>
    </button>
  )
})

NavbarMenuToggle.displayName = 'CoelhoUI.NavbarMenuToggle'

export default NavbarMenuToggle
