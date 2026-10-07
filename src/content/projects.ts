const assets = import.meta.glob<string>('../assets/projects/**/*.webp', { eager: true, import: 'default' })

function asset(name: string) {
  const url = assets[`../assets/projects/${name}.webp`]
  if (!url) throw new Error(`Missing project asset: ${name}`)
  return url
}

const shot = (slug: string, n: number) => ({ src: asset(`${slug}-${n}`), thumb: asset(`${slug}-${n}-thumb`) })
// Every claim here is traceable to the project's source code or git history. Screens are
// rendered from src/mockups in each product's own theme with illustrative data (npm run covers),
// not production data. Logos are the ones shipped in each product's frontend.

export type ProjectImage = { src: string; thumb: string; alt: string; caption: string }

export type ProjectLogo =
  | { kind: 'image'; src: string; alt: string; background: string }
  | { kind: 'wordmark'; lead: string; leadColor: string; rest: string; background: string }

export type Project = {
  slug: string
  title: string
  client: string
  category: string
  categoryClass: string
  badge: string
  description: string
  contribution: string
  facts: [label: string, value: string, valueClass: string][]
  stack: string[]
  role: string
  confidentiality: 'Private / Confidential' | 'Private repository'
  logo: ProjectLogo
  images: [ProjectImage, ProjectImage, ProjectImage]
  cta: string
}

export type FlagshipProject = Project & {
  status: string
  features: { title: string; body: string }[]
  caseStudy: {
    title: string
    tags: string[]
    challenge: string
    solution: string
    outcome: string
    layers: { title: string; body: string; tags: string[] }[]
  }
}

export const flagshipProject: FlagshipProject = {
  slug: 'emaar-msm-checklist',
  title: 'Emaar MSM Checklist & Project Tracker',
  client: 'Emaar · Al-Futtaim · DCT · Qualidad',
  category: 'CX AUDITING & PROJECT TRACKING',
  categoryClass: 'text-primary',
  badge: '252 commits',
  status: 'Production · Azure App Service',
  description:
    'Customer-experience audit platform that runs mystery-shopping programmes across Emaar business units — hospitality, malls, entertainment and properties — and is deployed for Al-Futtaim, DCT and Qualidad from the same codebase. Visits are scheduled, scored against checklists, reviewed and turned into action plans, with executive reporting and a built-in tracker for projects, milestones and change requests.',
  contribution:
    'Full-stack developer and the most active recent contributor: checklist rendering and review with answer history, star-rating questions, the reschedule-request workflow, role-based dashboards, dynamic email templates, Arabic localisation and Excel/PDF exports.',
  features: [
    {
      title: 'Checklist-driven audits:',
      body: 'Scheduled mystery-shopper visits, weighted checklists and QA review with full answer history.',
    },
    {
      title: 'Score analytics & reporting:',
      body: 'Quarterly, year-to-date and comparison dashboards plus a generated Service Excellence PDF report.',
    },
    {
      title: 'AI-assisted reviews:',
      body: 'Image-aware comment suggestions through Azure OpenAI, with Gemini and DeepSeek as alternative providers.',
    },
    {
      title: 'Workflows & automation:',
      body: 'Action plans, visit reschedule approvals and Hangfire jobs for overdue schedules and notifications.',
    },
  ],
  facts: [],
  stack: ['.NET 8 Web API', 'Angular 18', 'SQL Server', 'EF Core', 'Hangfire', 'Azure OpenAI', 'PrimeNG', 'Syncfusion'],
  role: 'ROLE: FULL-STACK DEVELOPER · 2025–2026',
  confidentiality: 'Private / Confidential',
  logo: { kind: 'image', src: asset('logos/emaar-msm-checklist'), alt: 'Emaar logo', background: '#ffffff' },
  images: [
    {
      ...shot('emaar-msm-checklist', 1),
      caption: 'Service excellence dashboard',
      alt: 'MSM Checklist service excellence dashboard with overall score, visits completed, scores by business unit, quarterly comparison and recent visits (illustrative data)',
    },
    {
      ...shot('emaar-msm-checklist', 2),
      caption: 'Checklist review',
      alt: 'Checklist review of a mystery-shopping visit with weighted sections, yes/no and star-rating questions, an AI-suggested comment and answer history (illustrative data)',
    },
    {
      ...shot('emaar-msm-checklist', 3),
      caption: 'Project tracker',
      alt: 'Project tracker Gantt timeline with programmes, milestones and change requests (illustrative data)',
    },
  ],
  cta: 'Explore Deep Dive',
  caseStudy: {
    title: 'Case Study: MSM Checklist Platform',
    tags: ['Layered Architecture', 'Repository + Unit of Work'],
    challenge:
      'Mystery-shopping programmes span hotels, malls, entertainment venues and sales centres. Each visit has to be scheduled, scored consistently, reviewed and followed up — across many locations, shopper agencies and business units, in English and Arabic.',
    solution:
      'A .NET 8 Web API and an Angular 18 SPA that model the whole audit lifecycle: checklist-driven visits, workflow-based reschedules, action plans with members and comments, score dashboards and a QuestPDF Service Excellence report, alongside a project tracker with Gantt and Kanban views.',
    outcome:
      'One codebase serves Emaar, Al-Futtaim, DCT and Qualidad through environment-specific deployments. GitLab CI builds and ships the API and portal to Azure App Service, and Hangfire keeps schedules, project milestones and notifications up to date without manual follow-up.',
    layers: [
      {
        title: 'Client & Presentation Layer (Angular 18)',
        body: 'Lazy-loaded checklist, dashboard and project-tracker modules; PrimeNG and Syncfusion Gantt/Kanban; English/Arabic via ngx-translate',
        tags: ['Angular 18', 'Syncfusion'],
      },
      {
        title: 'API & Security (.NET 8 Web API)',
        body: 'Privilege-based JWT action filter, refresh tokens with session tracking, login lockout and rate limiting',
        tags: ['JWT', 'Refresh Tokens'],
      },
      {
        title: 'Business Logic Layer (BLL Services)',
        body: 'Scoring, workflows, AI-generated comments, email templates and PDF reporting; Hangfire recurring jobs',
        tags: ['Hangfire', 'QuestPDF'],
      },
      {
        title: 'Data & Cloud Infrastructure (SQL Server & Azure)',
        body: 'EF Core over SQL Server with repository + unit of work and stored procedures; Blob Storage, Key Vault and Microsoft Graph',
        tags: ['EF Core 7', 'Azure'],
      },
    ],
  },
}

