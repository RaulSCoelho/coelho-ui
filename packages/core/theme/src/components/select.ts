import { VariantProps } from 'tailwind-variants'

import { addSlotsToObj, tv } from '../utils/tv'
import { colorCompoundVariants, colorVariants, layoutVariants } from '../variants'

const variants = ['flat', 'outlined', 'faded'] as const
type Variant = {
  [key in (typeof variants)[number]]: string
}

const select = tv({
  slots: {
    wrapper: '',
    base: 'icons-shrink-0 flex w-full cursor-pointer items-center gap-1.5 px-3',
    select: 'w-full truncate py-3 leading-tight',
    options: 'scrollbar-hide max-h-64 overflow-y-auto p-1',
    option: 'rounded-small icons-shrink-0 hover:bg-foreground/20 flex w-full items-center gap-2 px-2 py-1.5',
    optionLabel: 'grow truncate text-left',
    label: 'text-tiny mb-1 block text-left font-bold uppercase tracking-wide',
    description: 'text-tiny text-foreground-400 px-1 pt-1',
    error: 'text-tiny text-danger px-1 pt-1',
    arrow: 'transition-transform data-[open=true]:rotate-180',
    popover: 'p-1'
  },
  variants: {
    variant: {} as Variant,
    color: {} as typeof colorVariants.solid,
    rounded: addSlotsToObj(layoutVariants.rounded, ['base']),
    isLabelPlaceholder: {
      true: {
        select: 'opacity-60'
      }
    }
  },
  compoundVariants: [
    ...colorCompoundVariants.flat({ variant: 'flat' }, ['base']),
    ...colorCompoundVariants.bordered({ variant: 'outlined' }, ['base']),
    ...colorCompoundVariants.faded({ variant: 'faded' }, ['base']),
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

export type SelectVariantProps = VariantProps<typeof select>
export type SelectSlots = keyof ReturnType<typeof select>

export { select }
