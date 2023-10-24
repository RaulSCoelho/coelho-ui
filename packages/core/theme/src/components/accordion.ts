import { VariantProps } from 'tailwind-variants'

import { addSlotsToObj, tv } from '../utils/tv'
import { colorCompoundVariants, colorVariants, layoutVariants } from '../variants'

const variants = ['flat', 'outlined', 'faded', 'ghost'] as const
type Variant = {
  [key in (typeof variants)[number]]: string
}

const accordion = tv({
  slots: {
    wrapper: 'icons-shrink-0 h-fit overflow-hidden',
    base: 'text-large flex cursor-pointer items-center justify-between p-3',
    title: 'mr-4 flex gap-4',
    arrow: 'transition-transform data-[open=true]:rotate-180',
    content: ''
  },
  variants: {
    variant: {} as Variant,
    color: {} as typeof colorVariants.solid,
    rounded: addSlotsToObj(layoutVariants.rounded, ['base', 'wrapper'])
  },
  compoundVariants: [
    ...colorCompoundVariants.flat({ variant: 'flat' }, ['base']),
    ...colorCompoundVariants.bordered({ variant: 'outlined' }, ['base']),
    ...colorCompoundVariants.faded({ variant: 'faded' }, ['base']),
    ...colorCompoundVariants.ghost({ variant: 'ghost' }, ['base']),
    {
      variant: 'outlined',
      class: { base: 'border-2' }
    }
  ],
  defaultVariants: {
    variant: 'flat',
    color: 'default',
    rounded: 'md'
  }
})

export type AccordionVariantProps = VariantProps<typeof accordion>
export type AccordionSlots = keyof ReturnType<typeof accordion>

export { accordion }
