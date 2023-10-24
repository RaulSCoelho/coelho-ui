import { IconSvgProps } from '../types'

export function MdErrorOutline({
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
      <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
    </svg>
  )
}
