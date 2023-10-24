import { Alert } from '@coelho-ui/react'

export const metadata = {
  title: 'Alert'
}

const colors = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'foreground'] as const
const variants = ['pastel', 'flat', 'outlined', 'faded'] as const

export default function Page() {
  return (
    <div className="w-full space-y-4">
      <h1 className="mb-4 text-center text-3xl font-bold">Alerts</h1>
      <div className="grid grid-cols-4 gap-5">
        {colors.map(color =>
          variants.map(variant => (
            <Alert
              message={`${color} ${variant}`}
              color={color as any}
              variant={variant}
              className="capitalize"
              key={`${color}-${variant}`}
            />
          ))
        )}
      </div>
    </div>
  )
}
