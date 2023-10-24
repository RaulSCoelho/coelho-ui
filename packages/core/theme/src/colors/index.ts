import { commonColors } from './common'
import { semanticColors } from './semantic'

export * from './types'

const colorsList = ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'foreground'] as const

const colors = {
  ...commonColors,
  ...semanticColors
}

export { colorsList, colors, commonColors, semanticColors }
