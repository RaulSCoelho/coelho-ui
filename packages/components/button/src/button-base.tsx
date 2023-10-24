import { MouseEvent, forwardRef } from 'react'

import { Ripple, RippleProps, useRipple } from '@coelho-ui/ripple'
import { ComponentPropsWithoutRef } from '@coelho-ui/shared-utils'
import { Spinner } from '@coelho-ui/spinner'
import { ButtonBaseVariantProps, buttonBase } from '@coelho-ui/theme'

export interface ButtonBaseProps extends ComponentPropsWithoutRef<'button', ButtonBaseVariantProps> {
  loading?: boolean
  readOnly?: boolean
  ripple?: {
    color?: RippleProps['color']
    foreground?: boolean
  }
  disableRipple?: boolean
}

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ children, loading, readOnly, ripple, disableRipple, type = 'button', className, onClick, ...rest }, ref) => {
    const { ripples, onClick: addRipple, onClear: removeRipple } = useRipple()
    const { base, spinner, ripple: rippleClass } = buttonBase()

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
      if (!disableRipple) addRipple(e)
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={base({ className })}
        disabled={readOnly || loading}
        type={type}
        {...rest}
      >
        {children}
        {loading && (
          <div className={spinner()}>
            <Spinner />
          </div>
        )}
        {ripples.length > 0 && (
          <Ripple
            ripples={ripples}
            classNames={{ wrapper: rippleClass() }}
            color={ripple?.color}
            foreground={ripple?.foreground}
            onClear={removeRipple}
          />
        )}
      </button>
    )
  }
)

ButtonBase.displayName = 'CoelhoUI.ButtonBase'

export default ButtonBase
