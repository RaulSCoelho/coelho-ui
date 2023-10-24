import { IconSvgProps } from '../types'

export function MdInfoOutline({
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
      <path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
    </svg>
  )
}
