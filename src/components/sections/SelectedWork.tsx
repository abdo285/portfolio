import { useState } from 'react'
import { flagshipProject, secondaryProjects, type Project } from '../../content/projects'
import { cx } from '../../lib/cx'
import { Container } from '../Container'
import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'
import { TagList } from '../Tag'

function ProjectGallery({ project, className }: { project: Project; className?: string }) {
  const [active, setActive] = useState(0)
  const image = project.images[active]
  return (
    <figure className={cx('flex flex-col gap-3', className)}>
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-surface-container-high px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-surface-variant inline-block shrink-0" />
            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-surface-variant inline-block shrink-0" />
            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-surface-variant inline-block shrink-0" />
            <span className="ml-3 px-3 py-0.5 rounded bg-surface-container-lowest text-xs font-mono-code text-outline truncate">
              {project.title} · {image.caption}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px] font-mono-code shrink-0">
            ILLUSTRATIVE DATA
          </span>
        </div>
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto aspect-[16/10] object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-3" role="group" aria-label={`${project.title} screens`}>
        {project.images.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-pressed={index === active}
            aria-label={`Show screen ${index + 1}: ${item.caption}`}
            onClick={() => setActive(index)}
            className={cx(
              'group text-left rounded-lg overflow-hidden bg-surface-container-lowest transition-all',
              index === active
                ? 'ring-2 ring-primary-container'
                : 'ring-1 ring-outline-variant/60 opacity-70 hover:opacity-100',
            )}
          >
            <img
              src={item.thumb}
              alt=""
              width={480}
              height={300}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto aspect-[16/10] object-cover"
            />
            <span
              className={cx(
                'block px-2 py-1.5 font-mono-code text-[11px] leading-4 truncate',
                index === active ? 'text-on-surface' : 'text-outline',
              )}
            >
              {item.caption}
            </span>
          </button>
        ))}
      </div>
    </figure>
  )
}

function ProjectLogo({ project, className }: { project: Project; className?: string }) {
  const { logo } = project
  return (
    <span
      className={cx('inline-flex items-center justify-center h-11 px-3 rounded-lg shrink-0 shadow-sm', className)}
      style={{ background: logo.background }}
    >
      {logo.kind === 'image' ? (
        <img src={logo.src} alt={logo.alt} height={28} className="h-7 w-auto max-w-[120px] object-contain" />
      ) : (
        <span role="img" className="font-headline-sm text-[17px] font-bold text-white" aria-label={`${logo.lead}${logo.rest} logo`}>
          <span style={{ color: logo.leadColor }}>{logo.lead}</span>
          {logo.rest}
        </span>
      )}
    </span>
  )
}

function Confidentiality({ project }: { project: Project }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono-code text-xs text-outline">
      <Icon name="verified_user" className="text-[16px]" />
      {project.confidentiality}
    </span>
  )
}

function FlagshipProject() {
  const project = flagshipProject
  return (
    <article
      aria-labelledby="flagship-title"
      className="bg-surface-container-low rounded-2xl p-6 lg:p-10 mb-12 shadow-xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase font-bold">
            CASE STUDY FEATURE
          </span>
          <span className="font-mono-code text-label-caps text-outline">{project.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <span className="font-mono-code text-xs text-on-surface-variant">{project.status}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <ProjectLogo project={project} />
            <span className="font-mono-code text-xs text-outline">{project.client}</span>
          </div>
          <h3 id="flagship-title" className="font-headline-lg text-2xl lg:text-3xl text-on-surface mb-3">
            {project.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
            {project.description}
          </p>
          <ul className="space-y-3 mb-6">
            {project.features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3">
                <Icon name="check_circle" className="text-secondary text-[20px] mt-0.5" />
                <span className="font-body-sm text-body-sm text-on-surface">
                  <strong className="font-semibold text-on-surface">{feature.title}</strong> {feature.body}
                </span>
              </li>
            ))}
          </ul>
          <TagList
            items={project.stack}
            className="flex flex-wrap gap-2 mb-8"
            tagClassName="px-2.5 py-1 bg-surface-container-high text-on-surface-variant text-xs"
          />
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-ui text-label-ui font-semibold hover:bg-tertiary transition-all"
              href="#case-study"
            >
              <span>{project.cta}</span>
              <Icon name="read_more" className="text-[18px]" />
            </a>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container text-on-surface-variant font-label-ui text-label-ui">
              <Icon name="verified_user" className="text-[18px]" />
              <span>{project.confidentiality}</span>
            </span>
          </div>
        </div>
        <ProjectGallery project={project} className="lg:col-span-7" />
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container rounded-xl p-4">
        <strong className="font-semibold text-on-surface">My role:</strong> {project.contribution}
      </p>
    </article>
  )
}

function SecondaryProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <article
      className={cx(
        'bg-surface-container-low rounded-2xl p-6 lg:p-8 flex flex-col shadow-lg',
        wide && 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start',
      )}
    >
      <ProjectGallery project={project} className={cx('mb-6', wide && 'lg:mb-0')} />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className={`font-mono-code text-label-caps uppercase ${project.categoryClass}`}>
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 rounded bg-surface-container text-xs font-mono-code text-on-surface-variant shrink-0">
              {project.badge}
            </span>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <ProjectLogo project={project} />
            <div className="min-w-0">
              <h3 className="font-headline-md text-headline-md text-on-surface">{project.title}</h3>
              <p className="font-mono-code text-xs text-outline">{project.client}</p>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
            {project.description}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
            <strong className="font-semibold text-on-surface">My role:</strong> {project.contribution}
          </p>
          <dl className="bg-surface-container p-4 rounded-xl mb-6 space-y-2 font-body-sm text-on-surface">
            {project.facts.map(([label, value, valueClass]) => (
              <div key={label} className="flex items-baseline justify-between gap-4">
                <dt className="text-on-surface-variant shrink-0">{label}</dt>
                <dd className={`font-mono-code text-right ${valueClass}`}>{value}</dd>
              </div>
            ))}
          </dl>
          <TagList
            items={project.stack}
            className="flex flex-wrap gap-2 mb-8"
            tagClassName="px-2 py-0.5 bg-surface-container text-xs text-on-surface-variant"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono-code text-xs text-outline">{project.role}</span>
            <Confidentiality project={project} />
          </div>
          <a
            className="inline-flex items-center gap-1 text-primary hover:text-tertiary font-label-ui text-label-ui font-semibold"
            href="#contact"
          >
            <span>{project.cta}</span>
            <Icon name="arrow_forward" className="text-[16px]" />
          </a>
        </div>
      </div>
    </article>
  )
}

export function SelectedWork() {
  const lastIndex = secondaryProjects.length - 1
  return (
    <section aria-labelledby="work-title" className="w-full bg-surface py-20 lg:py-28" id="work">
      <Container>
        <SectionHeading
          id="work-title"
          eyebrow="ENGINEERED PRODUCTION SYSTEMS"
          title="Selected Work"
          lead="Business systems I have built and maintained for real clients — customer-experience auditing, property marketplaces, healthcare, asset management and government supply chains. Client code is private, so screens are recreated in each product's own branding with illustrative data."
        />
        <FlagshipProject />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {secondaryProjects.map((project, index) => (
            <SecondaryProjectCard
              key={project.slug}
              project={project}
              wide={index === lastIndex && secondaryProjects.length % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
