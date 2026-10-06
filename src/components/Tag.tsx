import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

/**
 * Monospace technology chip. The Stitch design uses several padding/colour
 * combinations, so callers pass the variant classes explicitly.
 */
export function Tag({ className, children }: { className: string; children: ReactNode }) {
  return <span className={cx('rounded font-mono-code', className)}>{children}</span>
}

export function TagList({
  items,
  className = 'flex flex-wrap gap-2',
  tagClassName,
}: {
  items: readonly string[]
  className?: string
  tagClassName: string
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="contents">
          <Tag className={tagClassName}>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}
