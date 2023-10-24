import { Key, forwardRef } from 'react'

import { ComponentPropsWithoutRef, mapPropsVariants } from '@coelho-ui/shared-utils'
import { RippleSlots, RippleVariantProps, SlotsToClasses, ripple } from '@coelho-ui/theme'

import { RippleType } from './use-ripple'

export interface RippleProps extends ComponentPropsWithoutRef<'div', RippleVariantProps> {
  ripples: RippleType[]
  onClear: (key: Key) => void
  classNames?: SlotsToClasses<RippleSlots>
}

const Ripple = forwardRef<HTMLDivElement, RippleProps>((originalProps, ref) => {
  const [props, variantProps] = mapPropsVariants(originalProps, ripple.variantKeys)
  const { ripples, onClear, className, classNames, ...rest } = props
  const { wrapper, base } = ripple(variantProps)

  return (
    <div ref={ref} className={wrapper({ class: classNames?.wrapper })} {...rest}>
      {ripples.map(({ key, top, left, size }) => (
        <span
          className={base({ className: classNames?.base || className })}
          style={{
            top: `${top - size / 2}px`,
            left: `${left - size / 2}px`,
            width: `${size}px`,
            height: `${size}px`
          }}
          onAnimationEnd={() => onClear(key)}
          key={key}
        ></span>
      ))}
    </div>
  )
})

Ripple.displayName = 'CoelhoUI.Ripple'

export default Ripple
