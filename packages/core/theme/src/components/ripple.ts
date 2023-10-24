import { VariantProps } from 'tailwind-variants'

import { addSlotsToObj, tv } from '../utils/tv'
import { colorVariants } from '../variants'

const ripple = tv({
  slots: {
    wrapper: '',
    base: 'animate-ripple bg-primary-50 absolute scale-100 rounded-[50%] opacity-0'
  },
  variants: {
    color: addSlotsToObj(colorVariants.solid, ['base']),
    foreground: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      color: 'default',
      foreground: true,
      class: 'bg-default-foreground'
    },
    {
      color: 'primary',
      foreground: true,
      class: 'bg-primary-foreground'
    },
    {
      color: 'secondary',
      foreground: true,
      class: 'bg-secondary-foreground'
    },
    {
      color: 'success',
      foreground: true,
      class: 'bg-success-foreground'
    },
    {
      color: 'danger',
      foreground: true,
      class: 'bg-danger-foreground'
    },
    {
      color: 'warning',
      foreground: true,
      class: 'bg-warning-foreground'
    },
    {
      color: 'info',
      foreground: true,
      class: 'bg-info-foreground'
    },
    {
      color: 'foreground',
      foreground: true,
      class: 'bg-background'
    }
  ]
})

export type RippleVariantProps = VariantProps<typeof ripple>
export type RippleSlots = keyof ReturnType<typeof ripple>

export { ripple }
