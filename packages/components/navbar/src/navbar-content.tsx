import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { NavbarContentVariantProps, navbarContent } from '@coelho-ui/theme'

export interface NavbarContentProps extends NavbarContentVariantProps, ComponentPropsWithoutRef<'div'> {}

const NavbarContent = forwardRef<HTMLDivElement, NavbarContentProps>(({ children, className, ...rest }, ref) => {
  return (
    <div ref={ref} className={navbarContent({ className })} {...rest}>
      {children}
    </div>
  )
})

NavbarContent.displayName = 'CoelhoUI.NavbarContent'

export default NavbarContent
