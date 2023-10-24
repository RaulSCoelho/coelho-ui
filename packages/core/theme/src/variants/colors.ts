const text = {
  default: 'text-default-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
  foreground: 'text-foreground'
}

const solid = {
  default: 'bg-default text-default-foreground',
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  success: 'bg-success text-success-foreground',
  warning: 'bg-warning text-warning-foreground',
  danger: 'bg-danger text-danger-foreground',
  info: 'bg-info text-info-foreground',
  foreground: 'bg-foreground text-background'
}

const pastel = {
  default: 'bg-default-200 text-foreground',
  primary: 'bg-primary-200 text-foreground',
  secondary: 'bg-secondary-200 text-foreground',
  success: 'bg-success-200 text-foreground',
  warning: 'bg-warning-200 text-foreground',
  danger: 'bg-danger-200 text-foreground',
  info: 'bg-info-200 text-foreground',
  foreground: 'bg-foreground-200 text-foreground'
}

const shadow = {
  default: 'shadow-lg shadow-default/50 bg-default text-default-foreground',
  primary: 'shadow-lg shadow-primary/40 bg-primary text-primary-foreground',
  secondary: 'shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground',
  success: 'shadow-lg shadow-success/40 bg-success text-success-foreground',
  warning: 'shadow-lg shadow-warning/40 bg-warning text-warning-foreground',
  danger: 'shadow-lg shadow-danger/40 bg-danger text-danger-foreground',
  info: 'shadow-lg shadow-info/40 bg-info text-info-foreground',
  foreground: 'shadow-lg shadow-foreground/40 bg-foreground text-background'
}

const bordered = {
  default: 'bg-transparent border-default text-foreground',
  primary: 'bg-transparent border-primary text-primary dark:text-primary-400',
  secondary: 'bg-transparent border-secondary text-secondary dark:text-secondary-400',
  success: 'bg-transparent border-success text-success dark:text-success-400',
  warning: 'bg-transparent border-warning text-warning dark:text-warning-400',
  danger: 'bg-transparent border-danger text-danger dark:text-danger-400',
  info: 'bg-transparent border-info text-info dark:text-info-400',
  foreground: 'bg-transparent border-foreground text-foreground'
}

const flat = {
  default: 'bg-default/40 text-default-foreground',
  primary: 'bg-primary/20 text-primary dark:bg-primary/50 dark:text-primary-400',
  secondary: 'bg-secondary/20 text-secondary dark:bg-secondary/50 dark:text-secondary-400',
  success: 'bg-success/20 text-success-600 dark:bg-success/50 dark:text-success-400',
  warning: 'bg-warning/20 text-warning-600 dark:bg-warning/50 dark:text-warning-400',
  danger: 'bg-danger/20 text-danger dark:bg-danger/50 dark:text-danger-400',
  info: 'bg-info/40 text-info-600 dark:text-info-400',
  foreground: 'bg-foreground/10 text-foreground'
}

const faded = {
  default: 'border-default bg-default-100 text-default-foreground',
  primary: 'border-default bg-default-100 text-primary dark:text-primary-400',
  secondary: 'border-default bg-default-100 text-secondary dark:text-secondary-400',
  success: 'border-default bg-default-100 text-success dark:text-success-400',
  warning: 'border-default bg-default-100 text-warning dark:text-warning-400',
  danger: 'border-default bg-default-100 text-danger dark:text-danger-400',
  info: 'border-default bg-default-100 text-info dark:text-info-400',
  foreground: 'border-default bg-default-100 text-foreground'
}

const light = {
  default: 'bg-transparent text-default-foreground',
  primary: 'bg-transparent text-primary',
  secondary: 'bg-transparent text-secondary',
  success: 'bg-transparent text-success',
  warning: 'bg-transparent text-warning',
  danger: 'bg-transparent text-danger',
  info: 'bg-transparent text-info',
  foreground: 'bg-transparent text-foreground'
}

const ghost = {
  default: 'border-default text-default-foreground hover:!bg-default',
  primary: 'border-primary text-primary hover:!text-primary-foreground hover:!bg-primary',
  secondary: 'border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary',
  success: 'border-success text-success hover:!text-success-foreground hover:!bg-success',
  warning: 'border-warning text-warning hover:!text-warning-foreground hover:!bg-warning',
  danger: 'border-danger text-danger hover:!text-danger-foreground hover:!bg-danger',
  info: 'border-info text-info hover:!text-info-foreground hover:!bg-info',
  foreground: 'border-foreground text-foreground hover:!bg-foreground hover:!text-background'
}

export const colorVariants = {
  text,
  solid,
  pastel,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost
}
