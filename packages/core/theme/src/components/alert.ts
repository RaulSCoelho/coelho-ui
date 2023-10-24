import { VariantProps } from 'tailwind-variants'

import { addSlotsToObj, tv } from '../utils/tv'
import { colorCompoundVariants, colorVariants, layoutVariants } from '../variants'

const variants = ['pastel', 'flat', 'outlined', 'faded'] as const
type Variant = {
  [key in (typeof variants)[number]]: string
}

const alert = tv({
  slots: {
    collapse: '',
    base: 'icons-shrink-0 flex items-center gap-3 p-4',
    icon: 'text-inherit',
    message: 'break-word grow hyphens-auto text-left',
    close: 'cursor-pointer text-inherit'
  },
  variants: {
    variant: {} as Variant,
    color: {} as typeof colorVariants.solid,
    rounded: addSlotsToObj(layoutVariants.rounded, ['base'])
  },
  compoundVariants: [
    ...colorCompoundVariants.flat({ variant: 'flat' }, ['base']),
    ...colorCompoundVariants.bordered({ variant: 'outlined' }, ['base']),
    ...colorCompoundVariants.faded({ variant: 'faded' }, ['base']),
    ...colorCompoundVariants.pastel({ variant: 'pastel' }, ['base']),
    {
      variant: 'outlined',
      class: { base: 'border-2' }
    },
    {
      variant: 'pastel',
      color: 'default',
      class: { icon: 'text-default-600 dark:text-inherit' }
    },
    {
      variant: 'pastel',
      color: 'foreground',
      class: { icon: 'text-foreground-600 dark:text-inherit' }
    },
    {
      variant: 'pastel',
      color: 'primary',
      class: { icon: 'text-primary-600 dark:text-inherit' }
    },
    {
      variant: 'pastel',
      color: 'secondary',
      class: { icon: 'text-secondary-600 dark:text-inherit' }
    },
    {
      variant: 'pastel',
      color: 'success',
      class: { icon: 'text-success-600 dark:text-inherit' }
    },
    {
      variant: 'pastel',
      color: 'danger',
      class: { icon: 'text-danger-600 dark:text-inherit' }
    },
    {
      variant: 'pastel',
      color: 'warning',
      class: { icon: 'text-warning-600 dark:text-inherit' }
    },
    {
      variant: 'pastel',
      color: 'info',
      class: { icon: 'text-info-600 dark:text-inherit' }
    }
  ],
  defaultVariants: {
    variant: 'pastel',
    color: 'primary',
    rounded: 'md'
  }
})

export type AlertVariantProps = VariantProps<typeof alert>
export type AlertSlots = keyof ReturnType<typeof alert>

export { alert }
