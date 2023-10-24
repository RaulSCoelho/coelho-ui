import { VariantProps } from 'tailwind-variants'

import { tv } from '../utils/tv'
import { colorVariants } from '../variants'

const spinner = tv({
  slots: {
    base: 'animate-spin',
    circle: 'animate-strokedrift fill-none stroke-current stroke-[3.6]'
  },
  variants: {
    color: colorVariants.text
  },
  defaultVariants: {
    color: 'foreground'
  }
})

export type SpinnerVariantProps = VariantProps<typeof spinner>

export { spinner }
