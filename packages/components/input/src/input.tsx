import { ChangeEvent, ComponentPropsWithoutRef, ReactNode, forwardRef, useCallback } from 'react'

import { MergeTypes, mapPropsVariants } from '@coelho-ui/shared-utils'
import { InputSlots, InputVariantProps, SlotsToClasses, input } from '@coelho-ui/theme'

export interface InputProps extends MergeTypes<ComponentPropsWithoutRef<'input'>, InputVariantProps, 'onChange'> {
  label?: string
  startContent?: ReactNode
  endContent?: ReactNode
  description?: string
  error?: string
  classNames?: SlotsToClasses<InputSlots>
  onChange?(value: string): void
}

const Input = forwardRef<HTMLInputElement, InputProps>((originalProps, ref) => {
  const [props, variantProps] = mapPropsVariants(originalProps, input.variantKeys)
  const { label, startContent, endContent, description, error, className, classNames, onChange, ...rest } = props
  const { wrapper, base, label: labelClass, description: descriptionClass, error: errorClass } = input(variantProps)

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value ?? '')
    },
    [onChange]
  )

  const labelContent = label && (
    <label htmlFor={rest.name} className={labelClass({ class: classNames?.label })}>
      {label}
    </label>
  )
  const descriptionContent = error ? (
    <p className={errorClass({ class: classNames?.error })}>{error}</p>
  ) : (
    description && <p className={descriptionClass({ class: classNames?.description })}>{description}</p>
  )

  return (
    <div className={className}>
      {labelContent}
      <div className={wrapper({ class: classNames?.wrapper })}>
        {startContent}
        <input ref={ref} className={base({ class: classNames?.base })} onChange={handleOnChange} {...rest} />
        {endContent}
      </div>
      {descriptionContent}
    </div>
  )
})

Input.displayName = 'CoelhoUI.Input'

export default Input
