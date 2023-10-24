import { IconSvgProps } from './types'

export const InfoIcon = ({
  size = '1em',
  width,
  height,
  fill = 'none',
  viewBox = '0 0 24 24',
  ...rest
}: IconSvgProps) => (
  <svg height={size || height} width={size || width} fill={fill} viewBox={viewBox} {...rest}>
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path d="M12 8V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M11.9945 16H12.0035" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
)
