import { forwardRef } from 'react'

import { ComponentPropsWithoutRef, mapPropsVariants } from '@coelho-ui/shared-utils'
import { SkeletonVariantProps, skeleton } from '@coelho-ui/theme'

export interface SkeletonProps extends ComponentPropsWithoutRef<'span', SkeletonVariantProps> {}

const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>((originalProps, ref) => {
  const [props, variantProps] = mapPropsVariants(originalProps, skeleton.variantKeys)
  const { className, ...rest } = props

  return <span ref={ref} className={skeleton({ ...variantProps, className })} {...rest} />
})

Skeleton.displayName = 'CoelhoUI.Skeleton'

export default Skeleton
