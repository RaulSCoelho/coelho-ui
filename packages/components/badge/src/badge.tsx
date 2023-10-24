import { ReactNode, forwardRef } from 'react'

import { ComponentPropsWithoutRef, mapPropsVariants } from '@coelho-ui/shared-utils'
import { BadgeSlots, BadgeVariantProps, SlotsToClasses, badge } from '@coelho-ui/theme'

export interface BadgeProps extends ComponentPropsWithoutRef<'div', BadgeVariantProps, 'content'> {
  content?: string | number | ReactNode
  max?: number
  min?: number
  classNames?: SlotsToClasses<BadgeSlots>
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>((originalProps, ref) => {
  const [props, variantProps] = mapPropsVariants(originalProps, badge.variantKeys)
  let { children, content, min, max, className, classNames, onClick } = props
  const { wrapper, base } = badge(variantProps)

  let show = (content !== undefined && content !== null) || variantProps.variant === 'dot'
  const contentAsNumber = Number(content)
  const isNumber = !isNaN(contentAsNumber)

  if (isNumber && contentAsNumber < (min ?? -Infinity)) {
    show = false
  } else if (isNumber && contentAsNumber > (max ?? Infinity)) {
    content = max + '+'
  }

  return (
    <div ref={ref} className={wrapper({ class: classNames?.wrapper })}>
      {children}
      {show && (
        <span className={base({ class: classNames?.base || className })} onClick={onClick}>
          {variantProps.variant !== 'dot' && content}
        </span>
      )}
    </div>
  )
})

Badge.displayName = 'CoelhoUI.Badge'

export default Badge
