import { Container } from '../Container'
import { Icon } from '../Icon'
import { Eyebrow } from '../SectionHeading'
import { Tag } from '../Tag'

const diagnostics = [
  {
    icon: 'warning',
    iconWrap: 'bg-error/10 text-error',
    title: 'The Challenge',
    body: 'A high-growth 3-facility logistics firm relied on disconnected Excel sheets and manual data re-entry. This resulted in an average 4-day shipping backlog, recurrent inventory stock-outs, and untracked inventory ghost discrepancies costing an estimated $32,000 monthly.',
  },
  {
    icon: 'settings_suggest',
    iconWrap: 'bg-primary-container/20 text-primary',
    title: 'The Solution',
    body: 'Designed and built an event-driven centralized platform utilizing .NET 8 Web API with Clean Architecture principles and an Angular 18 reactive frontend. Integrated SignalR for instant warehouse synchronization and background hosted services for automated reconciliation.',
  },
  {
    icon: 'verified',
    iconWrap: 'bg-secondary/10 text-secondary',
    title: 'The Outcome',
    body: 'Order processing turnaround improved by 68%. Eliminated inventory ghost errors to 0 throughout the next two audited quarters, and saved approximately 120 staff hours every single week through automated document workflows.',
  },
]

const layers = [
  {
    index: '01',
    accent: 'text-primary',
    title: 'Client & Presentation Layer (Angular 18)',
    body: 'NgRx ComponentStore, standalone route-level guards, typed reactive forms & Tailwind CSS component library',
    tags: ['RxJS 7.8', 'Tailwind v3'],
  },
  {
    index: '02',
    accent: 'text-tertiary',
    title: 'API Gateway & Middleware (.NET 8 Core)',
    body: 'Global exception handler middleware, rate limiting algorithms, JWT claims extraction & Serilog structured auditing',
    tags: ['ASP.NET Identity', 'JWT Tokens'],
  },
  {
    index: '03',
    accent: 'text-secondary',
    title: 'Application & Domain Core (CQRS Architecture)',
    body: 'MediatR query/command handlers, FluentValidation pipelines, domain events & state machine logic',
    tags: ['MediatR 12', 'FluentValidation'],
  },
  {
    index: '04',
    accent: 'text-primary-fixed',
    title: 'Data Persistence & Infrastructure (SQL & Redis)',
    body: 'EF Core with filtered clustered indexes, distributed Redis cache for hot read models & raw Dapper fallback queries',
    tags: ['SQL Server 2022', 'StackExchange.Redis'],
  },
]

export function CaseStudy() {
  return (
    <section
      aria-labelledby="case-study-title"
      className="w-full bg-surface-container-lowest py-20 lg:py-28"
      id="case-study"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Eyebrow accent="secondary">ARCHITECTURAL SPECIFICATION</Eyebrow>
            <h2 id="case-study-title" className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Case Study: OmniFlow Internal Engine
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Tag className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs">CQRS Pattern</Tag>
            <Tag className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs">
              Event-Driven Architecture
            </Tag>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {diagnostics.map((item) => (
            <div key={item.title} className="bg-surface-container p-6 rounded-xl">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${item.iconWrap}`}>
                <Icon name={item.icon} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{item.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-low rounded-2xl p-6 lg:p-10 shadow-xl">
          <div className="mb-8">
            <span className="font-mono-code text-label-caps text-primary uppercase">
              CLEAN ARCHITECTURE STACK BREAKDOWN
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">Layered System Topology</h3>
          </div>
          <ol className="space-y-4">
            {layers.map((layer) => (
              <li
                key={layer.index}
                className="bg-surface-container p-5 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-surface-container-high transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono-code text-sm font-bold px-3 py-1 bg-surface-container-lowest rounded ${layer.accent}`}
                  >
                    LAYER {layer.index}
                  </span>
                  <div>
                    <h4 className="font-headline-sm text-base text-on-surface">{layer.title}</h4>
                    <p className="font-body-sm text-xs text-on-surface-variant">{layer.body}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {layer.tags.map((tag) => (
                    <Tag key={tag} className="px-2 py-1 bg-surface-container-lowest text-outline text-xs">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
