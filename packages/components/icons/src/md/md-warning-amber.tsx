import { IconSvgProps } from '../types'

export function MdWarningAmber({
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
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2z"></path>
      <path d="M13 16h-2v2h2zM13 10h-2v5h2z"></path>
    </svg>
  )
}
