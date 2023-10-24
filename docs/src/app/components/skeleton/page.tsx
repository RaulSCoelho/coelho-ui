import { Skeleton } from '@coelho-ui/react'

export const metadata = {
  title: 'Skeleton'
}

const colors = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'foreground'] as const

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Skeleton</h1>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-8">
        {colors.map(color => (
          <Skeleton className="aspect-square w-full" color={color} key={color} />
        ))}
      </div>
    </div>
  )
}
