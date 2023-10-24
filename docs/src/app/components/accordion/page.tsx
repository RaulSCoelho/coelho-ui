import { Accordion } from '@coelho-ui/react'

export const metadata = {
  title: 'Accordion'
}

const colors = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'foreground'] as const
const variants = ['flat', 'outlined', 'faded', 'ghost'] as const

export default function Page() {
  return (
    <div className="w-full space-y-4">
      <h1 className="mb-4 text-center text-3xl font-bold">Accordions</h1>
      <div className="grid grid-cols-4 gap-5">
        {colors.map(color =>
          variants.map(variant => (
            <Accordion
              title={`${color}-${variant}`}
              color={color as any}
              variant={variant}
              classNames={{ wrapper: 'capitalize' }}
              key={`${color}-${variant}`}
            >
              <h1 className="text-center text-2xl font-bold">{`${color}-${variant}`}</h1>
            </Accordion>
          ))
        )}
      </div>
    </div>
  )
}
