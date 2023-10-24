import { MdMail } from 'react-icons/md'

import { Badge } from '@coelho-ui/react'

export const metadata = {
  title: 'Badge'
}

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Badges</h1>
      <div className="grid grid-cols-3 justify-items-center gap-5">
        <Badge content={100} max={99}>
          <MdMail size={32} className="text-foreground-400" />
        </Badge>
        <Badge variant="dot">
          <MdMail size={32} className="text-foreground-400" />
        </Badge>
        <Badge variant="dot" overlap="circular">
          <div className="h-8 w-8 rounded-full bg-foreground-400"></div>
        </Badge>
      </div>
    </div>
  )
}
