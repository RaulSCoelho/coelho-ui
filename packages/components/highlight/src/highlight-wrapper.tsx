import { ComponentType } from 'react'

import { highlightWrapper, HighlightWrapperVariantProps } from '@coelho-ui/theme'

export type Wrapper = ComponentType<{ children: string }> | HighlightWrapperVariantProps['color']

export interface HighlightWrapperProps {
  children: string
  wrapper?: Wrapper
}

function HighlightWrapper({ children, wrapper: TextWrapper }: HighlightWrapperProps) {
  return typeof TextWrapper === 'function' ? (
    <TextWrapper>{children}</TextWrapper>
  ) : (
    <span className={highlightWrapper({ color: TextWrapper })}>{children}</span>
  )
}

HighlightWrapper.displayName = 'CoelhoUI.HighlightWrapper'

export default HighlightWrapper
