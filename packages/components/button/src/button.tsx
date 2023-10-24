import { forwardRef } from 'react'

import { ComponentPropsWithoutRef, mapPropsVariants } from '@coelho-ui/shared-utils'
import { ButtonVariantProps, button } from '@coelho-ui/theme'

import ButtonBase from './button-base'

export interface ButtonProps extends ComponentPropsWithoutRef<typeof ButtonBase, ButtonVariantProps> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((originalProps, ref) => {
  const [props, { color = 'primary', variant = 'contained', ...variantProps }] = mapPropsVariants(
    originalProps,
    button.variantKeys
  )
  const { className, ripple = {}, ...rest } = props
  ripple.color = ripple.color || color
  ripple.foreground = ripple.foreground || variant === 'contained'

  return (
    <ButtonBase
      ref={ref}
      className={button({ ...variantProps, color, variant, className })}
      ripple={ripple}
      {...rest}
    />
  )
})

Button.displayName = 'CoelhoUI.Button'

export default Button
