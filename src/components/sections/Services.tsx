import { Container } from '../Container'
import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'

const services = [
  {
    icon: 'web_stories',
    iconWrap: 'bg-primary/10 text-primary',
    title: 'Custom Web Applications',
    body: 'Bespoke applications engineered around unique operational models. Built from scratch with .NET 8 and Angular, ensuring scalable architectures that accommodate future growth without painful rewrites.',
    points: ['Tailored client workflows', 'High-performance single page apps', 'Comprehensive API documentation'],
  },
  {
    icon: 'monitoring',
    iconWrap: 'bg-secondary/10 text-secondary',
    title: 'Business Systems & Dashboards',
    body: 'Transform disjointed spreadsheets and repetitive administrative busywork into consolidated management hubs, live analytics cockpits, and auditable ERP/CRM systems.',
    points: ['Real-time telemetry via WebSockets', 'Role-based employee security', 'Automated data backups & indexing'],
  },
  {
    icon: 'payments',
    iconWrap: 'bg-tertiary/10 text-tertiary',
    title: 'B2B E-Commerce & Customer Portals',
    body: 'High-security self-service client portals, wholesale pricing matrices, automated billing triggers, and seamless payment gateway integrations designed for uninterrupted revenue flows.',
    points: [
      'Custom tiered wholesale pricing',
      'Automated invoice & PDF generation',
      'Self-service account dashboards',
    ],
  },
  {
    icon: 'sync',
    iconWrap: 'bg-primary-fixed/10 text-primary-fixed',
    title: 'Integrations & Automation',
    body: 'Connecting isolated software tools into a unified pipeline. Synchronize your external logistics, CRM, payment processors, and marketing tools via custom Webhooks and background tasks.',
    points: [
      'Third-party REST/GraphQL integration',
      'Automated scheduled recurring jobs',
      'Resilient retry policies with Polly',
    ],
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
          lead="Available for technical contracts, custom digital platforms, and senior engineering roles requiring end-to-end full-stack capabilities."
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
