import { VariantProps } from 'tailwind-variants'

import { addSlotsToObj, tv } from '../utils/tv'
import { colorCompoundVariants, colorVariants, layoutVariants } from '../variants'

const variants = ['flat', 'outlined', 'faded'] as const
type Variant = {
  [key in (typeof variants)[number]]: string
}

const input = tv({
  slots: {
    wrapper: 'icons-shrink-0 flex w-full items-center gap-1.5 px-3',
    base: 'w-full bg-transparent py-3 leading-tight focus:outline-none',
    label: 'text-tiny mb-1 block text-left font-bold uppercase tracking-wide',
    description: 'text-tiny text-foreground-400 px-1 pt-1',
    error: 'text-tiny text-danger px-1 pt-1'
  },
  variants: {
    variant: {} as Variant,
    color: {} as typeof colorVariants.solid,
    rounded: addSlotsToObj(layoutVariants.rounded, ['wrapper'])
  },
  compoundVariants: [
    ...colorCompoundVariants.flat({ variant: 'flat' }, ['wrapper']),
    ...colorCompoundVariants.bordered({ variant: 'outlined' }, ['wrapper']),
    ...colorCompoundVariants.faded({ variant: 'faded' }, ['wrapper']),
    {
      variant: 'outlined',
      class: { wrapper: 'border-2' }
    }
  ],
  defaultVariants: {
    variant: 'flat',
    color: 'default',
    rounded: 'md'
  }
})

export type InputVariantProps = VariantProps<typeof input>
export type InputSlots = keyof ReturnType<typeof input>

export { input }
