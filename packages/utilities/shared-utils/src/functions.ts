import { v4 as uuid } from 'uuid'

type Args<T extends Function> = T extends (...args: infer R) => any ? R : never

type AnyFunction<T = any> = (...args: T[]) => any

export function callAllHandlers<T extends (event: any) => void>(...fns: (T | undefined)[]) {
  return function func(event: Args<T>[0]) {
    fns.some(fn => {
      fn?.(event)

      return event?.defaultPrevented
    })
  }
}

export function callAll<T extends AnyFunction>(...fns: (T | undefined)[]) {
  return function mergedFn(arg: Args<T>[0]) {
    fns.forEach(fn => {
      fn?.(arg)
    })
  }
}

export function uniqueID(prefix?: string) {
  const id = uuid()
  return !prefix ? id : `${prefix}-${id}`
}

/**
 * This function removes all event handlers from an object.
 */
export function removeEvents(input: { [key: string]: any }) {
  for (const key in input) {
    if (key.startsWith('on')) {
      delete input[key]
    }
  }

  return input
}
