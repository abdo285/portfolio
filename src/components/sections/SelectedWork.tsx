import { site } from '../../content/site'
import { Container } from '../Container'
import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'
import { TagList } from '../Tag'

const flagshipFeatures = [
  {
    title: 'Role-based access control:',
    body: 'Fine-grained policy scopes for inventory clerks, dispatch, and finance directors.',
  },
  { title: 'Real-Time WebSockets:', body: 'Live SignalR state synchronization across 80+ simultaneous operators.' },
  { title: 'Automated PDF Engine:', body: 'Dynamic ledger invoicing generation with direct transactional audit logs.' },
]

const flagshipStack = ['.NET 8 Web API', 'Angular 18', 'SQL Server', 'EF Core', 'Redis', 'SignalR']

const kpis = [
  {
    label: 'Monthly Flow Rate',
    value: '$418,920',
    valueClass: 'text-on-surface',
    note: '↑ 18.4% vs last period',
    noteClass: 'text-secondary',
  },
  {
    label: 'Open Dispatches',
    value: '1,429 Units',
    valueClass: 'text-primary',
    note: '3 Warehouses Live',
    noteClass: 'text-on-surface-variant',
  },
  {
    label: 'Queue Latency',
    value: '1.2 hrs',
    valueClass: 'text-secondary',
    note: '-68% improvement',
    noteClass: 'text-secondary',
  },
]

const orders = [
  {
    id: '#ORD-9021 · Eastern Terminal',
    amount: '340 Units ($14,200)',
    status: 'DISPATCHED',
    statusClass: 'text-secondary',
  },
  { id: '#ORD-9022 · Midwest Hub', amount: '880 Units ($42,150)', status: 'QUEUED', statusClass: 'text-primary' },
]

type SecondaryProject = {
  category: string
  categoryClass: string
  badge: string
  title: string
  description: string
  facts: [label: string, value: string, valueClass: string][]
  stack: string[]
  role: string
  cta: string
}

const secondaryProjects: SecondaryProject[] = [
  {
    category: 'HEALTHCARE ARCHITECTURE',
    categoryClass: 'text-secondary',
    badge: '45k+ Patients',
    title: 'ApexCare Patient Portal & Operations Engine',
    description:
      'Engineered a HIPAA-aligned medical records and telehealth scheduling platform. Implemented tenant-isolated database models, automated multi-channel appointment alerts, and FHIR standard interoperability.',
    facts: [
      ['Compliance:', 'HIPAA / AES-256 Encrypted', 'text-secondary'],
      ['Automated Notifications:', 'Twilio & SendGrid Webhooks', 'text-on-surface'],
      ['Scheduling Fallback:', '0 Booking Overlaps', 'text-on-surface'],
    ],
    stack: ['ASP.NET Core Web API', 'Angular 17', 'SQL Server', 'Docker', 'Azure Services'],
    role: 'ROLE: LEAD FULL-STACK',
    cta: 'Inquire about this architecture',
  },
  {
    category: 'B2B COMMERCE INFRASTRUCTURE',
    categoryClass: 'text-tertiary',
    badge: '10,000+ Daily SKUs',
    title: 'NovaCommerce B2B Wholesale Engine',
    description:
      'High-throughput B2B distributor catalog featuring tier-based volume calculations, custom payment gateway processing, automated credit approval flows, and ERP synchronization.',
    facts: [
      ['Batch Price Recalculation:', '< 85ms for 5k line-items', 'text-primary'],
      ['Payment Gateways:', 'Stripe Corporate & Wire Hook', 'text-on-surface'],
      ['Catalog Sync:', 'Bi-directional EF Core Bulk', 'text-secondary'],
    ],
    stack: ['.NET 8', 'Angular 18', 'SQL Server Clustered', 'Stripe API', 'MediatR CQRS'],
    role: 'ROLE: PRINCIPAL DEVELOPER',
    cta: 'Request technical demo',
  },
]

function OrderVelocityChart() {
  return (
    <svg
      className="w-full h-28"
      preserveAspectRatio="none"
      viewBox="0 0 500 120"
      role="img"
      aria-label="Order execution velocity trending upward over the period"
    >
      <defs>
        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <line stroke="#282a2e" strokeDasharray="3,3" x1="0" x2="500" y1="30" y2="30" />
      <line stroke="#282a2e" strokeDasharray="3,3" x1="0" x2="500" y1="60" y2="60" />
      <line stroke="#282a2e" strokeDasharray="3,3" x1="0" x2="500" y1="90" y2="90" />
      <path d="M0,100 Q60,70 120,80 T240,40 T360,50 T440,20 T500,25 L500,120 L0,120 Z" fill="url(#areaGradient)" />
      <path d="M0,100 Q60,70 120,80 T240,40 T360,50 T440,20 T500,25" fill="none" stroke="#0ea5e9" strokeWidth="2.5" />
      <circle cx="240" cy="40" fill="#4edea3" r="4" />
      <circle cx="440" cy="20" fill="#0ea5e9" r="4" />
    </svg>
  )
}

