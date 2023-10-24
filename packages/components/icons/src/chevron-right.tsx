import { IconSvgProps } from './types'

export const ChevronRightIcon = ({
  size = '1em',
  width,
  height,
  fill = 'none',
  viewBox = '0 0 24 24',
  stroke = 'currentColor',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  strokeWidth = 1.5,
  ...rest
}: IconSvgProps) => (
  <svg
    height={size || height}
    width={size || width}
    fill={fill}
    viewBox={viewBox}
    stroke={stroke}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    strokeWidth={strokeWidth}
    {...rest}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)
