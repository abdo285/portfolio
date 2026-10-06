export const site = {
  name: 'Abdo Elbeherey',
  fullName: 'Abdalfatah (Abdo) Elbeherey',
  role: 'Full-Stack Developer · .NET · Angular',
  availability: 'Available for Q2 projects',
  contactEmail: 'abdoelbeherey@gmail.com',
  linkedin: {
    label: 'linkedin.com/in/abdalfattah-elbeherey-351744203',
    href: 'https://www.linkedin.com/in/abdalfattah-elbeherey-351744203/',
  },
  github: {
    label: 'github.com/abdo285',
    href: 'https://github.com/abdo285',
  },
  /** Optional form backend (e.g. Formspree). Falls back to a pre-filled mailto: link. */
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined,
} as const

export const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'process', label: 'Process' },
  { id: 'services', label: 'Services' },
] as const

export type SectionId = (typeof navItems)[number]['id']
