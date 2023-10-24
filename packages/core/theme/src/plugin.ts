import Color from 'color'
import deepMerge from 'deepmerge'
import forEach from 'lodash.foreach'
import get from 'lodash.get'
import kebabCase from 'lodash.kebabcase'
import mapKeys from 'lodash.mapkeys'
import omit from 'lodash.omit'
import plugin from 'tailwindcss/plugin.js'

import { animations } from './animations'
import { semanticColors, commonColors } from './colors'
import { lightLayout, darkLayout, defaultLayout } from './default-layout'
import { ConfigTheme, ConfigThemes, DefaultThemeType, CoelhoUIPluginConfig } from './types'
import { utilities } from './utilities'
import { baseStyles } from './utils/classes'
import { flattenThemeObject } from './utils/object'
import { isBaseTheme } from './utils/theme'

interface Resolved {
  variants: { name: string; definition: string[] }[]
  utilities: Record<string, Record<string, any>>
  colors: Record<
    string,
    ({ opacityValue, opacityVariable }: { opacityValue: string; opacityVariable: string }) => string
  >
}

const DEFAULT_PREFIX = 'coelhoui'

// @internal
const resolveConfig = (themes: ConfigThemes = {}, defaultTheme: DefaultThemeType, prefix: string) => {
  const resolved: Resolved = {
    variants: [],
    utilities: {},
    colors: {}
  }

  forEach(themes, ({ extend, layout, colors }: ConfigTheme, themeName: string) => {
    let cssSelector = `.${themeName},[data-theme="${themeName}"]`
    // if the theme is the default theme, add the selector to the root element
    if (themeName === defaultTheme) {
      cssSelector = `:root,${cssSelector}`
    }

    const scheme = isBaseTheme(themeName) ? themeName : extend

    resolved.utilities[cssSelector] = scheme
      ? {
          'color-scheme': scheme
        }
      : {}

    // resolved.variants
    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`]
    })

    // flatten color definitions
    const flatColors = flattenThemeObject(colors)
    const flatLayout = layout ? mapKeys(layout, (value, key) => kebabCase(key)) : {}

    /**
     * Colors
     */
    forEach(flatColors, (colorValue, colorName) => {
      if (!colorValue) return

      try {
        // const [h, s, l, defaultAlphaValue] = parseToHsla(colorValue);
        const [h, s, l, defaultAlphaValue] = Color(colorValue).hsl().round().array()
        const coelhouiColorVariable = `--${prefix}-${colorName}`
        const coelhouiOpacityVariable = `--${prefix}-${colorName}-opacity`

        // set the css variable in "@layer utilities"
        resolved.utilities[cssSelector]![coelhouiColorVariable] = `${h} ${s}% ${l}%`
        // if an alpha value was provided in the color definition, store it in a css variable
        if (typeof defaultAlphaValue === 'number') {
          resolved.utilities[cssSelector]![coelhouiOpacityVariable] = defaultAlphaValue.toFixed(2)
        }
        // set the dynamic color in tailwind config theme.colors
        resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
          // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
          if (!isNaN(+opacityValue)) {
            return `hsl(var(${coelhouiColorVariable}) / ${opacityValue})`
          }
          // if no opacityValue was provided (=it is not parsable to a number)
          // the coelhouiOpacityVariable should have the priority
          // over the tw class based opacity(e.g. "bg-opacity-90")
          if (opacityVariable) {
            return `hsl(var(${coelhouiColorVariable}) / var(${coelhouiOpacityVariable}, var(${opacityVariable})))`
          }

          return `hsl(var(${coelhouiColorVariable}) / var(${coelhouiOpacityVariable}, 1))`
        }
      } catch (error: any) {
        console.log('error', error?.message)
      }
    })

    /**
     * Layout
     */
    forEach(flatLayout, (value, key) => {
      if (!value) return

      if (typeof value === 'object') {
        forEach(value, (v, k) => {
          const layoutVariable = `--${prefix}-${key}-${k}`
          resolved.utilities[cssSelector]![layoutVariable] = v
        })
      } else {
        const layoutVariable = `--${prefix}-${key}`
        resolved.utilities[cssSelector]![layoutVariable] = value
      }
    })
  })

  return resolved
}

const corePlugin = (
  themes: ConfigThemes = {},
  defaultTheme: DefaultThemeType,
  prefix: string,
  addCommonColors: boolean
) => {
  const resolved = resolveConfig(themes, defaultTheme, prefix)

  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      // add base classNames
      addBase({
        [':root, [data-theme]']: {
          ...baseStyles(prefix)
        }
      })
      // add the css variables to "@layer utilities"
      addUtilities({ ...resolved.utilities, ...utilities })
      // add the theme as variant e.g. "[theme-name]:text-2xl"
      resolved.variants.forEach(variant => {
        addVariant(variant.name, variant.definition)
      })
    },
    {
      theme: {
        extend: {
          colors: {
            ...(addCommonColors ? commonColors : {}),
            ...resolved.colors
          },
          height: {
            divider: `var(--${prefix}-divider-height)`
          },
          fontSize: {
            tiny: [`var(--${prefix}-font-size-tiny)`, `var(--${prefix}-line-height-tiny)`],
            small: [`var(--${prefix}-font-size-small)`, `var(--${prefix}-line-height-small)`],
            medium: [`var(--${prefix}-font-size-medium)`, `var(--${prefix}-line-height-medium)`],
            large: [`var(--${prefix}-font-size-large)`, `var(--${prefix}-line-height-large)`]
          },
          borderRadius: {
            small: `var(--${prefix}-radius-small)`,
            medium: `var(--${prefix}-radius-medium)`,
            large: `var(--${prefix}-radius-large)`
          },
          opacity: {
            disabled: `var(--${prefix}-disabled-opacity)`
          },
          borderWidth: {
            small: `var(--${prefix}-border-width-small)`,
            medium: `var(--${prefix}-border-width-medium)`,
            large: `var(--${prefix}-border-width-large)`,
            1: '1px',
            1.5: '1.5px',
            3: '3px',
            5: '5px'
          },
          boxShadow: {
            small: `var(--${prefix}-box-shadow-small)`,
            medium: `var(--${prefix}-box-shadow-medium)`,
            large: `var(--${prefix}-box-shadow-large)`
          },
          backgroundImage: {
            'stripe-gradient':
              'linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 75%, transparent)'
          },
          transitionTimingFunction: {
            'soft-spring': 'cubic-bezier(0.155, 1.105, 0.295, 1.12)'
          },
          ...animations
        }
      }
    }
  )
}

export const coelhoui = (config: CoelhoUIPluginConfig = {}): ReturnType<typeof plugin> => {
  const {
    themes: themeObject = {},
    defaultTheme = 'light',
    layout: userLayout,
    defaultExtendTheme = 'light',
    prefix: defaultPrefix = DEFAULT_PREFIX,
    addCommonColors = false
  } = config

  const userLightColors = get(themeObject, 'light.colors', {})
  const userDarkColors = get(themeObject, 'dark.colors', {})
  const userLightLayout = get(themeObject, 'light.layout', {})
  const userDarkLayout = get(themeObject, 'dark.layout', {})

  const defaultLayoutObj =
    userLayout && typeof userLayout === 'object' ? deepMerge(defaultLayout, userLayout) : defaultLayout

  const baseLayouts = {
    light: {
      ...defaultLayoutObj,
      ...lightLayout
    },
    dark: {
      ...defaultLayoutObj,
      ...darkLayout
    }
  }

  // get other themes from the config different from light and dark
  let otherThemes = omit(themeObject, ['light', 'dark']) || {}

  forEach(otherThemes, ({ extend, colors, layout }, themeName) => {
    const baseTheme = extend && isBaseTheme(extend) ? extend : defaultExtendTheme

    if (colors && typeof colors === 'object') {
      otherThemes[themeName].colors = deepMerge(semanticColors[baseTheme], colors)
    }
    if (layout && typeof layout === 'object') {
      otherThemes[themeName].layout = deepMerge(extend ? baseLayouts[extend] : defaultLayoutObj, layout)
    }
  })

  const light: ConfigTheme = {
    layout: deepMerge(baseLayouts.light, userLightLayout),
    colors: deepMerge(semanticColors.light, userLightColors)
  }

  const dark = {
    layout: deepMerge(baseLayouts.dark, userDarkLayout),
    colors: deepMerge(semanticColors.dark, userDarkColors)
  }

  const themes = {
    light,
    dark,
    ...otherThemes
  }

  return corePlugin(themes, defaultTheme, defaultPrefix, addCommonColors)
}
