import { colorsList } from '../../colors'
import { createObjectFromKeys } from '../../utils/object'
import { colorVariants } from '../colors'

type Variants = Record<string, string>

function generateColorCompoundVariants(variants: Variants = {}, type: keyof typeof colorVariants, slots?: string[]) {
  return colorsList.map(color => ({
    ...variants,
    color,
    class: slots ? createObjectFromKeys(slots, colorVariants[type][color]) : colorVariants[type][color]
  }))
}

const createGenerator =
  (type: keyof typeof colorVariants) =>
  (variants: Variants = {}, slots?: string[]) =>
    generateColorCompoundVariants(variants, type, slots)

const text = createGenerator('text')
const solid = createGenerator('solid')
const pastel = createGenerator('pastel')
const shadow = createGenerator('shadow')
const bordered = createGenerator('bordered')
const flat = createGenerator('flat')
const faded = createGenerator('faded')
const light = createGenerator('light')
const ghost = createGenerator('ghost')

export const colorCompoundVariants = {
  text,
  solid,
  pastel,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost
}
