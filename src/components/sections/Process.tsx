import { Container } from '../Container'
import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'

const steps = [
  {
    step: '01',
    accent: 'text-primary',
    icon: 'search',
    title: 'Understand',
    body: 'Analyze business workflows, pain points, data bottlenecks, and concrete end-user requirements before writing a line of code.',
    phase: 'Phase: Discovery & Scoping',
  },
  {
    step: '02',
    accent: 'text-tertiary',
    icon: 'draw',
    title: 'Design',
    body: 'Model normalized database schemas, design contract-first REST APIs, map Clean Architecture boundaries, and wireframe reactive UI.',
    phase: 'Phase: Architecture & Spec',
  },
  {
    step: '03',
    accent: 'text-secondary',
    icon: 'code',
    title: 'Build',
    body: 'Write testable, type-safe C# backend logic and modular Angular components utilizing strict TypeScript and responsive UI tokens.',
    phase: 'Phase: Full-Stack Execution',
  },
  {
    step: '04',
    accent: 'text-primary-fixed',
    icon: 'task_alt',
    title: 'Test',
    body: 'Validate business rules via automated unit & integration tests, optimize database queries, and audit access security.',
    phase: 'Phase: QA & Performance',
  },
  {
    step: '05',
    accent: 'text-secondary',
    icon: 'rocket_launch',
    title: 'Deliver',
    body: 'Deploy containerized services via Docker, publish comprehensive Swagger API documentation, and provide thorough handover.',
    phase: 'Phase: Production Handover',
  },
]

export function Process() {
  return (
    <section aria-labelledby="process-title" className="w-full bg-surface-container-lowest py-20 lg:py-28" id="process">
      <Container>
        <SectionHeading
          id="process-title"
          eyebrow="DELIVERY METHODOLOGY"
          title="How I Work"
          lead="A predictable, transparent engineering sequence that reduces uncertainty, eliminates rework, and prioritizes core business value from kickoff to deployment."
        />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <li key={step.step} className="bg-surface-container p-5 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono-code text-sm font-bold ${step.accent}`}>{step.step}</span>
                  <Icon name={step.icon} className="text-outline text-[20px]" />
                </div>
                <h3 className="font-headline-sm text-base text-on-surface font-semibold mb-2">{step.title}</h3>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">{step.body}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/30 text-[11px] font-mono-code text-outline">
                {step.phase}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
