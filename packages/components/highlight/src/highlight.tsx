import { findMatches, isArray, removeAccents } from '@coelho-ui/shared-utils'

import HighlightWrapper, { Wrapper } from './highlight-wrapper'

export type Search =
  | {
      text: string
      wrapper?: Wrapper
    }
  | string

export interface HighlightProps {
  children: string
  search: Search | Search[]
  wrapper?: Wrapper
}

export function Highlight({ children, search, wrapper }: HighlightProps) {
  const searchArray = isArray(search) ? search : [search]
  const searchStrings = searchArray.map(s => (typeof s === 'string' ? s : s.text))
  const matches = findMatches(children, searchStrings)

  if (!matches || matches.length === 0) {
    return children
  }

  return (
    <>
      {matches.map(({ from, to, match }, i) => {
        const text = children.substring(from, to)
        const textSearch = searchArray.find(
          s =>
            removeAccents(typeof s === 'string' ? s : s.text).toLocaleLowerCase() ===
            removeAccents(text).toLocaleLowerCase()
        )
        let CustomWrapper = wrapper
        if (typeof textSearch === 'object') {
          CustomWrapper = textSearch.wrapper
        }

        return match ? (
          <HighlightWrapper wrapper={CustomWrapper} key={i}>
            {text}
          </HighlightWrapper>
        ) : (
          text
        )
      })}
    </>
  )
}

Highlight.displayName = 'CoelhoUI.Highlight'

export default Highlight
