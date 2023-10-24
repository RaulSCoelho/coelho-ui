import { ComponentPropsWithoutRef, ReactNode, forwardRef, useRef, useState, Children, useEffect } from 'react'

import { TRANSITION_VARIANTS } from '@coelho-ui/framer-transitions'
import { mergeRefs } from '@coelho-ui/react-utils'
import { MergeTypes, mapPropsVariants, styleVariants } from '@coelho-ui/shared-utils'
import { PopoverSlots, PopoverVariantProps, SlotsToClasses, popover } from '@coelho-ui/theme'
import { useInteractOutside } from '@coelho-ui/use-interact-outside'
import { useResize } from '@coelho-ui/use-resize'
import { AnimatePresence, motion } from 'framer-motion'

type Position =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'left-start'
  | 'left'
  | 'left-end'

export interface PopoverProps extends MergeTypes<ComponentPropsWithoutRef<typeof motion.div>, PopoverVariantProps> {
  children: ReactNode
  open: boolean
  position?: Position
  offset?: number
  classNames?: SlotsToClasses<PopoverSlots>
  onClose?(): void
  onCloseComplete?(): void
  matchTriggerWidth?: boolean
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((originalProps, ref) => {
  const [props, variantProps] = mapPropsVariants(originalProps, popover.variantKeys)
  const {
    children,
    open,
    position,
    offset = 6,
    classNames,
    onClose,
    onCloseComplete,
    matchTriggerWidth,
    className,
    style,
    ...rest
  } = props
  const { backdrop, base } = popover(variantProps)
  const popoverRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const [triggerRect, setTriggerRect] = useState<DOMRect>()
  const popoverStyle = getPopoverStyle(triggerRect, offset)?.({ position, matchTriggerWidth })

  const [trigger, ...popoverContent] = Children.toArray(children)

  useEffect(() => {
    setTriggerRect(triggerRef.current?.getBoundingClientRect())
  }, [open])

  useResize(() => {
    setTriggerRect(triggerRef.current?.getBoundingClientRect())
  }, true)

  useInteractOutside({ ref: popoverRef, ignoreRef: triggerRef, onInteractOutside: onClose })

  return (
    <>
      <div ref={triggerRef}>{trigger}</div>
      <AnimatePresence onExitComplete={onCloseComplete}>
        {open && (
          <>
            {variantProps.backdrop !== 'transparent' && (
              <motion.div
                animate="enter"
                exit="exit"
                initial="exit"
                variants={TRANSITION_VARIANTS.fade}
                className={backdrop({ class: classNames?.backdrop })}
              />
            )}
            <motion.div
              ref={mergeRefs(popoverRef, ref)}
              animate="enter"
              exit="exit"
              initial="initial"
              variants={TRANSITION_VARIANTS.scaleSpringOpacity}
              className={base({ class: classNames?.base || className })}
              style={{ ...style, ...popoverStyle }}
              {...rest}
            >
              {popoverContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
})

Popover.displayName = 'CoelhoUI.Popover'

export default Popover

function getPopoverStyle(rect?: DOMRect, offset: number = 0) {
  if (!rect) return

  const { top, right, bottom, left, width, height } = rect
  const windowRight = window.innerWidth - right
  const windowBottom = window.innerHeight - bottom
  const midX = left + width / 2
  const midY = top + height / 2

  return styleVariants({
    variants: {
      matchTriggerWidth: {
        true: {
          maxWidth: width,
          minWidth: width
        }
      },
      position: {
        'top-start': {
          left: left,
          transformOrigin: 'bottom left'
        },
        top: {
          left: midX,
          translate: '-50%',
          transformOrigin: 'bottom'
        },
        'top-end': {
          right: windowRight,
          transformOrigin: 'bottom right'
        },
        'right-start': {
          top: top,
          transformOrigin: 'top left'
        },
        right: {
          top: midY,
          translate: '0 -50%',
          transformOrigin: 'left'
        },
        'right-end': {
          bottom: windowBottom,
          transformOrigin: 'bottom left'
        },
        'bottom-start': {
          left: left,
          transformOrigin: 'top left'
        },
        bottom: {
          left: midX,
          translate: '-50%',
          transformOrigin: 'top'
        },
        'bottom-end': {
          right: windowRight,
          transformOrigin: 'top right'
        },
        'left-start': {
          top: top,
          transformOrigin: 'top right'
        },
        left: {
          top: midY,
          translate: '0 -50%',
          transformOrigin: 'right'
        },
        'left-end': {
          bottom: windowBottom,
          transformOrigin: 'bottom right'
        }
      }
    },
    compoundVariants: [
      {
        position: ['top-start', 'top', 'top-end'],
        style: { bottom: windowBottom + height + offset }
      },
      {
        position: ['right-start', 'right', 'right-end'],
        style: { left: right + offset }
      },
      {
        position: ['bottom-start', 'bottom', 'bottom-end'],
        style: { top: bottom + offset }
      },
      {
        position: ['left-start', 'left', 'left-end'],
        style: { right: windowRight + width + offset }
      }
    ],
    defaultVariants: {
      position: 'bottom'
    }
  })
}
