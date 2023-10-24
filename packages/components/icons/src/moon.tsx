import { IconSvgProps } from './types'

export const MoonIcon = ({ size = '1em', width, height, viewBox = '0 0 512 512', ...rest }: IconSvgProps) => (
  <svg height={size || height} width={size || width} viewBox={viewBox} {...rest}>
    <path
      d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </svg>
)
