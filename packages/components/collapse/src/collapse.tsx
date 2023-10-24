import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { TRANSITION_VARIANTS } from '@coelho-ui/framer-transitions'
import { MergeTypes } from '@coelho-ui/shared-utils'
import { CollapseVariantProps, collapse } from '@coelho-ui/theme'
import { AnimatePresence, motion } from 'framer-motion'

export interface CollapseProps extends MergeTypes<ComponentPropsWithoutRef<typeof motion.div>, CollapseVariantProps> {
  open: boolean
  animate?: boolean
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>(function Collapse(
  { children, open, animate = true, className, ...rest },
  ref
) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          animate="enter"
          exit="exit"
          initial="exit"
          variants={animate ? TRANSITION_VARIANTS.collapse : undefined}
          className={collapse({ className })}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
})

Collapse.displayName = 'CoelhoUI.Collapse'

export default Collapse
