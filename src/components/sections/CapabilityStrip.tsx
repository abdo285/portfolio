import { Fragment } from 'react'
import { Container } from '../Container'
import { Icon } from '../Icon'

const metrics = [
  { value: '420+', label: 'Commits Shipped', valueClass: 'text-on-surface' },
  { value: '252', label: 'On Flagship Platform', valueClass: 'text-on-surface' },
  { value: '0.3s', label: 'Query Time (was 46s)', valueClass: 'text-secondary' },
]

const capabilities = [
  {
    icon: 'domain',
    accent: 'text-primary',
    title: 'Business Systems',
    description: 'Audit, asset & procurement',
  },
  { icon: 'dashboard', accent: 'text-tertiary', title: 'Rich Dashboards', description: 'Scores, KPIs & reports' },
  {
    icon: 'web',
    accent: 'text-secondary',
    title: 'Marketplaces & Booking',
    description: 'Listings, auctions & scheduling',
  },
  {
    icon: 'lan',
    accent: 'text-primary-fixed',
    title: 'Robust REST APIs',
    description: 'Layered .NET Web APIs',
  },
  { icon: 'bolt', accent: 'text-primary', title: 'Workflow Automation', description: 'Approvals, jobs & PDF reports' },
  { icon: 'security', accent: 'text-tertiary', title: 'Secure Core', description: 'JWT, RBAC & audit logging' },
]

export function CapabilityStrip() {
  return (
    <section aria-labelledby="capabilities-title" className="w-full bg-surface-container-low py-10">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="font-mono-code text-label-caps text-primary uppercase tracking-widest block mb-1">
              CAPABILITY SPECTRUM
            </span>
            <h2 id="capabilities-title" className="font-headline-md text-headline-md text-on-surface">
              Systems designed for enterprise resilience
            </h2>
          </div>
          <div className="flex items-center gap-6 font-mono-code text-body-sm text-on-surface-variant">
            {metrics.map((metric, index) => (
              <Fragment key={metric.label}>
                {index > 0 && <div aria-hidden="true" className="h-8 w-px bg-outline-variant" />}
                <div>
                  <span className={`font-mono-metric block ${metric.valueClass}`}>{metric.value}</span> {metric.label}
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {capabilities.map((item) => (
            <li key={item.title} className="bg-surface-container p-4 rounded-xl">
              <Icon name={item.icon} className={`mb-2 text-[22px] ${item.accent}`} />
              <h3 className="font-headline-sm text-sm text-on-surface font-semibold mb-1">{item.title}</h3>
              <p className="font-body-sm text-xs text-on-surface-variant">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
