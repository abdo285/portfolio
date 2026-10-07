import { Container } from '../Container'
import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'

const services = [
  {
    icon: 'web_stories',
    iconWrap: 'bg-primary/10 text-primary',
    title: 'Custom Web Applications',
    body: 'Applications built around how your team actually works. Usually .NET and Angular, or Node.js and React when that fits better, with architectures that can grow without painful rewrites.',
    points: ['Tailored client workflows', 'Fast single-page apps', 'Documented, versioned APIs'],
  },
  {
    icon: 'monitoring',
    iconWrap: 'bg-secondary/10 text-secondary',
    title: 'Business Systems & Dashboards',
    body: 'Replace spreadsheets and manual follow-ups with approval workflows, role-based dashboards and auditable records for operations, procurement, assets and quality teams.',
    points: ['Real-time updates via SignalR', 'Role & permission-based access', 'Query and index tuning'],
  },
  {
    icon: 'shopping_cart',
    iconWrap: 'bg-tertiary/10 text-tertiary',
    title: 'Marketplaces & Customer Portals',
    body: 'Listing, booking and self-service portals for customers and agents, with bilingual interfaces, maps, document uploads and generated reports.',
    points: ['Listings, bookings & viewing requests', 'PDF, Excel & printable reports', 'English / Arabic (RTL) interfaces'],
  },
  {
    icon: 'sync',
    iconWrap: 'bg-primary-fixed/10 text-primary-fixed',
    title: 'Integrations & Automation',
    body: 'Connect the tools your business already uses — messaging, maps, push notifications, identity checks and AI services — through webhooks and background jobs.',
    points: ['WhatsApp, Firebase, Maps & AI APIs', 'Scheduled and recurring jobs', 'Queued sending with retries & backoff'],
  },
]

export function Services() {
  return (
    <section aria-labelledby="services-title" className="w-full bg-surface py-20 lg:py-28" id="services">
      <Container>
        <SectionHeading
          id="services-title"
          accent="secondary"
          eyebrow="SOLUTIONS FOR BUSINESSES & TEAMS"
          title="From idea to working product."
          lead="Available for technical contracts, custom digital platforms, and full-time engineering roles requiring end-to-end full-stack capabilities."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-low p-6 lg:p-8 rounded-2xl shadow-md flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.iconWrap}`}>
                  <Icon name={service.icon} className="text-[28px]" />
                </div>
                <h3 className="font-headline-md text-xl text-on-surface font-semibold mb-3">{service.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">{service.body}</p>
              </div>
              <ul className="space-y-2 text-xs font-mono-code text-outline">
                {service.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
