import { VariantProps } from 'tailwind-variants'

import { tv } from '../utils/tv'

const toast = tv({
  slots: {
    wrapper: 'pointer-events-none fixed z-50 flex flex-col gap-2 bg-transparent max-sm:w-full',
    base: 'shadow-medium pointer-events-auto w-fit max-w-[90%] sm:max-w-2xl'
  },
  variants: {
    position: {
      top: { wrapper: 'left-1/2 top-4 -translate-x-1/2 items-center' },
      'top-right': { wrapper: 'right-4 top-4 items-end' },
      'top-left': { wrapper: 'left-4 top-4' },
      bottom: { wrapper: 'bottom-4 left-1/2 -translate-x-1/2 items-center' },
      'bottom-right': { wrapper: 'bottom-4 right-4 items-end' },
      'bottom-left': { wrapper: 'bottom-4 left-4' }
    }
  },
  compoundVariants: [
    {
      open: false,
      position: 'top',
      class: { base: '-translate-y-[100vh]' }
    },
    {
      open: false,
      position: 'bottom',
      class: { base: 'translate-y-[100vh]' }
    },
    {
      open: false,
      position: ['top-right', 'bottom-right'],
      class: { base: 'translate-x-[100vw]' }
    },
    {
      open: false,
      position: ['top-left', 'bottom-left'],
      class: { base: '-translate-x-[100vw]' }
    }
  ],
  defaultVariants: {
    position: 'bottom-left'
  }
})

export type ToastVariantProps = VariantProps<typeof toast>
export type ToastSlots = keyof ReturnType<typeof toast>

export { toast }
