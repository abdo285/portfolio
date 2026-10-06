import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx('max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop', className)}>{children}</div>
}
