import { ReactNode, forwardRef } from 'react'

import { Badge, BadgeProps } from '@coelho-ui/badge'
import { ComponentPropsWithoutRef } from '@coelho-ui/shared-utils'
import { IconButtonVariantProps, iconButton } from '@coelho-ui/theme'

import ButtonBase from './button-base'

export interface IconButtonProps
  extends ComponentPropsWithoutRef<typeof ButtonBase, IconButtonVariantProps, 'children'> {
  icon: ReactNode
  badge?: Pick<BadgeProps, 'content' | 'max' | 'min' | 'size' | 'className'>
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ icon, className, badge = {}, ...rest }, ref) => {
  badge.size = badge.size || 'xs'

  return (
    <ButtonBase ref={ref} className={iconButton({ className })} {...rest}>
      <Badge {...badge}>{icon}</Badge>
    </ButtonBase>
  )
})

IconButton.displayName = 'CoelhoUI.IconButton'

export default IconButton
