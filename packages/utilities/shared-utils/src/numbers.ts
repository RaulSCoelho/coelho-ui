/**
 * Returns an array of numbers, starting at `start` and ending at `end`.
 * @param start number
 * @param end number
 * @returns number[]
 */
export function range(start: number, end: number) {
  const length = end - start + 1

  return Array.from({ length }, (_, index) => index + start)
}

export function clamp(number: number, min: number = -Infinity, max: number = Infinity) {
  return Math.min(max, Math.max(min, number))
}

export function clampPercentage(value: number, max: number = 100) {
  return clamp(value, 0, max)
}
