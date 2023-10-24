'use client'

import { ComponentPropsWithoutRef } from 'react'

import { Accordion, components, isActive } from '@coelho-ui/react'
import { tv } from '@coelho-ui/theme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItemProps extends ComponentPropsWithoutRef<typeof Link> {
  title: string
  href: string
}

const menuItem = tv({
  base: 'capitalize',
  variants: {
    isActive: { true: 'font-bold text-focus', false: 'opacity-70 dark:opacity-60' }
  }
})

function MenuItem({ title, href, className, ...rest }: MenuItemProps) {
  const pathname = usePathname()
  const active = isActive(pathname, href, href === '/')

  return (
    <Link href={href} className={menuItem({ isActive: active, className })} {...rest}>
      {title}
    </Link>
  )
}

export function Menu() {
  const menuItems = [{ title: 'Components', href: '/components', subPaths: components }]

  return (
    <div>
      {menuItems.map(({ title, href, subPaths }, i) => (
        <Accordion
          title={title}
          classNames={{
            wrapper: 'w-fit',
            base: 'bg-transparent p-0 text-xl',
            content: 'pl-4'
          }}
          expanded
          key={`${href}-${i}`}
        >
          <ul className="list-inside list-disc">
            {subPaths.map(subPath => (
              <li key={`${href}/${subPath}-${i}`}>
                <MenuItem title={subPath} href={`${href}/${subPath}`} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </div>
  )
}
