import { Icon } from '../Icon'
import { TagList } from '../Tag'

const coreStack = [
  '.NET 8',
  'Angular 18',
  'C# Enterprise',
  'SQL Server',
  'Clean Architecture',
  'Entity Framework Core',
  'Redis & SignalR',
  'Docker',
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
    title: 'Angular 18 App',
    description:
      'Standalone components, NgRx reactive state tree, OnPush change detection & Tailwind CSS design system.',
    metrics: [
      ['State:', 'Store Hydrated', 'text-secondary'],
      ['Bundle:', '148 kB (Gzipped)', 'text-on-surface'],
    ],
  },
  {
    layer: 'Application Services',
    icon: 'api',
    accent: 'text-tertiary',
    title: '.NET 8 Core Web API',
    description: 'Clean Architecture with MediatR CQRS handlers, FluentValidation rules, and JWT identity enforcement.',
    metrics: [
      ['Throughput:', '4,200 req/sec', 'text-primary'],
      ['Serialization:', 'System.Text.Json', 'text-on-surface'],
    ],
  },
  {
    layer: 'Data Layer',
    icon: 'database',
    accent: 'text-secondary',
    title: 'SQL Server & Redis',
    description:
      'EF Core optimized queries, partitioned clustered indexes, distributed caching for hot transactional models.',
    metrics: [
      ['Cache Hit:', '94.6%', 'text-secondary'],
      ['Query Avg:', '4.8ms', 'text-on-surface'],
    ],
  },
  {
    layer: 'Real-Time Sync',
    icon: 'sync_alt',
    accent: 'text-primary-fixed',
    title: 'SignalR Hubs',
    description:
      'Bi-directional WebSockets pushing immediate state recalculations, alerts, and live operational updates.',
    metrics: [
      ['Sockets:', 'Connected', 'text-secondary'],
      ['Sync Delay:', '< 12ms', 'text-on-surface'],
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
          <span>Senior Full-Stack Engineer · .NET 8 &amp; Angular 18</span>
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
          Full-Stack Developer specializing in robust .NET enterprise backends and high-performance Angular frontends.
          Transforming tangled operational friction into scalable software architectures.
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
          aria-label="Distributed pipeline architecture schematic"
          className="w-full bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 bg-surface-container-low/50 -mx-6 -mt-6 lg:-mx-8 lg:-mt-8 p-4">
            <div className="flex items-center gap-3">
              <div aria-hidden="true" className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-error/70 inline-block" />
                <span className="w-3 h-3 rounded-full bg-tertiary-container/70 inline-block" />
                <span className="w-3 h-3 rounded-full bg-secondary/70 inline-block" />
              </div>
              <span className="font-mono-code text-mono-code text-outline">DISTRIBUTED_PIPELINE_SCHEMATIC.SYS</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono-code">
              <span className="flex items-center gap-1.5 text-secondary">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" /> 99.98% UPTIME
              </span>
              <span className="text-on-surface-variant">
                LATENCY: <span className="text-primary font-semibold">32ms</span>
              </span>
              <span className="hidden sm:inline text-on-surface-variant">
                PATTERN: <span className="text-on-surface font-semibold">CQRS &amp; MEDIATR</span>
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
              <span>All systems compiled against .NET 8.0 &amp; Angular 18 standards</span>
            </div>
            <div className="flex items-center gap-6">
              <span>PIPELINE: GITHUB_ACTIONS</span>
              <span>CONTAINER: DOCKER_LINUX</span>
              <span>HOST: CLOUD_ENTERPRISE</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
