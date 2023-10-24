import { IconSvgProps } from '../types'

export function MdOutlineKeyboardArrowDown({
  size = '1em',
  width,
  height,
  stroke = 'currentColor',
  fill = 'currentColor',
  strokeWidth = '0',
  viewBox = '0 0 24 24',
  ...rest
}: IconSvgProps) {
  return (
    <svg
      height={size || height}
      width={size || width}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      viewBox={viewBox}
      {...rest}
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
    </svg>
  )
}