function DashboardMockup() {
  return (
    <div
      role="img"
      aria-label="OmniFlow dashboard preview showing KPIs, a live order velocity chart and recent dispatches"
      className="lg:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl"
    >
      <div className="bg-surface-container-high px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-surface-variant inline-block" />
          <span className="w-3 h-3 rounded-full bg-surface-variant inline-block" />
          <span className="w-3 h-3 rounded-full bg-surface-variant inline-block" />
          <div className="ml-4 px-3 py-0.5 rounded bg-surface-container-lowest text-xs font-mono-code text-outline">
            https://app.omniflow-erp.internal/dashboard
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-secondary/20 text-secondary text-xs font-mono-code">CONNECTED</span>
      </div>
      <div className="p-6 bg-surface-container-lowest">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="bg-surface-container p-3 rounded-lg">
              <span className="font-label-caps text-[10px] text-outline uppercase block mb-1">{kpi.label}</span>
              <div className={`font-mono-metric text-lg font-bold ${kpi.valueClass}`}>{kpi.value}</div>
              <span className={`text-[11px] font-mono-code ${kpi.noteClass}`}>{kpi.note}</span>
            </div>
          ))}
        </div>
        <div className="bg-surface-container p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-label-ui text-xs font-semibold text-on-surface">
              Order Execution Velocity (Live SignalR Stream)
            </span>
            <span className="text-[11px] font-mono-code text-primary">Live Sync: 34ms</span>
          </div>
          <OrderVelocityChart />
        </div>
        <div className="space-y-1.5 font-mono-code text-[11px]">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-2 rounded bg-surface-container-high/40 text-on-surface-variant"
            >
              <span>{order.id}</span>
              <span className="text-on-surface">{order.amount}</span>
              <span className={`font-medium ${order.statusClass}`}>{order.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FlagshipProject() {
  return (
    <article
      aria-labelledby="omniflow-title"
      className="bg-surface-container-low rounded-2xl p-6 lg:p-10 mb-12 shadow-xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase font-bold">
            CASE STUDY FEATURE
          </span>
          <span className="font-mono-code text-label-caps text-outline">B2B LOGISTICS &amp; ERP</span>
        </div>
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <span className="font-mono-code text-xs text-on-surface-variant">Production Deployed (v2.4)</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h3 id="omniflow-title" className="font-headline-lg text-2xl lg:text-3xl text-on-surface mb-3">
            OmniFlow Business Management Platform
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
            Consolidated fragmented legacy spreadsheets and disparate warehouse emails into an audited, real-time
            command center, cutting order processing latency by 68% across three fulfillment locations.
          </p>
          <ul className="space-y-3 mb-6">
            {flagshipFeatures.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3">
                <Icon name="check_circle" className="text-secondary text-[20px] mt-0.5" />
                <span className="font-body-sm text-body-sm text-on-surface">
                  <strong className="font-semibold text-on-surface">{feature.title}</strong> {feature.body}
                </span>
              </li>
            ))}
          </ul>
          <TagList
            items={flagshipStack}
            className="flex flex-wrap gap-2 mb-8"
            tagClassName="px-2.5 py-1 bg-surface-container-high text-on-surface-variant text-xs"
          />
          <div className="flex items-center gap-4">
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-ui text-label-ui font-semibold hover:bg-tertiary transition-all"
              href="#case-study"
            >
              <span>Explore Deep Dive</span>
              <Icon name="read_more" className="text-[18px]" />
            </a>
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-ui text-label-ui hover:bg-surface-container-high transition-all"
              href={site.github.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="code" className="text-[18px]" />
              <span>Architecture Repo</span>
            </a>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </article>
  )
}

function SecondaryProjectCard({ project }: { project: SecondaryProject }) {
  return (
    <article className="bg-surface-container-low rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-lg">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`font-mono-code text-label-caps uppercase ${project.categoryClass}`}>
            {project.category}
          </span>
          <span className="px-2.5 py-0.5 rounded bg-surface-container text-xs font-mono-code text-on-surface-variant">
            {project.badge}
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{project.title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">{project.description}</p>
        <dl className="bg-surface-container p-4 rounded-xl mb-6 space-y-2 font-body-sm text-on-surface">
          {project.facts.map(([label, value, valueClass]) => (
            <div key={label} className="flex items-center justify-between">
              <dt className="text-on-surface-variant">{label}</dt>
              <dd className={`font-mono-code ${valueClass}`}>{value}</dd>
            </div>
          ))}
        </dl>
        <TagList
          items={project.stack}
          className="flex flex-wrap gap-2 mb-8"
          tagClassName="px-2 py-0.5 bg-surface-container text-xs text-on-surface-variant"
        />
      </div>
      <div className="flex items-center justify-between pt-4">
        <span className="font-mono-code text-xs text-outline">{project.role}</span>
        <a
          className="inline-flex items-center gap-1 text-primary hover:text-tertiary font-label-ui text-label-ui font-semibold"
          href="#contact"
        >
          <span>{project.cta}</span>
          <Icon name="arrow_forward" className="text-[16px]" />
        </a>
      </div>
    </article>
  )
}

export function SelectedWork() {
  return (
    <section aria-labelledby="work-title" className="w-full bg-surface py-20 lg:py-28" id="work">
      <Container>
        <SectionHeading
          id="work-title"
          eyebrow="ENGINEERED PRODUCTION SYSTEMS"
          title="Selected Work"
          lead="Production applications and digital enterprise systems built around verified business requirements, high concurrency, and measurable return on investment."
        />
        <FlagshipProject />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <SecondaryProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
