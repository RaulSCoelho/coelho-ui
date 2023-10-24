import { IconSvgProps } from './types'

export const ArrowRightIcon = ({
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
      d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
    />
    <path
      d="M4.08325 14H23.7183"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
    />
  </svg>
)
