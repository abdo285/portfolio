import { site } from '../content/site'
import { Icon } from './Icon'

const links = [
  { label: 'GitHub', icon: 'terminal', href: site.github.href, external: true },
  { label: 'LinkedIn', icon: 'share', href: site.linkedin.href, external: true },
  { label: 'Email', icon: 'mail', href: `mailto:${site.footerEmail}`, external: false },
]

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20 py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-sm text-headline-sm text-on-surface">{site.name}</span>
            <span aria-hidden="true" className="text-outline">
              |
            </span>
            <span className="font-mono-code text-mono-code text-on-surface-variant">{site.role}</span>
          </div>
          <p className="font-mono-code text-mono-code text-outline">
            © {new Date().getFullYear()} {site.name} · Engineered for business impact
          </p>
        </div>
        <nav aria-label="Social" className="flex items-center gap-space-lg">
          {links.map((link) => (
            <a
              key={link.label}
              className="font-label-ui text-label-ui text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon name={link.icon} className="text-[16px]" />
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
