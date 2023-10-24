import { tv as tvBase, TV } from 'tailwind-variants'

import { createObjectFromKeys } from './object'

const COMMON_UNITS = ['small', 'medium', 'large']

type AddSlotsToObjReturn<T> = {
  [K in keyof T]: {
    [key: string]: any
  }
}

export function addSlotsToObj<T extends object>(obj: T, slots: string[]): AddSlotsToObjReturn<T> {
  if (typeof obj !== 'object') return obj

  const newObj: any = { ...obj }
  for (const [key, value] of Object.entries(newObj)) {
    newObj[key] = createObjectFromKeys(slots, value)
  }
  return newObj
}

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
        opacity: ['disabled'],
        borderWidth: COMMON_UNITS,
        borderRadius: COMMON_UNITS
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        shadow: [{ shadow: COMMON_UNITS }],
        'font-size': [{ text: ['tiny', ...COMMON_UNITS] }]
      }
    }
  })
