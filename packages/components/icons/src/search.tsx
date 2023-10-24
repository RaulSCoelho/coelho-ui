import { IconSvgProps } from './types'

export const SearchIcon = ({
  size = '1em',
  width,
  height,
  fill = 'none',
  viewBox = '0 0 24 24',
  ...rest
}: IconSvgProps) => (
  <svg height={size || height} width={size || width} fill={fill} viewBox={viewBox} {...rest}>
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
)
