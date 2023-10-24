import { MdAdd, MdMail } from 'react-icons/md'

import { IconButton, Input } from '@coelho-ui/react'

export const metadata = {
  title: 'Input'
}

const colors = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'foreground'] as const
const variants = ['flat', 'outlined', 'faded'] as const

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Inputs</h1>
      <div className="grid grid-cols-3 gap-5">
        {colors.map(color =>
          variants.map(variant => (
            <Input
              label={`${color}-${variant}`}
              color={color}
              variant={variant}
              startContent={<MdMail size={26} className="shrink-0" />}
              endContent={<IconButton icon={<MdAdd size={20} />} ripple={{ color }} />}
              defaultValue="Type your input here..."
              error={color === 'danger' ? 'Some error with nothing important' : undefined}
              description={`Some description with nothing important`}
              key={`${color}-${variant}`}
            />
          ))
        )}
      </div>
    </div>
  )
}
