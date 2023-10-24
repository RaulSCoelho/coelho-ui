import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { modal } from '@coelho-ui/theme'

export interface ModalHeaderProps extends ComponentPropsWithoutRef<'header'> {}

const ModalHeader = forwardRef<HTMLElement, ModalHeaderProps>((props, ref) => {
  const { children, className, ...rest } = props
  const { header } = modal()

  return (
    <header ref={ref} className={header({ className })} {...rest}>
      {children}
    </header>
  )
})

ModalHeader.displayName = 'CoelhoUI.ModalHeader'

export default ModalHeader
