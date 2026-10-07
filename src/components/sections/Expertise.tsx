import { Container } from '../Container'
import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'
import { TagList } from '../Tag'

const categories = [
  {
    icon: 'terminal',
    accent: 'text-primary',
    title: 'Backend & APIs',
    skills: [
      'C# / ASP.NET Core',
      'Node.js / Express',
      'TypeScript',
      'REST API Design',
      'SignalR Real-Time',
      'Background Jobs (Hangfire, BullMQ)',
      'Schema Validation (Zod)',
    ],
  },
  {
    icon: 'devices',
    accent: 'text-secondary',
    title: 'Frontend',
    skills: [
      'Angular',
      'React',
      'TypeScript / RxJS',
      'TanStack Query',
      'Tailwind CSS',
      'PrimeNG / Angular Material',
      'DevExtreme',
      'Responsive & RTL UI',
    ],
  },
  {
    icon: 'database',
    accent: 'text-tertiary',
    title: 'Data & Storage',
    skills: [
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Entity Framework Core',
      'Prisma ORM',
      'Query & Index Tuning',
      'Stored Procedures',
    ],
  },
  {
    icon: 'api',
    accent: 'text-primary-fixed',
    title: 'Integrations & AI',
    skills: [
      'WhatsApp Cloud API',
      'Signed Webhooks (HMAC)',
      'Firebase Push',
      'Google Maps',
      'OCR (Tesseract)',
      'Azure OpenAI / Gemini',
      'PDF, Excel & RDLC Reports',
    ],
  },
  {
    icon: 'architecture',
    accent: 'text-secondary-fixed',
    title: 'Architecture & Delivery',
    skills: [
      'Layered / Clean Architecture',
      'Repository + Unit of Work',
      'Multi-Tenant Design',
      'JWT, Refresh Tokens & RBAC',
      'Docker',
      'GitLab CI / GitHub Actions',
      'Azure App Service',
      'Git',
    ],
  },
  {
    icon: 'verified_user',
    accent: 'text-primary',
    title: 'Quality & Security',
    skills: [
      'Unit Testing (xUnit, NUnit)',
      'Regression Tests',
      'Pen-Test Remediation',
      'Security Headers & Token Revocation',
      'SOLID Principles',
      'Code Review',
      'Agile / Scrum',
    ],
  },
]

export function Expertise() {
  return (
    <section
      aria-labelledby="expertise-title"
      className="w-full bg-surface-container-lowest py-20 lg:py-28"
      id="expertise"
    >
      <Container>
        <SectionHeading
          id="expertise-title"
          eyebrow="TECHNICAL STACK & COMPETENCY"
          title="Categorized Technical Expertise"
          lead="Organized by capability, not vendor. I work in .NET and Angular day to day, and reach for Node.js, React and PostgreSQL when they fit the problem better."
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
