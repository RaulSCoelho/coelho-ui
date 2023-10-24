import { VariantProps } from 'tailwind-variants'

import { tv } from '../utils/tv'
import { colorVariants, layoutVariants } from '../variants'

const skeleton = tv({
  base: 'block animate-pulse opacity-20',
  variants: {
    color: colorVariants.solid,
    rounded: layoutVariants.rounded
  },
  defaultVariants: {
    color: 'foreground',
    rounded: 'md'
  }
})

export type SkeletonVariantProps = VariantProps<typeof skeleton>

export { skeleton }
