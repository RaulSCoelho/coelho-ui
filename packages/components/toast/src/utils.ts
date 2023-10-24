import { ToastVariantProps } from '@coelho-ui/theme'

export function getTranslate(position: ToastVariantProps['position'] = 'bottom-left') {
  switch (position) {
    case 'top':
      return '0 -100vh'
    case 'bottom':
      return '0 100vh'
    case 'top-right':
    case 'bottom-right':
      return '100vw'
    case 'top-left':
    case 'bottom-left':
      return '-100vw'
  }
}
