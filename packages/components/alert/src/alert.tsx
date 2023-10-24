import { ReactNode, forwardRef } from 'react'

import { Collapse } from '@coelho-ui/collapse'
import {
  FaRegBell,
  FaTimes,
  IoMdCheckmarkCircleOutline,
  MdErrorOutline,
  MdInfoOutline,
  MdWarningAmber
} from '@coelho-ui/icons'
import { ComponentPropsWithoutRef, mapPropsVariants } from '@coelho-ui/shared-utils'
import { AlertSlots, AlertVariantProps, SlotsToClasses, alert } from '@coelho-ui/theme'

export interface AlertProps extends ComponentPropsWithoutRef<typeof Collapse, AlertVariantProps, 'open'> {
  message: string
  icon?: ReactNode
  hideIcon?: boolean
  classNames?: SlotsToClasses<AlertSlots>
  onClose?(): void
}

const iconMap = {
  default: FaRegBell,
  foreground: FaRegBell,
  primary: FaRegBell,
  secondary: FaRegBell,
  success: IoMdCheckmarkCircleOutline,
  danger: MdErrorOutline,
  warning: MdWarningAmber,
  info: MdInfoOutline
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(originalProps, ref) {
  const [props, variantProps] = mapPropsVariants(originalProps, alert.variantKeys)
  const { message, icon: customIcon, hideIcon, className, classNames, onClose, ...rest } = props
  const Icon = iconMap[variantProps.color || 'primary']
  const { collapse: collapseClass, base, icon, message: msg, close } = alert(variantProps)

  return (
    <Collapse ref={ref} open={!!message} className={collapseClass({ class: classNames?.collapse })} {...rest}>
      <div className={base({ class: classNames?.base || className })}>
        {!hideIcon && (customIcon || <Icon size={22} className={icon({ class: classNames?.icon })} />)}
        <p className={msg({ class: classNames?.message })}>{message}</p>
        {onClose && <FaTimes className={close({ class: classNames?.close })} onClick={onClose} />}
      </div>
    </Collapse>
  )
})

Alert.displayName = 'CoelhoUI.Alert'

export default Alert
