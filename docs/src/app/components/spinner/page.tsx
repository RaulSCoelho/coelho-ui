import { Spinner } from '@coelho-ui/react'

export const metadata = {
  title: 'Spinner'
}

const colors = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'foreground'] as const

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Spinner</h1>
      <div className="grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-4 lg:grid-cols-8">
        {colors.map(color => (
          <Spinner color={color} key={color} />
        ))}
      </div>
    </div>
  )
}
