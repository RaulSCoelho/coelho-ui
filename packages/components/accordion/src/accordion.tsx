import { ReactNode, forwardRef, useState } from 'react'

import { Collapse } from '@coelho-ui/collapse'
import { MdOutlineKeyboardArrowDown } from '@coelho-ui/icons'
import { ComponentPropsWithoutRef, mapPropsVariants } from '@coelho-ui/shared-utils'
import { AccordionSlots, AccordionVariantProps, SlotsToClasses, accordion } from '@coelho-ui/theme'

export interface AccordionProps extends ComponentPropsWithoutRef<'div', AccordionVariantProps, 'onChange'> {
  title: string
  icon?: ReactNode
  expanded?: boolean
  controlled?: boolean
  onChange?(open: boolean): void
  classNames?: SlotsToClasses<AccordionSlots>
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((originalProps, ref) => {
  const [props, variantProps] = mapPropsVariants(originalProps, accordion.variantKeys)
  const {
    children,
    title,
    icon,
    expanded = false,
    controlled = false,
    classNames,
    className,
    onChange,
    ...rest
  } = props
  const [isOpen, setIsOpen] = useState(expanded)
  const { wrapper, base, title: titleClass, arrow, content } = accordion(variantProps)
  const open = controlled ? expanded : isOpen

  function toggle() {
    setIsOpen(prev => !prev)
    onChange?.(!open)
  }

  return (
    <div ref={ref} className={wrapper({ class: classNames?.wrapper })} {...rest}>
      <div className={base({ class: classNames?.base || className })} onClick={toggle}>
        <div className={titleClass({ class: classNames?.title })}>
          {icon}
          {title}
        </div>
        <MdOutlineKeyboardArrowDown size={24} className={arrow({ class: classNames?.arrow })} data-open={open} />
      </div>
      <Collapse open={open} className={content({ class: classNames?.content })}>
        {children}
      </Collapse>
    </div>
  )
})

Accordion.displayName = 'CoelhoUI.Accordion'

export default Accordion
