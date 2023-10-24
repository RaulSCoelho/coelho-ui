import { IconSvgProps } from './types'

export const EllipsisIcon = ({
  size = '1em',
  width,
  height,
  fill = 'none',
  viewBox = '0 0 24 24',
  shapeRendering = 'geometricPrecision',
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
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    strokeWidth={strokeWidth}
    {...rest}
  >
    <circle cx="12" cy="12" fill="currentColor" r="1" />
    <circle cx="19" cy="12" fill="currentColor" r="1" />
    <circle cx="5" cy="12" fill="currentColor" r="1" />
  </svg>
)
