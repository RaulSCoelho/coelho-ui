import { IconSvgProps } from './types'

export const ForwardIcon = ({
  size = '1em',
  width,
  height,
  fill = 'none',
  viewBox = '0 0 24 24',
  shapeRendering = 'geometricPrecision',
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
    shapeRendering={shapeRendering}
    stroke={stroke}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    strokeWidth={strokeWidth}
    {...rest}
  >
    <path d="M13 17l5-5-5-5" />
    <path d="M6 17l5-5-5-5" />
  </svg>
)
