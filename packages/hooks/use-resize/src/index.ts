import { useEffect } from 'react'

export function useResize(onResize: (e?: UIEvent) => void, immediatelyInvoke: boolean = true) {
  useEffect(() => {
    if (immediatelyInvoke) {
      onResize()
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
