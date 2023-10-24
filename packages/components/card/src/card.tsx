import { forwardRef } from 'react'

import { ComponentPropsWithoutRef, mapPropsVariants } from '@coelho-ui/shared-utils'
import { CardVariantProps, card } from '@coelho-ui/theme'

export interface CardProps extends ComponentPropsWithoutRef<'div', CardVariantProps> {}

const Card = forwardRef<HTMLDivElement, CardProps>((originalProps, ref) => {
  const [props, variantProps] = mapPropsVariants(originalProps, card.variantKeys)
  const { className, ...rest } = props

  return <div ref={ref} className={card({ ...variantProps, className })} {...rest} />
})

Card.displayName = 'CoelhoUI.Card'

export default Card
