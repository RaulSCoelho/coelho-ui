import { RefObject, SyntheticEvent, useEffect, useRef } from 'react'

import { useEffectEvent } from '@coelho-ui/use-effect-event'

export interface InteractOutsideProps {
  ref: RefObject<Element>
  ignoreRef?: RefObject<Element>
  onInteractOutside?: (e: SyntheticEvent) => void
  onInteractOutsideStart?: (e: SyntheticEvent) => void
  /** Whether the interact outside events should be disabled. */
  isDisabled?: boolean
}

export function useInteractOutside(props: InteractOutsideProps) {
  let { ref, ignoreRef, onInteractOutside, isDisabled, onInteractOutsideStart } = props
  let stateRef = useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  })

  let onPointerDown = useEffectEvent((e: SyntheticEvent) => {
    if (onInteractOutside && isValidEvent(e, ref)) {
      if (onInteractOutsideStart) {
        if (!ignoreRef?.current?.contains(e.target as Node)) {
          onInteractOutsideStart(e)
        }
      }
      stateRef.current.isPointerDown = true
    }
  })

  let triggerInteractOutside = useEffectEvent((e: SyntheticEvent) => {
    if (onInteractOutside) {
      if (!ignoreRef?.current?.contains(e.target as Node)) {
        onInteractOutside(e)
      }
    }
  })

  useEffect(() => {
    let state = stateRef.current
    if (isDisabled) {
      return
    }

    // Use pointer events if available. Otherwise, fall back to mouse and touch events.
    if (typeof PointerEvent !== 'undefined') {
      let onPointerUp = (e: Event) => {
        if (state.isPointerDown && isValidEvent(e, ref)) {
          triggerInteractOutside(e)
        }
        state.isPointerDown = false
      }

      // changing these to capture phase fixed combobox
      document.addEventListener('pointerdown', onPointerDown, true)
      document.addEventListener('pointerup', onPointerUp, true)

      return () => {
        document.removeEventListener('pointerdown', onPointerDown, true)
        document.removeEventListener('pointerup', onPointerUp, true)
      }
    } else {
      let onMouseUp = (e: Event) => {
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false
        } else if (state.isPointerDown && isValidEvent(e, ref)) {
          triggerInteractOutside(e)
        }
        state.isPointerDown = false
      }

      let onTouchEnd = (e: Event) => {
        state.ignoreEmulatedMouseEvents = true
        if (state.isPointerDown && isValidEvent(e, ref)) {
          triggerInteractOutside(e)
        }
        state.isPointerDown = false
      }

      document.addEventListener('mousedown', onPointerDown, true)
      document.addEventListener('mouseup', onMouseUp, true)
      document.addEventListener('touchstart', onPointerDown, true)
      document.addEventListener('touchend', onTouchEnd, true)

      return () => {
        document.removeEventListener('mousedown', onPointerDown, true)
        document.removeEventListener('mouseup', onMouseUp, true)
        document.removeEventListener('touchstart', onPointerDown, true)
        document.removeEventListener('touchend', onTouchEnd, true)
      }
    }
  }, [ref, isDisabled, onPointerDown, triggerInteractOutside])
}

function isValidEvent(event: any, ref: RefObject<Element>) {
  if (event.button > 0) {
    return false
  }

  if (event.target) {
    // if the event target is no longer in the document, ignore
    const ownerDocument = event.target.ownerDocument
    if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) {
      return false
    }

    // If the target is within a top layer element (e.g. toasts), ignore.
    if (event.target.closest('[data-react-aria-top-layer]')) {
      return false
    }
  }

  return ref.current && !ref.current.contains(event.target)
}
