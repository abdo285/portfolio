import { cx } from '../lib/cx'

type IconProps = {
  /** Material Symbols ligature name. Must be present in the subset font (see `npm run icons`). */
  name: string
  className?: string
}

export function Icon({ name, className }: IconProps) {
  return (
    <span aria-hidden="true" translate="no" className={cx('material-symbols-outlined', className)}>
      {name}
    </span>
  )
}
