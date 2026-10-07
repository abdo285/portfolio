import { Fragment } from 'react'
import { Container } from '../Container'
import { Eyebrow } from '../SectionHeading'

const stats = [
  { value: '6', label: 'Production Systems', valueClass: 'text-on-surface' },
  { value: '5', label: 'Industries Served', valueClass: 'text-primary' },
  { value: 'EN/AR', label: 'Bilingual Delivery', valueClass: 'text-secondary' },
]

const milestones = [
  {
    step: '01',
    badge: 'bg-surface-container-high text-primary',
    title: 'BSc Computer Science · Tanta University (2019–2022)',
    body: 'Data structures, algorithms, object-oriented programming, databases and networking fundamentals.',
  },
  {
    step: '02',
    badge: 'bg-surface-container-high text-secondary',
    title: 'Information Technology Institute (2023–2024)',
    body: 'Nine-month Professional Web Development & BI track: C#, ASP.NET Core, Angular, SQL Server and BI through team projects.',
  },
  {
    step: '03',
    badge: 'bg-surface-container-high text-tertiary',
    title: 'GDS Global Data Scientists (2025)',
    body: 'Full-stack features on 5+ enterprise projects in Agile teams with ASP.NET Core, Angular and SQL Server.',
  },
  {
    step: '04',
    badge: 'bg-primary-container text-on-primary-container',
    title: 'Smarttech Systems & Freelance (2025–now)',
    body: 'Client platforms for real estate, CX auditing, healthcare, asset management and government supply chains, plus independent Node.js and React work.',
  },
]

export function About() {
  return (
    <section aria-labelledby="about-title" className="w-full bg-surface py-20 lg:py-28" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Eyebrow>BACKGROUND &amp; PHILOSOPHY</Eyebrow>
            <h2 id="about-title" className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-6">
              Engineering with the business in mind.
            </h2>
            <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                I’m Abdalfatah (Abdo) Elbeherey, a Full-Stack Developer focused on building reliable web applications
                and business systems. My work combines backend engineering rigor with modern frontend development to
                turn intricate operational requirements into clean, practical, and maintainable software.
              </p>
              <p>
                Rather than chasing transient trends, I build around foundational software principles: type safety,
                predictable architectures, defensive API design, and intuitive user experiences that minimize cognitive
                load for daily business operators.
              </p>
              <p>
                Having graduated through intensive professional software training at the Information Technology
                Institute (ITI), I pair academic computer science foundations with pragmatic enterprise implementation
                standards.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              {stats.map((stat, index) => (
                <Fragment key={stat.label}>
                  {index > 0 && <div aria-hidden="true" className="h-10 w-px bg-outline-variant" />}
                  <div>
                    <span className={`font-mono-metric block font-bold ${stat.valueClass}`}>{stat.value}</span>
                    <span className="font-body-sm text-xs text-on-surface-variant">{stat.label}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-surface-container-low p-6 lg:p-8 rounded-2xl shadow-xl">
            <h3 className="font-mono-code text-label-caps text-secondary uppercase block mb-6">
              FOUNDATIONAL MILESTONES
            </h3>
            <ol className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-outline-variant/40">
              {milestones.map((milestone) => (
                <li key={milestone.step} className="relative flex items-start gap-4">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono-code text-xs font-bold ring-4 ring-surface-container-low shrink-0 z-10 ${milestone.badge}`}
                  >
                    {milestone.step}
                  </span>
                  <div>
                    <h4 className="font-headline-sm text-sm text-on-surface font-semibold">{milestone.title}</h4>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1">{milestone.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
