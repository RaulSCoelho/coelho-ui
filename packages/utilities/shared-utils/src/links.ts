export const isActive = (pathname: string | undefined | null, href: string, exact: boolean = false) =>
  exact ? pathname === href : pathname?.startsWith(href)
