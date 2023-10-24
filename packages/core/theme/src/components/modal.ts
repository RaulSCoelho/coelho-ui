import { VariantProps } from 'tailwind-variants'

import { addSlotsToObj, tv } from '../utils/tv'
import { colorVariants, layoutVariants } from '../variants'

const modal = tv({
  slots: {
    backdrop: 'fixed inset-0 z-50 flex h-[100dvh] w-screen items-center justify-center',
    base: 'bg-content1 relative m-1 box-border flex w-full flex-col overflow-hidden sm:mx-6 sm:my-16',
    header: 'text-large px-6 py-4 font-semibold',
    body: 'flex flex-1 flex-col gap-3 px-6 py-2',
    footer: 'flex justify-end gap-2 px-6 py-4',
    closeButton: 'text-foreground/50 hover:bg-foreground/10 absolute right-1 top-1 select-none rounded-full p-2'
  },
  variants: {
    color: addSlotsToObj(colorVariants.pastel, ['base']),
    rounded: addSlotsToObj(layoutVariants.rounded, ['base']),
    backdrop: {
      transparent: {
        backdrop: 'pointer-events-none bg-transparent',
        base: 'pointer-events-auto'
      },
      opaque: {
        backdrop: 'bg-overlay/50 backdrop-opacity-disabled'
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
    },
    scroll: {
      normal: {
        base: 'overflow-y-hidden'
      },
      inside: {
        base: 'max-h-[calc(100%_-_7.5rem)]',
        body: 'overflow-y-auto'
      },
      outside: {
        backdrop: 'items-start overflow-y-auto',
        base: 'my-16'
      }
    },
    size: {
      xs: {
        base: 'max-w-xs'
      },
      sm: {
        base: 'max-w-sm'
      },
      md: {
        base: 'max-w-md'
      },
      lg: {
        base: 'max-w-lg'
      },
      xl: {
        base: 'max-w-xl'
      },
      '2xl': {
        base: 'max-w-2xl'
      },
      '3xl': {
        base: 'max-w-3xl'
      },
      '4xl': {
        base: 'max-w-4xl'
      },
      '5xl': {
        base: 'max-w-5xl'
      },
      full: {
        base: 'mx-0 my-0 h-[100dvh] max-h-[100dvh] max-w-full !rounded-none sm:mx-0 sm:my-0'
      }
    }
  },
  defaultVariants: {
    rounded: 'lg',
    size: 'md',
    shadow: 'sm',
    backdrop: 'opaque',
    scroll: 'inside'
  }
})

export type ModalVariantProps = VariantProps<typeof modal>
export type ModalSlots = keyof ReturnType<typeof modal>

export { modal }
