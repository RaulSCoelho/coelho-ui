import { CSSProperties } from 'react'

export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T

type Variant = {
  [key: StringToBoolean<string> | number | symbol]: {
    [key: StringToBoolean<string> | number | symbol]: CSSProperties
  }
}

type VariantSelection<T extends Variant, K extends keyof T = keyof T> = { [key in K]?: StringToBoolean<keyof T[key]> }

type CompoundVariant<T extends Variant, K extends keyof T = keyof T> = {
  [key in K]?: keyof T[key] | (keyof T[key])[]
} & {
  style: CSSProperties
}

type StyleVariantsProps<T extends Variant> = {
  base?: CSSProperties
  variants?: T
  compoundVariants?: CompoundVariant<T>[]
  defaultVariants?: VariantSelection<T>
}

type StyleVariantsReturn<T extends Variant> = (values?: VariantSelection<T>) => CSSProperties

export const styleVariants =
  <T extends Variant, K extends keyof T>({
    base,
    variants,
    compoundVariants = [],
    defaultVariants = {}
  }: StyleVariantsProps<T>): StyleVariantsReturn<T> =>
  (values = {}) => {
    const style: CSSProperties = { ...base }

    if (!variants) return style

    for (const key in { ...values, ...defaultVariants }) {
      const variant = variants[key]
      const value = values[key] || defaultVariants[key]

      if (value && variant[value]) {
        Object.assign(style, variant[value])
      }
    }

    for (const compoundVariant of compoundVariants) {
      for (const key in compoundVariant) {
        if (key === 'style') continue
        const compoundValue = compoundVariant[key as K] as any
        const compoundValueArray: (keyof T[K])[] = typeof compoundValue === 'string' ? [compoundValue] : compoundValue
        const value = values[key as K] || defaultVariants[key as K]

        if (value && compoundValueArray.includes(value)) {
          Object.assign(style, compoundVariant.style)
        }
      }
    }

    return style
  }

export const mapPropsVariants = <T extends Record<string, any>, K extends keyof T>(
  props: T,
  variantKeys?: K[],
  removeVariantProps = true
): readonly [Omit<T, K> | T, Pick<T, K>] => {
  if (!variantKeys) {
    return [props, {}] as any
  }

  const result = Object.keys(props).reduce(
    (acc, key) => {
      const includes = variantKeys.includes(key as K)
      const shouldAddToFirstArray = !removeVariantProps || !includes

      // Only include the key in `picked` if it exists in `props`
      if (includes) acc[1][key as K] = props[key]
      // Remove keys that are in variantKeys
      if (shouldAddToFirstArray) acc[0][key as K] = props[key]

      return acc
    },
    [{}, {}] as [T, T]
  )

  return removeVariantProps ? (result as [Omit<T, K>, Pick<T, K>]) : (result as [T, Pick<T, K>])
}

export const mapPropsVariantsWithCommon = <P extends Record<any, any>, VK extends keyof P, CK extends keyof P = never>(
  originalProps: P,
  variantKeys: VK[],
  commonKeys?: CK[]
) => {
  const props = Object.keys(originalProps)
    .filter(key => !variantKeys.includes(key as VK) || commonKeys?.includes(key as CK))
    .reduce((acc, key) => ({ ...acc, [key]: originalProps[key as keyof P] }), {}) as Omit<P, Exclude<VK, CK>>

  const variants = variantKeys.reduce((acc, key) => ({ ...acc, [key]: originalProps[key] }), {}) as Pick<P, VK>

  return [props, variants] as const
}
