import { VariantProps } from 'tailwind-variants'

import { tv } from '../utils/tv'
import { colorVariants } from '../variants'

const highlightWrapper = tv({
  base: 'font-bold',
  variants: {
    color: colorVariants.text
  },
  defaultVariants: {
    color: 'danger'
  }
})

export type HighlightWrapperVariantProps = VariantProps<typeof highlightWrapper>
export type HighlightWrapperSlots = keyof ReturnType<typeof highlightWrapper>

export { highlightWrapper }
