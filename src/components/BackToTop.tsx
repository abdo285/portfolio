import { useEffect, useState } from 'react'
import { cx } from '../lib/cx'
import { Icon } from './Icon'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={toTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cx(
        'fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-40 w-12 h-12 rounded-[999px] flex items-center justify-center',
        'bg-primary-container text-on-primary-container shadow-lg shadow-black/30 hover:bg-primary hover:text-on-primary',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
        'transition-all duration-300 motion-reduce:transition-none',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <Icon name="arrow_upward" className="text-[22px]" />
    </button>
  )
}
