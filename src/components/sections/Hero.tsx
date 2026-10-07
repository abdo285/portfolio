import { Icon } from '../Icon'
import { TagList } from '../Tag'

const coreStack = [
  'C# / ASP.NET Core',
  'Angular',
  'Node.js',
  'React',
  'TypeScript',
  'SQL Server',
  'PostgreSQL',
  'Redis & SignalR',
]

type ArchitectureNode = {
  layer: string
  icon: string
  accent: string
  title: string
  description: string
  metrics: [label: string, value: string, valueClass: string][]
}

const architectureNodes: ArchitectureNode[] = [
  {
    layer: 'Client Layer',
    icon: 'web',
    accent: 'text-primary',
    title: 'Angular & React',
    description:
      'Angular portals with PrimeNG and Arabic RTL layouts; React dashboards with TanStack Query and Tailwind CSS.',
    metrics: [
      ['Angular:', 'v10 → v18', 'text-secondary'],
      ['React:', '18 + Vite', 'text-on-surface'],
    ],
  },
  {
    layer: 'Application Services',
    icon: 'api',
    accent: 'text-tertiary',
    title: '.NET & Node.js APIs',
    description: 'ASP.NET Core Web APIs with layered services and JWT privilege filters; Express + Zod for lighter services.',
    metrics: [
      ['Auth:', 'JWT + refresh tokens', 'text-primary'],
      ['Jobs:', 'Hangfire · BullMQ', 'text-on-surface'],
    ],
  },
  {
    layer: 'Data Layer',
    icon: 'database',
    accent: 'text-secondary',
    title: 'SQL Server, PostgreSQL & Redis',
    description:
      'EF Core and Prisma models, stored procedures and query tuning — including a hierarchy query cut from 46 s to 0.3 s.',
    metrics: [
      ['Query fix:', '46s → 0.3s', 'text-secondary'],
      ['ORMs:', 'EF Core · Prisma', 'text-on-surface'],
    ],
  },
  {
    layer: 'Real-Time Sync',
    icon: 'sync_alt',
    accent: 'text-primary-fixed',
    title: 'SignalR & Webhooks',
    description:
      'Live auction bids and RFID reader events over SignalR hubs; signed webhooks for message delivery status.',
    metrics: [
      ['Hubs:', 'SignalR', 'text-secondary'],
      ['Webhooks:', 'HMAC-SHA256', 'text-on-surface'],
    ],
  },
]
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative w-full overflow-hidden bg-surface py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[130px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full"
      />
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 flex flex-col items-center">
        <p className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high/80 text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider mb-8 shadow-sm">
          <span aria-hidden="true" className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span>Full-Stack Developer · .NET · Angular · Node.js · React</span>
        </p>

        <h1
          id="hero-title"
          className="font-display-hero text-display-hero-mobile lg:text-display-hero text-center text-on-surface max-w-4xl tracking-tight leading-tight mb-6"
        >
          I build digital products that solve{' '}
          <span className="bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent">
            real business problems.
          </span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant text-center max-w-2xl mb-8 leading-relaxed">
          Full-stack developer building .NET and Node.js backends with Angular and React frontends — turning operational
          friction into reliable, maintainable business software.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-container text-on-primary-container font-label-ui text-label-ui font-semibold shadow-lg shadow-primary-container/20 hover:bg-primary hover:text-on-primary transition-all"
            href="#work"
          >
            <span>View My Work</span>
            <Icon name="arrow_downward" className="text-[18px]" />
          </a>
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high text-on-surface font-label-ui text-label-ui font-medium hover:bg-surface-bright transition-all"
            href="#contact"
          >
            <span>Let&apos;s Talk</span>
            <Icon name="chat_bubble_outline" className="text-[18px]" />
          </a>
        </div>

        <TagList
          items={coreStack}
          className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mb-16"
          tagClassName="px-3 py-1 bg-surface-container-low text-on-surface-variant text-mono-code"
        />

        <figure
          aria-label="Typical architecture of the systems I build"
          className="w-full bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 bg-surface-container-low/50 -mx-6 -mt-6 lg:-mx-8 lg:-mt-8 p-4">
            <div className="flex items-center gap-3">
              <div aria-hidden="true" className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-error/70 inline-block" />
                <span className="w-3 h-3 rounded-full bg-tertiary-container/70 inline-block" />
                <span className="w-3 h-3 rounded-full bg-secondary/70 inline-block" />
              </div>
              <span className="font-mono-code text-mono-code text-outline">PRODUCTION_STACK_OVERVIEW.SYS</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono-code">
              <span className="flex items-center gap-1.5 text-secondary">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" /> 6 PRODUCTION SYSTEMS
              </span>
              <span className="text-on-surface-variant">
                STACKS: <span className="text-primary font-semibold">.NET · NODE.JS</span>
              </span>
              <span className="hidden sm:inline text-on-surface-variant">
                PATTERN: <span className="text-on-surface font-semibold">LAYERED + REPO/UOW</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {architectureNodes.map((node) => (
              <div
                key={node.title}
                className="bg-surface-container p-5 rounded-xl flex flex-col justify-between group hover:bg-surface-container-high transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono-code text-label-caps uppercase ${node.accent}`}>{node.layer}</span>
                    <Icon name={node.icon} className={`text-[20px] ${node.accent}`} />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{node.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{node.description}</p>
                </div>
                <dl className="pt-3 bg-surface-container-lowest/60 rounded p-2.5 font-mono-code text-[11px] text-outline">
                  {node.metrics.map(([label, value, valueClass]) => (
                    <div key={label} className="flex justify-between">
                      <dt>{label}</dt>
                      <dd className={valueClass}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <figcaption className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code text-outline">
            <div className="flex items-center gap-2">
              <Icon name="verified" className="text-primary text-[16px]" />
              <span>Drawn from client systems in production</span>
            </div>
            <div className="flex items-center gap-6">
              <span>PIPELINE: GITLAB_CI · GITHUB_ACTIONS</span>
              <span>CONTAINER: DOCKER</span>
              <span>HOST: AZURE_APP_SERVICE</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
