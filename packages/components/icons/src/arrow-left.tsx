import { IconSvgProps } from './types'

export const ArrowLeftIcon = ({
  size = '1em',
  width,
  height,
  fill = 'none',
  viewBox = '0 0 24 24',
  strokeWidth = 1.5,
  ...rest
}: IconSvgProps) => (
  <svg height={size || height} width={size || width} fill={fill} viewBox={viewBox} {...rest}>
    <path
      d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
    />
    <path
      d="M20.5 12H3.67004"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
    />
  </svg>
)
