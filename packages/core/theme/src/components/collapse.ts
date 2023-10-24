import { VariantProps } from 'tailwind-variants'

import { tv } from '../utils/tv'

const collapse = tv({
  base: 'overflow-hidden'
})

export type CollapseVariantProps = VariantProps<typeof collapse>
export type CollapseSlots = keyof ReturnType<typeof collapse>

export { collapse }
