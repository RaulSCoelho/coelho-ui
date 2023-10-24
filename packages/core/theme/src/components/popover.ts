import { VariantProps } from 'tailwind-variants'

import { addSlotsToObj, tv } from '../utils/tv'
import { colorVariants, layoutVariants } from '../variants'

const popover = tv({
  slots: {
    backdrop: 'fixed inset-0 z-50 h-[100dvh] w-screen',
    base: 'bg-content1 text-small absolute z-[50] overflow-hidden px-5 py-3'
  },
  variants: {
    color: addSlotsToObj(colorVariants.pastel, ['base']),
    rounded: addSlotsToObj(layoutVariants.rounded, ['base']),
    backdrop: {
      transparent: { backdrop: 'pointer-events-none' },
      opaque: {
        backdrop: 'bg-overlay/50'
      },
      blur: {
        backdrop: 'bg-overlay/30 backdrop-blur-md backdrop-saturate-150'
      }
    },
    shadow: {
      sm: {
        base: 'shadow-small'
      },
      md: {
        base: 'shadow-medium'
      },
      lg: {
        base: 'shadow-large'
      }
    }
  },
  defaultVariants: {
    rounded: 'lg',
    backdrop: 'transparent',
    shadow: 'md'
  }
})

export type PopoverVariantProps = VariantProps<typeof popover>
export type PopoverSlots = keyof ReturnType<typeof popover>

export { popover }
