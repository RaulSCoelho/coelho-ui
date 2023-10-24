import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { MergeTypes } from '@coelho-ui/shared-utils'
import { ToastVariantProps, toast } from '@coelho-ui/theme'
import { AnimatePresence, motion } from 'framer-motion'

import Toast, { ToastProps } from './toast'
import { getTranslate } from './utils'

export interface ToastWrapperProps extends MergeTypes<ComponentPropsWithoutRef<typeof motion.div>, ToastVariantProps> {
  toasts: ToastProps[]
}

const ToastWrapper = forwardRef<HTMLDivElement, ToastWrapperProps>(
  ({ toasts, position = 'bottom-left', className, ...rest }, ref) => {
    const { wrapper } = toast({ position })

    if (position.includes('top')) {
      toasts.reverse()
    }

    return (
      <motion.div ref={ref} className={wrapper({ className })} exit={{ translate: getTranslate(position) }} {...rest}>
        <AnimatePresence>
          {toasts.map(toast => (
            <Toast key={toast.id} {...toast} />
          ))}
        </AnimatePresence>
      </motion.div>
    )
  }
)

ToastWrapper.displayName = 'CoelhoUI.ToastWrapper'

export default ToastWrapper