export const secondaryProjects: Project[] = [
  {
    slug: 'momtalakat',
    title: 'Momtalakat Real-Estate Marketplace',
    client: 'Momtalakat (Oman)',
    category: 'PROPTECH MARKETPLACE · OMAN',
    categoryClass: 'text-secondary',
    badge: '127 commits',
    description:
      'Bilingual Arabic/English property marketplace for Oman that brings buyers, agents and agencies onto one multi-tenant platform: listings, live auctions, purchase offers, viewing requests, land valuation and transactions with commission splits.',
    contribution:
      'Mostly frontend: landing page, the add-listing wizard with uploads and maps, service agreements, national-ID OCR integration, viewing requests and the admin dashboard.',
    facts: [
      ['Live auctions:', 'Real-time bids over SignalR', 'text-secondary'],
      ['AI & OCR:', 'Gemini advisor · Tesseract ID OCR', 'text-on-surface'],
      ['Quality:', '960+ xUnit tests', 'text-on-surface'],
    ],
    stack: ['.NET 8', 'Angular 18', 'SQL Server', 'Redis', 'Hangfire', 'SignalR', 'Google Maps'],
    role: 'ROLE: FULL-STACK DEVELOPER',
    confidentiality: 'Private / Confidential',
    logo: { kind: 'image', src: asset('logos/momtalakat'), alt: 'Momtalakat logo', background: '#195156' },
    images: [
      {
        ...shot('momtalakat', 1),
        caption: 'Agency dashboard',
        alt: 'Momtalakat agency dashboard in Arabic with active listings, live auction bids and purchase offers (illustrative data)',
      },
      {
        ...shot('momtalakat', 2),
        caption: 'Add-listing wizard',
        alt: 'Arabic add-listing wizard with a map location picker, national ID OCR extraction and photo uploads (illustrative data)',
      },
      {
        ...shot('momtalakat', 3),
        caption: 'Viewings & purchase cycle',
        alt: 'Arabic viewing requests with a weekly availability grid and purchase-cycle progress (illustrative data)',
      },
    ],
    cta: 'Discuss a similar platform',
  },
  {
    slug: 'smartech-fixed-assets',
    title: 'Smarttech Fixed Assets',
    client: 'Smarttech product · Beyti deployment',
    category: 'ENTERPRISE ASSET MANAGEMENT',
    categoryClass: 'text-tertiary',
    badge: 'Security hardening',
    description:
      'Fixed-asset lifecycle product for enterprises: asset register, purchasing and disposal, depreciation books, RFID and barcode inventory counts, and multi-stage maker/checker approvals — with Zebra RFID label printing from a desktop companion app.',
    contribution:
      'Remediated penetration-test findings: token revocation via security stamps, server-side workflow transition rules, authenticated report host, pagination limits and security headers, backed by regression tests.',
    facts: [
      ['Approvals:', 'Multi-stage maker / checker', 'text-tertiary'],
      ['Identity:', 'JWT · Active Directory (LDAP)', 'text-on-surface'],
      ['Reporting:', '23 RDLC reports', 'text-on-surface'],
    ],
    stack: ['.NET 6', 'Angular 12', 'SQL Server', 'EF Core', 'Hangfire', 'RDLC', 'WPF'],
    role: 'ROLE: BACKEND / SECURITY',
    confidentiality: 'Private / Confidential',
    logo: { kind: 'image', src: asset('logos/smartech-fixed-assets'), alt: 'Beyti logo (client deployment)', background: '#ffffff' },
    images: [
      {
        ...shot('smartech-fixed-assets', 1),
        caption: 'Asset register',
        alt: 'Fixed Assets register with RFID-tagged assets, approval queue and depreciation chart (illustrative data)',
      },
      {
        ...shot('smartech-fixed-assets', 2),
        caption: 'Maker / checker approval',
        alt: 'Asset movement request moving through maker, checker and finance approval stages (illustrative data)',
      },
      {
        ...shot('smartech-fixed-assets', 3),
        caption: 'RFID inventory count',
        alt: 'Inventory count session with progress by location and live RFID and barcode reads (illustrative data)',
      },
    ],
    cta: 'Discuss a security review',
  },
  {
    slug: 'hlthera',
    title: 'Hlthera Healthcare Network & Telehealth',
    client: 'Hlthera',
    category: 'HEALTHTECH · TELEHEALTH',
    categoryClass: 'text-primary',
    badge: '4 Angular apps',
    description:
      'Healthcare social network and telehealth platform: practitioner profiles and a community feed, bookings with availability and ratings, video consultations, patient health profiles and identity verification — one .NET backend serving four Angular apps.',
    contribution:
      'Connected the frontends to the backend, built healer and health-center onboarding flows, the permissions UI, report-service wiring, reusable grids and the appointment calendar.',
    facts: [
      ['Video consults:', 'Zoom Video SDK · 100ms', 'text-primary'],
      ['Verification:', 'Onfido identity checks', 'text-on-surface'],
      ['Real-time:', 'SignalR chat · Firebase push', 'text-on-surface'],
    ],
    stack: ['.NET 6', 'Angular 14 / 17', 'SQL Server', 'EF Core', 'Hangfire', 'SignalR', 'Docker'],
    role: 'ROLE: FULL-STACK CONTRIBUTOR',
    confidentiality: 'Private / Confidential',
    logo: { kind: 'image', src: asset('logos/hlthera'), alt: 'Hlthera Engage logo', background: '#ffffff' },
    images: [
      {
        ...shot('hlthera', 1),
        caption: 'Bookings & availability',
        alt: 'Hlthera Healers booking calendar with video and in-clinic consultations and a community feed (illustrative data)',
      },
      {
        ...shot('hlthera', 2),
        caption: 'Healer dashboard',
        alt: 'Healer dashboard with today’s sessions, sessions per day and rating breakdown (illustrative data)',
      },
      {
        ...shot('hlthera', 3),
        caption: 'Onboarding & permissions',
        alt: 'Healer and health-center onboarding with identity verification steps and a roles and permissions matrix (illustrative data)',
      },
    ],
    cta: 'Discuss a similar platform',
  },
  {
    slug: 'wavesend',
    title: 'WaveSend WhatsApp Campaign Platform',
    client: 'Freelance',
    category: 'MESSAGING AUTOMATION · FREELANCE',
    categoryClass: 'text-secondary',
    badge: 'Sole developer',
    description:
      'WhatsApp Business bulk-messaging system for marketing and service campaigns: import contacts from Excel or CSV, sync approved Meta templates, schedule personalised campaigns and track delivery and read rates live.',
    contribution:
      'Designed and built end to end: Express API, Prisma schema, BullMQ send worker, Meta Cloud API integration and the React dashboard.',
    facts: [
      ['Throughput:', 'Rate-limited queue with retries', 'text-secondary'],
      ['Webhooks:', 'HMAC-verified status updates', 'text-on-surface'],
      ['Compliance:', 'STOP / إلغاء opt-out handling', 'text-on-surface'],
    ],
    stack: ['Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Redis · BullMQ', 'React'],
    role: 'ROLE: SOLE DEVELOPER',
    confidentiality: 'Private repository',
    logo: { kind: 'wordmark', lead: 'Wave', leadColor: '#25D366', rest: 'Send', background: '#075E54' },
    images: [
      {
        ...shot('wavesend', 1),
        caption: 'Campaign dashboard',
        alt: 'WaveSend dashboard with contact and template counts, messages by status chart and campaign progress (illustrative data)',
      },
      {
        ...shot('wavesend', 2),
        caption: 'Contact import',
        alt: 'Excel contact import with column mapping and E.164 phone validation results (illustrative data)',
      },
      {
        ...shot('wavesend', 3),
        caption: 'Campaign delivery',
        alt: 'Running campaign with a delivery funnel, WhatsApp template preview and message status log (illustrative data)',
      },
    ],
    cta: 'Discuss a messaging integration',
  },
  {
    slug: 'moh-medical-stores',
    title: 'Ministry of Health Medical Stores',
    client: 'Ministry of Health and Population',
    category: 'GOVERNMENT HEALTHCARE SUPPLY CHAIN',
    categoryClass: 'text-tertiary',
    badge: 'Query 46s → 0.3s',
    description:
      'Procurement, inventory and RFID warehouse system for ministry medical stores: purchase requests, tenders and orders, receiving and inspection, stock across a store hierarchy, withdrawals with approval workflows, and over a hundred printable reports.',
    contribution:
      'Maintenance and reliability engineering on a five-year-old codebase: rewrote a location-hierarchy query that timed out (about 46 s to 0.3 s), stopped duplicate purchase requests, fixed silently lost uploads and stock missed on child store nodes.',
    facts: [
      ['Scale:', '116 API controllers · 236 migrations', 'text-tertiary'],
      ['RFID:', 'Reader & camera events via SignalR', 'text-on-surface'],
      ['Reporting:', '124 RDLC reports', 'text-on-surface'],
    ],
    stack: ['.NET 6', 'Angular 10', 'SQL Server', 'EF Core', 'Hangfire', 'SignalR', 'RDLC'],
    role: 'ROLE: MAINTENANCE ENGINEER',
    confidentiality: 'Private / Confidential',
    logo: { kind: 'image', src: asset('logos/moh-medical-stores'), alt: 'Ministry of Health and Population logo', background: '#ffffff' },
    images: [
      {
        ...shot('moh-medical-stores', 1),
        caption: 'Procurement overview',
        alt: 'Medical stores overview with procurement pipeline, purchase orders, stock by store and RFID scan log (illustrative data)',
      },
      {
        ...shot('moh-medical-stores', 2),
        caption: 'Stores & stock',
        alt: 'Store hierarchy with batch stock, expiry dates and stagnant-stock alerts (illustrative data)',
      },
      {
        ...shot('moh-medical-stores', 3),
        caption: 'Purchase request',
        alt: 'Purchase request lines with an approval chain and related printable reports (illustrative data)',
      },
    ],
    cta: 'Discuss a legacy rescue',
  },
]
