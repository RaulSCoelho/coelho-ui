import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { modal } from '@coelho-ui/theme'

export interface ModalFooterProps extends ComponentPropsWithoutRef<'footer'> {}

const ModalFooter = forwardRef<HTMLElement, ModalFooterProps>((props, ref) => {
  const { children, className, ...rest } = props
  const { footer } = modal()

  return (
    <footer ref={ref} className={footer({ className })} {...rest}>
      {children}
    </footer>
  )
})

ModalFooter.displayName = 'CoelhoUI.ModalFooter'

export default ModalFooter
