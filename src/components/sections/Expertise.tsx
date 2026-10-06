import { Container } from '../Container'
import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'
import { TagList } from '../Tag'

const categories = [
  {
    icon: 'terminal',
    accent: 'text-primary',
    title: 'Backend & Server',
    skills: [
      '.NET 8',
      'ASP.NET Core',
      'C# Enterprise',
      'Web API REST',
      'Entity Framework Core',
      'MediatR (CQRS)',
      'SignalR WebSockets',
      'FluentValidation',
    ],
  },
  {
    icon: 'devices',
    accent: 'text-secondary',
    title: 'Frontend & Client',
    skills: [
      'Angular (v16-18)',
      'TypeScript',
      'RxJS Observable Pipelines',
      'NgRx Store',
      'Tailwind CSS',
      'Component Systems',
      'Responsive UI',
      'Angular Signals',
    ],
  },
  {
    icon: 'database',
    accent: 'text-tertiary',
    title: 'Database & Storage',
    skills: [
      'Microsoft SQL Server',
      'Database Modeling',
      'Index Optimization',
      'Execution Plan Tuning',
      'Stored Procedures',
      'Redis In-Memory',
      'Distributed Caching',
    ],
  },
  {
    icon: 'architecture',
    accent: 'text-primary-fixed',
    title: 'Architecture & DevOps',
    skills: [
      'Clean Architecture',
      'RESTful Design',
      'Docker Containers',
      'CI/CD Automation',
      'Git Version Control',
      'JWT & Role-Based RBAC',
      'Swagger / OpenAPI',
    ],
  },
  {
    icon: 'analytics',
    accent: 'text-secondary-fixed',
    title: 'Business & Automation',
    skills: [
      'ERP / CRM Workflows',
      'E-Commerce Processing',
      'PDF Generation',
      'Third-Party Webhooks',
      'Stripe / Payment Systems',
      'Automated Email Triggers',
    ],
  },
  {
    icon: 'verified_user',
    accent: 'text-primary',
    title: 'Testing & Standards',
    skills: [
      'Unit Testing (xUnit)',
      'Integration Testing',
      'Moq & FluentAssertions',
      'SOLID Principles',
      'Defensive Coding',
      'Security Auditing',
    ],
  },
]

export function Expertise() {
  return (
    <section aria-labelledby="expertise-title" className="w-full bg-surface-container-lowest py-20 lg:py-28" id="expertise">
      <Container>
        <SectionHeading
          id="expertise-title"
          eyebrow="TECHNICAL STACK & COMPETENCY"
          title="Categorized Technical Expertise"
          lead="Strictly organized by operational domain. Clean, proven technologies selected for long-term maintainability, strong ecosystem backing, and enterprise stability."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.title} className="bg-surface-container p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <Icon name={category.icon} className={`text-[24px] ${category.accent}`} />
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{category.title}</h3>
              </div>
              <TagList
                items={category.skills}
                tagClassName="px-3 py-1.5 bg-surface-container-lowest text-on-surface text-xs"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
