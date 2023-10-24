import { forwardRef } from 'react'

import { Alert, AlertProps } from '@coelho-ui/alert'
import { mapPropsVariants } from '@coelho-ui/shared-utils'
import { ToastVariantProps, toast } from '@coelho-ui/theme'
import { useTimeout } from '@coelho-ui/use-timeout'
import { motion } from 'framer-motion'

import { getTranslate } from './utils'

export interface ToastProps extends ToastVariantProps, Omit<AlertProps, 'onClose'> {
  id: string
  duration?: number
  onClose(id: string): void
}

const Toast = forwardRef<HTMLDivElement, ToastProps>((originalProps, ref) => {
  const [props, variantProps] = mapPropsVariants(originalProps, toast.variantKeys)
  const { duration = 6000, classNames = {}, onClose, ...rest } = props
  const { base } = toast(variantProps)
  classNames.base = base({ className: classNames.base })

  function handleClose() {
    onClose(rest.id)
  }

  useTimeout(handleClose, duration)

  return (
    <motion.div
      animate="enter"
      initial="exit"
      exit="exit"
      variants={{
        enter: { translate: '0' },
        exit: { translate: getTranslate(variantProps.position) }
      }}
    >
      <Alert ref={ref} classNames={classNames} onClose={handleClose} {...rest} />
    </motion.div>
  )
})

Toast.displayName = 'CoelhoUI.Toast'

export default Toast
