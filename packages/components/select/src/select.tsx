import { ComponentPropsWithoutRef, ReactNode, forwardRef, useCallback, useState } from 'react'

import { CheckIcon, MdOutlineKeyboardArrowDown } from '@coelho-ui/icons'
import { Popover } from '@coelho-ui/popover'
import { MergeTypes, mapPropsVariants } from '@coelho-ui/shared-utils'
import { SelectSlots, SelectVariantProps, SlotsToClasses, select } from '@coelho-ui/theme'

export type Option = {
  value: string | number | readonly string[] | undefined
  label: string
}

export interface SelectProps
  extends MergeTypes<ComponentPropsWithoutRef<'select'>, SelectVariantProps, 'onChange' | 'isLabelPlaceholder'> {
  options: Option[]
  option?: Option
  label?: string
  startContent?: ReactNode
  endContent?: ReactNode
  description?: string
  error?: string
  classNames?: SlotsToClasses<SelectSlots>
  onChange?(option?: Option): void
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((originalProps, ref) => {
  const [props, variantProps] = mapPropsVariants(
    { ...originalProps, isLabelPlaceholder: undefined },
    select.variantKeys
  )
  const {
    options,
    placeholder = 'Select',
    label,
    startContent,
    endContent,
    description,
    error,
    className,
    classNames,
    onChange,
    ...rest
  } = props
  const {
    wrapper,
    base,
    select: selectClass,
    options: optionsClass,
    option: optionClass,
    optionLabel,
    label: labelClass,
    description: descriptionClass,
    error: errorClass,
    arrow,
    popover
  } = select(variantProps)
  const [open, setOpen] = useState(false)
  const selectedOption = options.find(opt => opt.value === rest.value)

  const handleOnClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleSelect = useCallback(
    (option?: Option) => () => {
      onChange?.(option?.value === selectedOption?.value ? undefined : option)
      handleOnClose()
    },
    [handleOnClose, onChange, selectedOption?.value]
  )

  const labelContent = label && (
    <label htmlFor={rest.name} className={labelClass({ class: classNames?.label })}>
      {label}
    </label>
  )
  const descriptionContent = error ? (
    <p className={errorClass({ className: classNames?.error })}>{error}</p>
  ) : (
    description && <p className={descriptionClass({ className: classNames?.description })}>{description}</p>
  )

  const hiddenSelect = (
    <select ref={ref} style={{ display: 'none' }} {...rest}>
      <option />
      {options.map(({ value }, i) => (
        <option value={value} key={`${value}-${i}`}></option>
      ))}
    </select>
  )

  const selectContent = (
    <Popover
      open={open}
      rounded={variantProps.rounded || 'md'}
      offset={4}
      onClose={handleOnClose}
      className={popover({ class: classNames?.popover })}
      matchTriggerWidth
    >
      {/* TRIGGER */}
      <div className={base({ class: classNames?.base || className })} onClick={() => setOpen(prev => !prev)}>
        {startContent}
        <div className={selectClass({ isLabelPlaceholder: !selectedOption, class: classNames?.select })}>
          {selectedOption?.label || placeholder}
        </div>
        {hiddenSelect}
        {endContent}
        <MdOutlineKeyboardArrowDown size={24} className={arrow({ class: classNames?.arrow })} data-open={open} />
      </div>
      {/* POPOVER CONTENT */}
      <ul className={optionsClass({ class: classNames?.options })}>
        {options.map(({ value, label }, i) => (
          <li key={`${value}-${i}`}>
            <button className={optionClass({ class: classNames?.option })} onClick={handleSelect({ value, label })}>
              <span className={optionLabel({ class: classNames?.optionLabel })}>{label}</span>
              {selectedOption?.value === value && <CheckIcon />}
            </button>
          </li>
        ))}
      </ul>
    </Popover>
  )

  return (
    <div className={wrapper({ class: classNames?.wrapper })}>
      {labelContent}
      {selectContent}
      {descriptionContent}
    </div>
  )
})

Select.displayName = 'CoelhoUI.Select'

export default Select
