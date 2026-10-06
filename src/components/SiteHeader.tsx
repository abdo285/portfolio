import logo from '../assets/images/logo.png'
import profile from '../assets/images/profile.jpg'
import { navItems, site } from '../content/site'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navItems.map((item) => item.id)

const linkBase = 'px-3 py-1.5 rounded-lg transition-all'
const linkActive = 'bg-surface-container-high text-primary font-semibold'
const linkIdle =
  'text-on-surface-variant font-label-ui text-label-ui hover:text-on-surface hover:bg-surface-container-high'

export function SiteHeader() {
  const active = useActiveSection(sectionIds, 'work')

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-md">
          <a className="flex items-center gap-space-sm group" href="#top">
            <img alt="" className="h-8 w-auto object-contain" src={logo} width={32} height={32} />
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
              {site.name}
            </span>
          </a>
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high/60 border border-outline-variant/40">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
              {site.availability}
            </span>
          </div>
        </div>
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1 bg-surface-container-low/70 p-1 rounded-xl border border-outline-variant/30"
        >
          {navItems.map((item) => {
            const isActive = item.id === active
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`${linkBase} ${isActive ? linkActive : linkIdle}`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
        <div className="flex items-center gap-space-md">
          <a
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-primary-container text-on-primary-container font-label-ui text-label-ui font-semibold shadow-[0_0_16px_rgba(14,165,233,0.25)] hover:bg-primary hover:text-on-primary hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all"
            href="#contact"
          >
            Let&apos;s Work Together
          </a>
          <div className="flex items-center pl-2 border-l border-outline-variant/40">
            <img
              alt={`Portrait of ${site.name}`}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant/60"
              src={profile}
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
