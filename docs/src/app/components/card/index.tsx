'use client'

import { useState } from 'react'

import { Card, Option, Select } from '@coelho-ui/react'

function getSelectOptions(arr: any) {
  return arr.map((item: any) => ({ value: item, label: item }))
}

type Card = 'rounded' | 'shadow' | 'variant' | 'isDisabled' | 'color'
const colorOptions = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'foreground'] as const
const variantOptions = ['solid', 'pastel', 'shadow', 'bordered', 'flat', 'faded'] as const
const roundedOptions = ['md', 'sm', 'lg', 'full', 'none'] as const
const shadowOptions = ['md', 'sm', 'lg', 'none'] as const

interface Config {
  color?: (typeof colorOptions)[number]
  variant?: (typeof variantOptions)[number]
  rounded?: (typeof roundedOptions)[number]
  shadow?: (typeof shadowOptions)[number]
  isBlurred?: boolean
  isDisabled?: boolean
}

export function CardExample() {
  const [cardProps, setCardProps] = useState<Config>({})

  function handleCardProps(key: keyof Config, value: Config[keyof Config]) {
    setCardProps(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSelectChange = (key: keyof Config) => (option?: Option) => {
    handleCardProps(key, option?.value as any)
  }

  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Card</h1>
      <div className="space-y-4 text-center">
        <div className="flex justify-center gap-4">
          <Select
            label="color"
            value={cardProps.color}
            options={getSelectOptions(colorOptions)}
            onChange={handleSelectChange('color')}
          />
          <Select
            label="variant"
            value={cardProps.variant}
            options={getSelectOptions(variantOptions)}
            onChange={handleSelectChange('variant')}
          />
          <Select
            label="rounded"
            value={cardProps.rounded}
            options={getSelectOptions(roundedOptions)}
            onChange={handleSelectChange('rounded')}
          />
          <Select
            label="shadow"
            value={cardProps.shadow}
            options={getSelectOptions(shadowOptions)}
            onChange={handleSelectChange('shadow')}
          />
          <div className="flex flex-col">
            <label>isBlurred</label>
            <input type="checkbox" onChange={e => handleCardProps('isBlurred', e.target.checked)} />
          </div>
          <div className="flex flex-col">
            <label>isDisabled</label>
            <input type="checkbox" onChange={e => handleCardProps('isDisabled', e.target.checked)} />
          </div>
        </div>
        <div className="relative h-[10rem] overflow-auto rounded-medium bg-gradient-to-r from-info via-primary to-secondary scrollbar-hide">
          <div className="sticky top-4 z-[1] flex justify-center">
            <Card className="h-32 w-[calc(100%_-_4rem)] items-center justify-center p-4" {...cardProps}>
              Card Component
            </Card>
          </div>
          <div className="absolute inset-0 h-screen overflow-auto bg-[url('/logo.png')] bg-repeat"></div>
        </div>
      </div>
    </div>
  )
}
