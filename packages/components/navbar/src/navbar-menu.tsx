import { ReactNode, forwardRef } from 'react'

import { Collapse } from '@coelho-ui/collapse'
import { navbarMenu } from '@coelho-ui/theme'

import { useNavbarContext } from './navbar-context'

export interface NavbarMenuProps {
  children: ReactNode
}

const NavbarMenu = forwardRef<HTMLDivElement, NavbarMenuProps>(({ children }, ref) => {
  const { isMenuOpen, height } = useNavbarContext()
  const { collapse, menu } = navbarMenu()

  return (
    <Collapse ref={ref} open={isMenuOpen} className={collapse()} style={{ top: height }}>
      <div className={menu()} style={{ height: isMenuOpen ? `calc(100vh - ${height})` : 0 }}>
        {children}
      </div>
    </Collapse>
  )
})

NavbarMenu.displayName = 'CoelhoUI.NavbarMenu'

export default NavbarMenu
