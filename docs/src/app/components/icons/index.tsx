'use client'

import { useState } from 'react'

import * as Icons from '@coelho-ui/icons'
import { Input } from '@coelho-ui/react'
import { tv } from '@coelho-ui/theme'

const icons = Object.values(Icons)
let timeout: NodeJS.Timeout

const icon = tv({
  base: 'space-y-2',
  slots: {
    card: 'flex min-h-[64px] cursor-pointer select-none items-center justify-center rounded-small p-2 shadow-small',
    iconName: 'overflow-hidden text-clip text-center text-tiny'
  },
  variants: {
    selected: {
      true: { card: 'border-2 border-danger bg-danger/10', iconName: 'text-danger' }
    }
  }
})

export function IconsExample() {
  const [search, setSearch] = useState('')
  const [selectedIcon, setSelectedIcon] = useState('')
  const { base, card, iconName } = icon()
  const filteredIcons = icons.filter(icon => icon.name.toLowerCase().includes(search.toLowerCase()))

  const copyToClipboard = (iconName: string) => async () => {
    if (timeout) clearTimeout(timeout)

    await navigator.clipboard.writeText(iconName)
    setSelectedIcon(iconName)

    timeout = setTimeout(() => {
      setSelectedIcon('')
    }, 3000)
  }

  return (
    <div className="space-y-4">
      <Input placeholder="Type to search for an icon..." value={search} onChange={setSearch} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-5">
        {filteredIcons.map((Icon, index) => (
          <div className={base()} key={index}>
            <div className={card({ selected: selectedIcon === Icon.name })} onClick={copyToClipboard(Icon.name)}>
              <Icon size={24} />
            </div>
            <p className={iconName({ selected: selectedIcon === Icon.name })}>{Icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
