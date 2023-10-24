import { Key } from 'react'

import { isObject } from './assertion'

export function groupBy<T extends { [key: string]: any }, K extends keyof T>(
  array: T[],
  key: K,
  initialValue: { [key in T[K]]?: T[] } = {},
  defaultKey?: T[K]
): { [key in T[K]]?: T[] } {
  return array.reduce((acc, value) => {
    const keyValue = value[key] || defaultKey!
    acc[keyValue] = acc[keyValue] ?? []
    acc[keyValue]?.push(value)
    return acc
  }, initialValue)
}

// copy an object without reference
export const copyObject = (obj: any) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]

  return { ...obj }
}

export const renameProp = (oldProp: string, newProp: string, { [oldProp]: old, ...others }) => ({
  [newProp]: old,
  ...others
})

// copy an object omit some keys
export const omitObject = (obj: any, omitKeys: string[]) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]
  const newObj = { ...obj }

  omitKeys.forEach(key => newObj[key] && delete newObj[key])

  return newObj
}

// clean undefined and null values
export const cleanObject = (obj: any) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]
  const newObj = { ...obj }

  Object.keys(newObj).forEach(key => {
    if (newObj[key] === undefined || newObj[key] === null) {
      delete newObj[key]
    }
  })

  return newObj
}

export const cleanObjectKeys = (obj: any, keys: string[] = []) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]
  const newObj = { ...obj }

  keys.forEach(key => {
    if (newObj[key]) {
      delete newObj[key]
    }
  })

  return newObj
}

export const getKeyValue = (obj: any, key: Key) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]

  return obj[key as any]
}

/**
 * Get value from a deeply nested object using a string path.
 * Memorizes the value.
 * @param obj - the object
 * @param path - the string path
 * @param fallback  - the fallback value
 */
export const getProp = (obj: Record<string, any>, path: string | number, fallback?: any) => {
  const key = typeof path === 'string' ? path.split('.') : [path]

  for (let i = 0; i < key.length; i++) {
    if (!obj) break
    obj = obj[key[i]]
  }

  return obj === undefined ? fallback : obj
}

/**
 * Converting an array of objects into a single object.
 * @param arr - the array of objects
 * @returns the single object
 */
export const arrayToObject = (arr: any[]) => {
  if (!arr.length || !Array.isArray(arr)) return {}

  return arr.reduce((acc, item) => {
    return { ...acc, ...item }
  }, {})
}

export function compact<T extends Record<any, any>>(object: T) {
  const clone = Object.assign({}, object)

  for (let key in clone) {
    if (clone[key] === undefined) delete clone[key]
  }

  return clone
}

export const toIterator = (obj: any) => {
  return {
    ...obj,
    [Symbol.iterator]: function () {
      const keys = Object.keys(this)
      let index = 0

      return {
        next: () => {
          if (index >= keys.length) {
            return { done: true }
          }
          const key = keys[index]
          const value = this[key]

          index++

          return { value: { key, value }, done: false }
        }
      }
    }
  }
}
