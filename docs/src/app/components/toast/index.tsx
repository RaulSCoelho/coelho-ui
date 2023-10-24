'use client'

import { useState } from 'react'

import { Button, Input, useToast, Select, Option } from '@coelho-ui/react'

const colors = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'foreground'] as const
const variants = ['pastel', 'flat', 'outlined', 'faded'] as const
const positions = ['top', 'top-right', 'top-left', 'bottom', 'bottom-right', 'bottom-left'] as const

interface Config {
  message: string
  color?: (typeof colors)[number]
  variant?: (typeof variants)[number]
  position?: (typeof positions)[number]
  duration?: number
}

export function ToastExample() {
  const [toastProps, setToastProps] = useState<Config>({ message: 'Toast message test' })
  const { toast, closeAll } = useToast()

  function handleToastProps(key: keyof Config, value: Config[keyof Config]) {
    setToastProps(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSelectChange = (key: keyof Config) => (option: Option) => {
    handleToastProps(key, (option?.value as any) || undefined)
  }

  const handleInputChange = (key: keyof Config) => (value?: string | number) => {
    if (key === 'duration' && value) {
      value = isNaN(+value) || +value < 0 ? undefined : +value
    }

    handleToastProps(key, value)
  }

  function handleAdd() {
    toast(toastProps)
  }

  return (
    <div className="w-full space-y-4">
      <h1 className="mb- text-center text-3xl font-bold">Toasts</h1>
      <div className="space-y-4 text-center">
        <div className="flex justify-center gap-4">
          <Select
            label="color"
            value={toastProps.color}
            options={colors.map(color => ({ value: color, label: color }))}
            onChange={handleSelectChange('color')}
          />
          <Select
            label="variant"
            value={toastProps.variant}
            options={variants.map(variant => ({ value: variant, label: variant }))}
            onChange={handleSelectChange('variant')}
          />
          <Select
            label="position"
            value={toastProps.position}
            options={positions.map(position => ({ value: position, label: position }))}
            onChange={handleSelectChange('position')}
          />
          <Input label="duration" type="number" onChange={handleInputChange('duration')} />
          <Input label="message" value={toastProps.message} onChange={handleInputChange('message')} />
        </div>
        <div className="flex gap-4">
          <Button onClick={handleAdd} color={toastProps.color || undefined}>
            Add Toast
          </Button>
          <Button onClick={closeAll}>Close All</Button>
        </div>
      </div>
    </div>
  )
}
