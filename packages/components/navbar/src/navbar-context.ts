import { createContext } from '@coelho-ui/react-utils'

export interface NavbarContext {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  height?: number | string
  shouldHideOnScroll?: boolean
}

export const [NavbarProvider, useNavbarContext] = createContext<NavbarContext>({
  name: 'NavbarContext',
  strict: true,
  errorMessage: 'useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />'
})
