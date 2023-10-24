import { useCallback, useRef } from 'react'

import { useLayoutEffect } from '@coelho-ui/use-layout-effect'

type EffectEventCallback = (...args: any[]) => any

export function useEffectEvent(fn: EffectEventCallback) {
  const ref = useRef<EffectEventCallback | null>(null)
  useLayoutEffect(() => {
    ref.current = fn
  }, [fn])
  return useCallback((...args: any[]) => {
    const f = ref.current
    return f?.(...args)
  }, [])
}
