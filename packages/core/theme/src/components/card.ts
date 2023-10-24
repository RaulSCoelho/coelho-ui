import { VariantProps } from 'tailwind-variants'

import { tv } from '../utils/tv'
import { colorCompoundVariants, colorVariants, layoutVariants } from '../variants'

const card = tv({
  base: 'bg-content1 text-foreground box-border flex flex-col',
  variants: {
    color: {} as typeof colorVariants.solid,
    variant: {
      solid: '',
      pastel: '',
      shadow: '',
      bordered: 'border',
      flat: '',
      faded: ''
    },
    rounded: layoutVariants.rounded,
    shadow: {
      sm: 'shadow-small',
      md: 'shadow-medium',
      lg: 'shadow-large',
      none: 'shadow-none'
    },
    isDisabled: {
      true: 'opacity-disabled cursor-not-allowed'
    },
    isBlurred: {
      true: 'bg-opacity-30 backdrop-blur-md backdrop-saturate-150'
    }
  },
  compoundVariants: [
    ...colorCompoundVariants.solid({ variant: 'solid' }),
    ...colorCompoundVariants.pastel({ variant: 'pastel' }),
    ...colorCompoundVariants.shadow({ variant: 'shadow' }),
    ...colorCompoundVariants.bordered({ variant: 'bordered' }),
    ...colorCompoundVariants.flat({ variant: 'flat' }),
    ...colorCompoundVariants.faded({ variant: 'faded' })
  ],
  defaultVariants: {
    variant: 'solid',
    rounded: 'lg',
    shadow: 'md',
    isDisabled: false
  }
})

export type CardVariantProps = VariantProps<typeof card>
export type CardSlots = keyof ReturnType<typeof card>

export { card }
