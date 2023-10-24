import { Fragment } from 'react'

import { Button } from '@coelho-ui/react'

export const metadata = {
  title: 'Button'
}

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Buttons</h1>
      <div className="grid grid-cols-3 gap-5">
        {['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'foreground'].map((color, i) => (
          <Fragment key={i}>
            <Button variant="contained" color={color as any}>
              Button
            </Button>
            <Button variant="outlined" color={color as any}>
              Button
            </Button>
            <Button variant="text" color={color as any}>
              Button
            </Button>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
