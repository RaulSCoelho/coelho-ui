import { ForwardRefExoticComponent, ReactNode, RefAttributes, forwardRef, useCallback, useRef } from 'react'

import { TRANSITION_VARIANTS } from '@coelho-ui/framer-transitions'
import { CloseIcon } from '@coelho-ui/icons'
import { ComponentPropsWithoutRef, mapPropsVariants } from '@coelho-ui/shared-utils'
import { ModalSlots, ModalVariantProps, SlotsToClasses, modal } from '@coelho-ui/theme'
import { useInteractOutside } from '@coelho-ui/use-interact-outside'
import { AnimatePresence, motion } from 'framer-motion'

import ModalBody from './modal-body'
import ModalFooter from './modal-footer'
import ModalHeader from './modal-header'

export interface ModalProps extends ComponentPropsWithoutRef<typeof motion.div, ModalVariantProps> {
  children: ReactNode
  open: boolean
  onClose(): void
  hideCloseButton?: boolean
  disableInteractOutside?: boolean
  classNames?: Pick<SlotsToClasses<ModalSlots>, 'backdrop' | 'base' | 'closeButton'>
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(originalProps, ref) {
  const [props, variantProps] = mapPropsVariants(originalProps, modal.variantKeys)
  const { children, open, onClose, hideCloseButton, disableInteractOutside, className, classNames, ...rest } = props
  const { backdrop, base, closeButton } = modal(variantProps)
  const modalContentRef = useRef<HTMLDivElement>(null)

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  useInteractOutside({
    ref: modalContentRef,
    onInteractOutside: handleClose,
    isDisabled: disableInteractOutside
  })

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial="exit"
          animate="enter"
          exit="exit"
          variants={TRANSITION_VARIANTS.fade}
          className={backdrop({ class: classNames?.backdrop })}
          {...rest}
        >
          <div ref={modalContentRef} className={base({ class: classNames?.base || className })}>
            {!hideCloseButton && (
              <button className={closeButton({ class: classNames?.closeButton })} onClick={handleClose}>
                <CloseIcon />
              </button>
            )}
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}) as ModalComponent

interface ModalComponent extends ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>> {
  Header: typeof ModalHeader
  Body: typeof ModalBody
  Footer: typeof ModalFooter
}

Modal.displayName = 'CoelhoUI.Modal'
Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
