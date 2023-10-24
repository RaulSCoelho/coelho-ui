'use client'

import { useState } from 'react'
import { BiSun } from 'react-icons/bi'
import { LuMoonStar } from 'react-icons/lu'
import { TbDeviceDesktop } from 'react-icons/tb'

import { useTheme, Theme, ThemeWithSystem, tv, Popover } from '@coelho-ui/react'

const themes = [
  { theme: 'light', Icon: BiSun },
  { theme: 'dark', Icon: LuMoonStar },
  { theme: 'system', Icon: TbDeviceDesktop }
]

const selectIcon = tv({
  base: 'cursor-pointer text-default-600 dark:text-default-500',
  variants: {
    theme: {
      light: 'text-sky-500 dark:text-sky-500',
      dark: 'text-sky-500 dark:text-sky-500'
    },
    isSystem: {
      true: 'text-default-600 dark:text-default-500'
    }
  }
})

const selectBox = tv({
  base: 'flex cursor-pointer items-center px-2 py-1 font-semibold capitalize hover:bg-slate-600/5 dark:hover:bg-slate-600/30',
  variants: {
    selected: {
      true: 'text-sky-500',
      false: 'text-default-600 hover:text-default-900'
    }
  }
})

export function ThemeSwitcher() {
  const { selected: selectedTheme, system: isSystem, set: setTheme } = useTheme()
  const [selectOpen, setSelectOpen] = useState(false)
  const ThemeIcon = selectedTheme === 'light' ? BiSun : LuMoonStar

  function handleClose() {
    setSelectOpen(false)
  }

  const selectTheme = (theme: ThemeWithSystem) => () => {
    setTheme(theme)
    setSelectOpen(false)
  }

  function isThemeSelected(theme: string) {
    return isSystem ? theme === 'system' : theme === selectedTheme
  }

  return (
    <Popover open={selectOpen} onClose={handleClose} className="p-0" position="bottom-end" offset={10}>
      <ThemeIcon
        size={24}
        className={selectIcon({ theme: selectedTheme as any, isSystem })}
        onClick={() => setSelectOpen(prev => !prev)}
      />
      {themes.map(({ theme, Icon }) => (
        <div
          className={selectBox({ selected: isThemeSelected(theme) })}
          onClick={selectTheme(theme as Theme)}
          key={theme}
        >
          <Icon size={24} className="mr-2" />
          {theme}
        </div>
      ))}
    </Popover>
  )
}
