import { IconSvgProps } from '../types'

export const ChevronCircleTopLinearIcon = ({
  size = '1em',
  width,
  height,
  fill = 'none',
  viewBox = '0 0 24 24',
  ...rest
}: IconSvgProps) => (
  <svg height={size || height} width={size || width} fill={fill} viewBox={viewBox} {...rest}>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M8.46997 13.26L12 9.73999L15.53 13.26"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
)
