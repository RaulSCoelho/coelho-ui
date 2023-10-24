import { SpinnerVariantProps, spinner } from '@coelho-ui/theme'

export interface SpinnerProps extends SpinnerVariantProps {
  size?: number
  className?: string
}

function Spinner({ size = 2.5, color, className }: SpinnerProps) {
  const { base, circle } = spinner({ color })

  return (
    <svg
      className={base({ className })}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        animationDuration: '1.4s',
        color
      }}
      viewBox="22 22 44 44"
    >
      <circle className={circle()} strokeDasharray="80px, 200px" cx="44" cy="44" r="20.2"></circle>
    </svg>
  )
}

Spinner.displayName = 'CoelhoUI.Spinner'

export default Spinner
