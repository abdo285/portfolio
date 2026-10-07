import { useState, type FormEvent } from 'react'
import { site } from '../../content/site'
import { cx } from '../../lib/cx'
import { Container } from '../Container'
import { Icon } from '../Icon'
import { Eyebrow } from '../SectionHeading'

const projectTypes = ['Full-Time Role', 'Custom Business System', 'Angular / .NET Architecture', 'Codebase Audit']

const channels = [
  {
    href: `mailto:${site.contactEmail}`,
    icon: 'mail',
    iconWrap: 'bg-primary/10 text-primary',
    hover: 'group-hover:text-primary',
    label: 'DIRECT EMAIL',
    value: site.contactEmail,
    external: false,
  },
  {
    href: site.whatsapp.href,
    icon: 'chat',
    iconWrap: 'bg-[#25D366]/10 text-[#25D366]',
    hover: 'group-hover:text-[#25D366]',
    label: 'WHATSAPP',
    value: site.whatsapp.label,
    external: true,
  },
  {
    href: site.linkedin.href,
    icon: 'share',
    iconWrap: 'bg-secondary/10 text-secondary',
    hover: 'group-hover:text-secondary',
    label: 'PROFESSIONAL NETWORK',
    value: site.linkedin.label,
    external: true,
  },
  {
    href: site.github.href,
    icon: 'terminal',
    iconWrap: 'bg-tertiary/10 text-tertiary',
    hover: 'group-hover:text-tertiary',
    label: 'SOURCE REPOSITORIES',
    value: site.github.label,
    external: true,
  },
]

const fieldClass =
  'w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-sm placeholder:text-outline/60 focus:outline-none focus:ring-1 focus:ring-primary'
const labelClass = 'block font-label-caps text-xs text-outline uppercase'

type Status = 'idle' | 'sending' | 'success' | 'error'

async function deliver(payload: Record<string, string>) {
  if (site.contactEndpoint) {
    const response = await fetch(site.contactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) throw new Error(`Contact endpoint responded ${response.status}`)
    return
  }

  const subject = `Portfolio inquiry from ${payload.name}`
  const body = [
    `Type: ${payload.projectTypes || 'Not specified'}`,
    `From: ${payload.name} <${payload.email}>`,
    '',
    payload.message,
  ].join('\n')
  window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function InquiryForm() {
  const [selected, setSelected] = useState<string[]>([])
  const [status, setStatus] = useState<Status>('idle')

  const toggle = (type: string) =>
    setSelected((current) => (current.includes(type) ? current.filter((t) => t !== type) : [...current, type]))

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setStatus('sending')
    try {
      await deliver({
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        message: String(data.get('message') ?? ''),
        projectTypes: selected.join(', '),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="space-y-5" id="contactForm" onSubmit={handleSubmit} aria-busy={status === 'sending'}>
      <div role="group" aria-labelledby="project-type-label">
        <span id="project-type-label" className={cx(labelClass, 'mb-2')}>
          Project or Role Type
        </span>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => {
            const isSelected = selected.includes(type)
            return (
              <button
                key={type}
                type="button"
                aria-pressed={isSelected}
                onClick={() => toggle(type)}
                className={cx(
                  'px-3 py-1.5 rounded-lg font-label-ui text-xs font-medium hover:bg-surface-bright transition-colors',
                  isSelected ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface',
                )}
              >
                {type}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className={cx(labelClass, 'mb-1')}>
            Your Name
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            placeholder="Alex Mercer"
            required
            type="text"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={cx(labelClass, 'mb-1')}>
            Work Email
          </label>
          <input
            id="contact-email"
            name="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="alex@company.com"
            required
            type="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={cx(labelClass, 'mb-1')}>
          Overview / Objectives
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={cx(fieldClass, 'resize-none')}
          placeholder="Briefly describe what you're building, key constraints, or the role details..."
          required
          rows={4}
        />
      </div>

      <button
        className="w-full py-3.5 rounded-xl bg-primary-container text-on-primary-container font-label-ui text-label-ui font-semibold shadow-lg shadow-primary-container/20 hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        type="submit"
        disabled={status === 'sending'}
      >
        <span>Send Message</span>
        <Icon name="send" className="text-[18px]" />
      </button>

      <div
        role="status"
        className={cx(
          'p-3 rounded-lg font-mono-code text-xs text-center',
          status === 'error' ? 'bg-error/10 text-error' : 'bg-secondary/10 text-secondary',
          status !== 'success' && status !== 'error' && 'hidden',
        )}
      >
        {status === 'success' && '✓ Message dispatched! Thank you for reaching out. I will respond within 24 hours.'}
        {status === 'error' && `Something went wrong sending your message. Please email ${site.contactEmail} directly.`}
      </div>
    </form>
  )
}

export function Contact() {
  return (
    <section aria-labelledby="contact-title" className="w-full bg-surface-container-lowest py-20 lg:py-28" id="contact">
      <Container>
        <div className="bg-surface-container-low rounded-3xl p-8 lg:p-14 shadow-2xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Eyebrow>INITIATE CONTACT</Eyebrow>
                <h2
                  id="contact-title"
                  className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4"
                >
                  Have a project or opportunity in mind?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                  Whether you&apos;re looking for a Full-Stack Developer to join your team or need a tailored
                  digital platform built from the ground up, let&apos;s explore how we can work together.
                </p>
                <ul className="space-y-4 mb-8">
                  {channels.map((channel) => (
                    <li key={channel.label}>
                      <a
                        className="flex items-center gap-4 p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors group"
                        href={channel.href}
                        {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${channel.iconWrap}`}
                        >
                          <Icon name={channel.icon} />
                        </div>
                        <div>
                          <span className="text-xs font-mono-code text-outline block">{channel.label}</span>
                          <span
                            className={`font-headline-sm text-sm text-on-surface transition-colors ${channel.hover}`}
                          >
                            {channel.value}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-xs font-mono-code text-outline">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-secondary" />
                <span>Available for engagements · Typical response time: &lt; 24h</span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-container p-6 lg:p-8 rounded-2xl">
              <h3 className="font-headline-sm text-lg text-on-surface mb-6">Send an Inquiry</h3>
              <InquiryForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
