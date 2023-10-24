import { VariantProps } from 'tailwind-variants'

import { tv } from '../utils/tv'

const navbar = tv({
  base: 'border-divider bg-background/70 sticky inset-x-0 top-0 z-40 flex items-stretch justify-between border-b px-6 backdrop-blur-lg backdrop-saturate-150',
  variants: {
    isMenuOpen: {
      true: 'border-none backdrop-blur-xl'
    }
  }
})

const navbarContent = tv({
  base: 'flex h-full items-center gap-4'
})

const navbarMenu = tv({
  slots: {
    collapse: 'bg-background/70 text-large fixed inset-x-0 z-[39] backdrop-blur-xl backdrop-saturate-150',
    menu: 'flex h-full flex-col gap-2 overflow-y-auto px-6 pt-2'
  }
})

const navbarMenuItem = tv({
  base: 'flex h-full items-center font-medium',
  variants: {
    isActive: { true: 'text-focus font-bold' }
  }
})

const navbarMenuToggle = tv({
  base: 'h-6 w-6 outline-none',
  slots: {
    toggle:
      'pointer-events-none flex h-full w-full flex-col items-center justify-center transition-opacity before:block before:h-px before:w-6 before:-translate-y-1 before:rotate-0 before:bg-current before:transition-transform before:duration-150 before:content-[""] after:block after:h-px after:w-6 after:translate-y-1 after:rotate-0 after:bg-current after:transition-transform after:duration-150 after:content-[""]'
  },
  variants: {
    isMenuOpen: {
      true: { toggle: 'before:translate-y-px before:rotate-45 after:translate-y-0 after:-rotate-45' }
    }
  }
})

export type NavbarVariantProps = VariantProps<typeof navbar>
export type NavbarContentVariantProps = VariantProps<typeof navbarContent>
export type NavbarMenuVariantProps = VariantProps<typeof navbarMenu>
export type NavbarMenuItemVariantProps = VariantProps<typeof navbarMenuItem>
export type NavbarMenuToggleVariantProps = VariantProps<typeof navbarMenuToggle>

export { navbar, navbarContent, navbarMenu, navbarMenuItem, navbarMenuToggle }
