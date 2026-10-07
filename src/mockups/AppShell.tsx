import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import { type MockTheme, themeStyle } from './themes'

function Logo({ theme, className }: { theme: MockTheme; className?: string }) {
  if (theme.wordmark) {
    return (
      <span className={cx('text-[22px] font-bold tracking-tight', className)}>
        <span style={{ color: theme.wordmark.leadColor }}>{theme.wordmark.lead}</span>
        {theme.wordmark.rest}
      </span>
    )
  }
  const image = <img src={theme.logo} alt="" className={cx('w-auto object-contain', theme.logoClass)} />
  return theme.logoChip ? <span className="bg-white rounded-lg p-1 inline-flex">{image}</span> : image
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

/** Fixed-size product UI frame used to render project screenshots (see scripts/capture-covers.mjs). */
export function AppShell({
  theme,
  nav,
  active,
  user,
  title,
  subtitle,
  actions,
  dir = 'ltr',
  children,
}: {
  theme: MockTheme
  nav: string[]
  active: string
  user: string
  title: string
  subtitle: string
  actions?: ReactNode
  dir?: 'ltr' | 'rtl'
  children: ReactNode
}) {
  const { sidebar, header } = theme
  const sidebarBorder = sidebar.border ? { [dir === 'rtl' ? 'borderLeft' : 'borderRight']: `1px solid ${sidebar.border}` } : {}
  return (
    <div
      dir={dir}
      className="w-[1280px] h-[800px] flex bg-surface text-on-surface overflow-hidden font-body-md"
      style={{ ...themeStyle(theme), fontFamily: 'var(--m-font)' }}
    >
      <aside
        className={cx('shrink-0 flex flex-col', theme.rail ? 'w-[68px] items-center' : 'w-56')}
        style={{ background: sidebar.bg, color: sidebar.text, ...sidebarBorder }}
      >
        {theme.rail ? (
          <>
            <div className="h-16 flex items-center justify-center">
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[13px] font-bold"
                style={{ background: sidebar.activeBg, color: sidebar.activeText }}
              >
                {initials(theme.brand)}
              </span>
            </div>
            <nav className="pt-4 space-y-2 flex-1 flex flex-col items-center">
              {nav.map((item) => (
                <div
                  key={item}
                  title={item}
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={item === active ? { background: sidebar.activeBg } : undefined}
                >
                  <span
                    className="w-4 h-4 rounded-[4px] border-2"
                    style={{ borderColor: item === active ? sidebar.activeText : sidebar.muted }}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </nav>
            <span
              className="w-9 h-9 mb-4 rounded-[999px] flex items-center justify-center text-[11px] font-semibold"
              style={{ background: sidebar.activeBg, color: sidebar.activeText }}
            >
              {initials(user)}
            </span>
          </>
        ) : (
          <>
            <div className="h-20 px-5 flex items-center">
              {theme.logoPlacement === 'sidebar' ? (
                <Logo theme={theme} />
              ) : (
                <span className="text-[15px] font-bold" style={{ color: sidebar.activeBg }}>
                  {theme.brand}
                </span>
              )}
            </div>
            <nav className="px-3 pt-2 space-y-1 flex-1">
              {nav.map((item) => (
                <div
                  key={item}
                  className={cx('px-3 py-2 rounded-lg text-[13px] flex items-center gap-2.5', item === active && 'font-semibold')}
                  style={item === active ? { background: sidebar.activeBg, color: sidebar.activeText } : undefined}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-[999px]"
                    style={{ background: item === active ? sidebar.activeText : sidebar.muted }}
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </nav>
            <div className="p-3 m-3 rounded-xl flex items-center gap-3" style={{ background: 'rgb(255 255 255 / 0.08)' }}>
              <span
                className="w-8 h-8 rounded-[999px] flex items-center justify-center text-[11px] font-semibold"
                style={{ background: sidebar.activeBg, color: sidebar.activeText }}
              >
                {initials(user)}
              </span>
              <div className="min-w-0">
                <div className="text-[12px] font-semibold truncate">{user}</div>
                <div className="text-[10px]" style={{ color: sidebar.muted }}>
                  {dir === 'rtl' ? 'متصل' : 'Signed in'}
                </div>
              </div>
            </div>
          </>
        )}
      </aside>
      <main className="flex-1 min-w-0 flex flex-col">
        <header
          className="h-16 shrink-0 px-6 flex items-center justify-between gap-6"
          style={{ background: header.bg, color: header.text, borderBottom: `1px solid ${header.border}` }}
        >
          <div className="flex items-center gap-5 min-w-0">
            {theme.logoPlacement === 'header' && (
              <>
                <Logo theme={theme} />
                {!theme.rail && <span className="w-px h-7" style={{ background: header.border }} aria-hidden="true" />}
                {theme.rail && (
                  <span className="text-[14px] font-bold whitespace-nowrap" style={{ color: header.text }}>
                    {theme.brand}
                  </span>
                )}
              </>
            )}
            <div
              className="w-72 h-9 rounded-lg px-3 flex items-center text-[12px]"
              style={{ background: header.input, color: header.inputText }}
            >
              {dir === 'rtl' ? 'بحث…' : 'Search…'}
            </div>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-semibold">
            <span className="px-2 py-1 rounded" style={{ background: header.input, color: header.inputText }}>
              EN | ع
            </span>
            <span
              className="w-9 h-9 rounded-[999px] flex items-center justify-center text-[11px]"
              style={{ background: header.input, color: header.text }}
            >
              {initials(user)}
            </span>
          </div>
        </header>
        <div className="px-6 pt-5 pb-4 flex items-end justify-between">
          <div>
            <h1 className="font-headline-md text-[22px] leading-7 font-bold">{title}</h1>
            <p className="text-[12px] text-on-surface-variant mt-0.5">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">{actions}</div>
        </div>
        <div className="flex-1 min-h-0 px-6 pb-6">{children}</div>
      </main>
    </div>
  )
}

export function Panel({
  title,
  meta,
  className,
  children,
}: {
  title?: string
  meta?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      className={cx('bg-surface-container-low rounded-xl p-4 min-h-0 border border-outline-variant/70 shadow-sm', className)}
    >
      {title && (
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[13px] font-bold">{title}</h2>
          {meta && <span className="text-[11px] text-outline">{meta}</span>}
        </div>
      )}
      {children}
    </section>
  )
}

export function Kpi({
  label,
  value,
  note,
  tone = 'text-on-surface',
}: {
  label: string
  value: string
  note: string
  tone?: string
}) {
  return (
    <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/70 shadow-sm">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-outline mb-1">{label}</div>
      <div className={cx('text-[24px] leading-8 font-bold tabular-nums', tone)}>{value}</div>
      <div className="text-[11px] text-on-surface-variant mt-0.5">{note}</div>
    </div>
  )
}

export function Pill({ children, tone }: { children: ReactNode; tone: string }) {
  return <span className={cx('px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap', tone)}>{children}</span>
}

export function Button({ children, primary }: { children: ReactNode; primary?: boolean }) {
  return (
    <span
      className={cx(
        'px-3.5 py-2 rounded-lg text-[12px] font-semibold whitespace-nowrap',
        primary
          ? 'bg-primary-container text-on-primary-container'
          : 'bg-surface-container-low text-on-surface border border-outline-variant',
      )}
    >
      {children}
    </span>
  )
}

export function Bar({ value, tone }: { value: number; tone: string }) {
  return (
    <div className="h-1.5 rounded-[999px] bg-surface-container-highest overflow-hidden">
      <div className={cx('h-full rounded-[999px]', tone)} style={{ width: `${value}%` }} />
    </div>
  )
}
