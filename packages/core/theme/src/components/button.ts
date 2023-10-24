import { VariantProps } from 'tailwind-variants'

import { tv } from '../utils/tv'
import { colorCompoundVariants, colorVariants, layoutVariants } from '../variants'

const buttonBase = tv({
  base: 'relative select-none',
  slots: {
    spinner: 'absolute inset-0 z-[1] flex items-center justify-center rounded p-1 opacity-20',
    ripple: 'absolute inset-0 overflow-hidden rounded-[inherit]'
  }
})

const button = tv({
  base: 'px-4 py-2 focus:outline-none',
  variants: {
    color: {} as typeof colorVariants.solid,
    rounded: layoutVariants.rounded,
    variant: {
      text: 'font-bold',
      contained: 'shadow hover:brightness-90',
      outlined: 'border font-bold shadow'
    },
    readOnly: {
      true: ''
    },
    loading: {
      true: 'text-transparent dark:text-transparent'
    }
  },
  compoundVariants: [
    ...colorCompoundVariants.text({ variant: 'text' }),
    ...colorCompoundVariants.solid({ variant: 'contained' }),
    ...colorCompoundVariants.bordered({ variant: 'outlined' }),
    {
      readOnly: true,
      variant: ['text', 'outlined'],
      class: 'text-gray-400 dark:text-gray-400'
    },
    {
      readOnly: true,
      variant: 'contained',
      class: 'bg-gray-400 text-gray-500 dark:bg-gray-400 dark:text-gray-500'
    },
    {
      readOnly: true,
      variant: 'outlined',
      class: 'border-gray-400 dark:border-gray-400'
    }
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'contained',
    rounded: 'md',
    readOnly: false,
    loading: false
  }
})

const iconButton = tv({
  base: 'relative flex aspect-square items-center justify-center rounded-[50%] bg-gray-500/10 p-1.5'
})

const buttonGroup = tv({
  base: 'inline-flex h-auto items-center justify-center',
  variants: {
    fullWidth: {
      true: 'w-full'
    }
  },
  defaultVariants: {
    fullWidth: false
  }
})

export type ButtonBaseVariantProps = VariantProps<typeof buttonBase>
export type ButtonBaseSlots = keyof ReturnType<typeof buttonBase>

export type ButtonVariantProps = VariantProps<typeof button>
export type ButtonSlots = keyof ReturnType<typeof button>

export type IconButtonVariantProps = VariantProps<typeof iconButton>
export type IconButtonSlots = keyof ReturnType<typeof iconButton>

export type ButtonGroupVariantProps = VariantProps<typeof buttonGroup>
export type ButtonGroupSlots = keyof ReturnType<typeof buttonGroup>

export { buttonBase, button, iconButton, buttonGroup }
