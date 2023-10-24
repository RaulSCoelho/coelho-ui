export function getElementHeight(element?: HTMLElement | ChildNode | null): number {
  if (element instanceof HTMLElement) {
    const { marginTop, marginBottom } = getComputedStyle(element)
    return element.offsetHeight + parseFloat(marginTop) + parseFloat(marginBottom)
  }
  return 0
}

export function getElementWidth(element?: HTMLElement | ChildNode | null): number {
  if (element instanceof HTMLElement) {
    const { marginLeft, marginRight } = getComputedStyle(element)
    return element.offsetWidth + parseFloat(marginLeft) + parseFloat(marginRight)
  }
  return 0
}

export function getMaxElementHeight(elements?: NodeListOf<ChildNode> | null) {
  if (!elements) return 0

  return Array.from(elements).reduce((maxHeight, element) => {
    return Math.max(maxHeight, getElementHeight(element))
  }, 0)
}
