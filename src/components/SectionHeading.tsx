import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

type Accent = 'primary' | 'secondary'

const eyebrowColor: Record<Accent, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
}

export function Eyebrow({ accent = 'primary', children }: { accent?: Accent; children: ReactNode }) {
  return (
    <span className={cx('font-mono-code text-label-caps uppercase tracking-widest block mb-2', eyebrowColor[accent])}>
      {children}
    </span>
  )
}

type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  accent?: Accent
}

/** The standard "eyebrow / H2 / lead paragraph" block that opens most sections. */
export function SectionHeading({ id, eyebrow, title, lead, accent }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl mb-16">
      <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
      <h2 id={id} className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4">
        {title}
      </h2>
      {lead && <p className="font-body-lg text-body-lg text-on-surface-variant">{lead}</p>}
    </div>
  )
}
