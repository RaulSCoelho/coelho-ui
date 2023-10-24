import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { modal } from '@coelho-ui/theme'

export interface ModalBodyProps extends ComponentPropsWithoutRef<'div'> {}

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>((props, ref) => {
  const { children, className, ...rest } = props
  const { body } = modal()

  return (
    <div ref={ref} className={body({ className })} {...rest}>
      {children}
    </div>
  )
})

ModalBody.displayName = 'CoelhoUI.ModalBody'

export default ModalBody
