import { Container } from '../Container'
import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'
import { TagList } from '../Tag'

type Role = {
  period: string
  periodClass: string
  title: string
  company: string
  status: string
  statusClass: string
  summary: string
  highlights?: string[]
  topics?: string[]
}

const roles: Role[] = [
  {
    period: '2023 — PRESENT',
    periodClass: 'text-secondary',
    title: 'Senior Full-Stack Engineer / Technical Lead',
    company: 'Enterprise Business Solutions',
    status: 'ACTIVE ROLE',
    statusClass: 'bg-secondary/10 text-secondary',
    summary:
      'Lead the design and technical execution of multi-tenant enterprise business platforms. Work across .NET 8 backend services and Angular 18 client hubs handling continuous commercial operations.',
    highlights: [
      'Architected and delivered multi-tenant ERP platform supporting 12,000+ daily active commercial users using .NET 8, CQRS, and Angular.',
      'Refactored legacy monolithic database queries, slashing median API latency from 480ms down to 45ms through index redesign and Redis caching.',
      'Mentored junior engineers in Clean Architecture, unit testing practices, and reactive Angular state patterns.',
    ],
  },
  {
    period: '2021 — 2023',
    periodClass: 'text-outline',
    title: 'Full-Stack .NET Developer',
    company: 'Modern Web Systems',
    status: 'COMPLETED',
    statusClass: 'bg-surface-container text-on-surface-variant',
    summary:
      'Engineered enterprise-grade REST APIs, payment webhooks, and administrative portals for client-facing commerce and service teams.',
    highlights: [
      'Engineered 15+ secure REST APIs integrated with external payment providers (Stripe, PayPal) and logistic fulfillment systems.',
      'Built real-time operational telemetry dashboard using Angular, TypeScript, and SignalR WebSockets for live status feeds.',
      'Implemented automated CI/CD pipelines via Docker and GitHub Actions, dropping deployment regressions to near-zero.',
    ],
  },
  {
    period: '2020 — 2021',
    periodClass: 'text-outline',
    title: 'Software Engineering Fellow',
    company: 'Information Technology Institute (ITI)',
    status: 'HONORS GRADUATION',
    statusClass: 'bg-surface-container text-on-surface-variant',
    summary:
      'Rigorous 9-month professional software engineering fellowship covering advanced enterprise architecture, SQL Server database administration, .NET frameworks, and Angular modern web development.',
    topics: ['Intensive C# Internals', 'SQL Index Tuning', 'Software Design Patterns', 'Team Agile Sprints'],
  },
]

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="w-full bg-surface py-20 lg:py-28" id="experience">
      <Container>
        <SectionHeading
          id="experience-title"
          accent="secondary"
          eyebrow="TRACK RECORD"
          title="Professional Experience"
          lead="Proven history delivering production web platforms, guiding architecture decisions, and partnering directly with business stakeholders."
        />
        <ol className="space-y-8">
          {roles.map((role) => (
            <li key={role.title} className="bg-surface-container-low p-6 lg:p-8 rounded-2xl shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <span className={`font-mono-code text-xs font-semibold ${role.periodClass}`}>{role.period}</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{role.title}</h3>
                  <p className="font-body-md text-sm text-outline">{role.company}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded text-xs font-mono-code self-start md:self-auto ${role.statusClass}`}
                >
                  {role.status}
                </span>
              </div>
              <p
                className={`font-body-md text-body-md text-on-surface-variant leading-relaxed ${role.highlights ? 'mb-6' : 'mb-4'}`}
              >
                {role.summary}
              </p>
              {role.highlights && (
                <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5">
                      <Icon name="arrow_right" className="text-primary text-[18px] mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              {role.topics && (
                <TagList
                  items={role.topics}
                  tagClassName="px-2.5 py-1 bg-surface-container text-xs text-on-surface-variant"
                />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
