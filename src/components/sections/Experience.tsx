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
    period: '07/2025 — PRESENT',
    periodClass: 'text-secondary',
    title: '.NET Full-Stack Developer',
    company: 'Smarttech Systems · Nasr City, Cairo',
    status: 'CURRENT ROLE',
    statusClass: 'bg-secondary/10 text-secondary',
    summary:
      'Build and maintain client platforms for real estate, customer-experience auditing, healthcare, asset management and government supply chains. I work with UX designers and clients on requirements, deliver features end to end, and support production data and reports.',
    highlights: [
      'Emaar MSM Checklist & Project Tracker (.NET 8, Angular 18): most active recent contributor with 252 commits — checklist review with answer history, star-rating questions, reschedule workflow, role dashboards, email templates, Arabic localisation and Excel/PDF exports.',
      'Momtalakat property marketplace, Oman (.NET 8, Angular 18): 127 commits — add-listing wizard with maps and uploads, national-ID OCR, viewing requests and booking availability, purchase cycle and the admin dashboard.',
      'Ministry of Health Medical Stores (.NET 6, Angular 10): rewrote a timing-out store-hierarchy query from about 46 s to 0.3 s and fixed duplicate purchase requests, silently lost uploads and stock missed on child stores.',
      'Smarttech Fixed Assets (.NET 6, Angular 12): remediated penetration-test findings — security-stamp token revocation, server-side workflow transition rules, pagination limits, security headers and regression tests.',
      'Hlthera telehealth platform (.NET 6, Angular 14/17): healer and health-center onboarding, permissions UI, reports API integration and the appointment calendar.',
    ],
  },
  {
    period: '11/2024 — PRESENT',
    periodClass: 'text-outline',
    title: 'Full-Stack Developer (Freelance)',
    company: 'Remote',
    status: 'FREELANCE',
    statusClass: 'bg-surface-container text-on-surface-variant',
    summary:
      'Independent projects across stacks, from discovery to delivery.',
    highlights: [
      'WaveSend: designed and built a WhatsApp Business campaign platform end to end — Node.js/Express API, Prisma and PostgreSQL, a rate-limited BullMQ worker with retries, HMAC-verified Meta webhooks and a React dashboard.',
      'E-commerce website for Egyptian gemstone rings with Angular, Bootstrap, ASP.NET Core Web API and SQL Server.',
    ],
  },
  {
    period: '01/2025 — 06/2025',
    periodClass: 'text-outline',
    title: '.NET Angular Full-Stack Developer',
    company: 'GDS Global Data Scientists · Tanta',
    status: 'COMPLETED',
    statusClass: 'bg-surface-container text-on-surface-variant',
    summary:
      'Delivered full-stack features on 5+ enterprise projects in Agile teams using ASP.NET Core, Angular, Entity Framework, SQL Server, DevExpress and DevExtreme.',
    highlights: [
      'Built responsive Angular components integrated with ASP.NET Core REST APIs.',
      'Found and fixed frontend and backend performance bottlenecks and resolved critical production issues.',
      'Took part in sprint planning, development and code reviews for on-time delivery.',
    ],
  },
  {
    period: '10/2023 — 08/2024',
    periodClass: 'text-outline',
    title: 'Professional Web Development & BI Track',
    company: 'Information Technology Institute (ITI)',
    status: '9-MONTH PROGRAM',
    statusClass: 'bg-surface-container text-on-surface-variant',
    summary:
      'Intensive full-stack training covering C#, ASP.NET Core, Angular, SQL Server and business intelligence, delivered through team projects.',
    topics: ['C# & ASP.NET Core', 'Angular', 'SQL Server', 'Business Intelligence', 'Team Projects'],
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
          lead="Delivering production web platforms for real clients, working directly with designers, stakeholders and end users."
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
