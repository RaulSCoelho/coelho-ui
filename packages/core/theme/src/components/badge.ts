import { VariantProps } from 'tailwind-variants'

import { tv, addSlotsToObj } from '../utils/tv'
import { colorVariants } from '../variants'

const badge = tv({
  slots: {
    wrapper: 'relative h-fit w-fit',
    base: 'absolute flex -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full px-[4px]'
  },
  variants: {
    color: addSlotsToObj(colorVariants.solid, ['base']),
    size: {
      xs: { base: 'h-[15px] min-w-[15px] text-[.7rem]' },
      sm: { base: 'h-[20px] min-w-[20px] text-xs' },
      md: { base: 'h-[25px] min-w-[25px] text-sm' },
      lg: { base: 'text-md h-[30px] min-w-[30px]' }
    },
    variant: {
      standard: {},
      dot: { base: 'h-2 w-2 min-w-0' }
    },
    overlap: {
      standard: { base: 'right-0 top-0' },
      circular: { base: 'right-[14%] top-[14%]' }
    }
  },
  defaultVariants: {
    variant: 'standard',
    color: 'primary',
    overlap: 'standard',
    size: 'sm'
  }
})

export type BadgeVariantProps = VariantProps<typeof badge>
export type BadgeSlots = keyof ReturnType<typeof badge>

export { badge }
