import React, { useCallback, useState } from 'react'

import { uniqueID } from '@coelho-ui/shared-utils'

export type RippleType = {
  key: string
  top: number
  left: number
  size: number
}

export interface UseRippleProps {}

export function useRipple(props: UseRippleProps = {}) {
  const [ripples, setRipples] = useState<RippleType[]>([])

  const onClick = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const trigger = event.currentTarget

    const rect = trigger.getBoundingClientRect()
    const top = Math.abs(event.clientY - rect.top)
    const right = Math.abs(event.clientX - rect.right)
    const bottom = Math.abs(event.clientY - rect.bottom)
    const left = Math.abs(event.clientX - rect.left)
    const hypotenuse = Math.sqrt(Math.max(top, bottom) ** 2 + Math.max(right, left) ** 2)
    const size = Math.max(top, right, bottom, left, hypotenuse) * 2

    setRipples(prevRipples => [
      ...prevRipples,
      {
        key: uniqueID(prevRipples.length.toString()),
        top,
        left,
        size
      }
    ])
  }, [])

  const onClear = useCallback((key: React.Key) => {
    setRipples(prevState => prevState.filter(ripple => ripple.key !== key))
  }, [])

  return { ripples, onClick, onClear, ...props }
}

export type UseRippleReturn = ReturnType<typeof useRipple>
