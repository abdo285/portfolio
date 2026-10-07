import type { CSSProperties } from 'react'
import emaarLogo from '../assets/projects/logos/emaar-msm-checklist.webp'
import hltheraLogo from '../assets/projects/logos/hlthera-dark.webp'
import mohLogo from '../assets/projects/logos/moh-medical-stores.webp'
import momtalakatLogo from '../assets/projects/logos/momtalakat.webp'
import beytiLogo from '../assets/projects/logos/smartech-fixed-assets.webp'

// Colors and fonts are taken from each project's own stylesheets so the covers look like
// the real product. Palette roles feed the portfolio token names via tailwind.mockups.config.ts.
type Palette = {
  page: string
  card: string
  subtle: string
  strong: string
  strongest: string
  text: string
  muted: string
  faint: string
  border: string
  primary: string
  primaryStrong: string
  primarySoft: string
  onPrimary: string
  secondary: string
  tertiary: string
  error: string
}

export type MockTheme = {
  brand: string
  font: string
  logo?: string
  logoClass?: string
  logoChip?: boolean
  wordmark?: { lead: string; leadColor: string; rest: string }
  logoPlacement: 'sidebar' | 'header'
  rail?: boolean
  sidebar: { bg: string; text: string; muted: string; activeBg: string; activeText: string; border?: string }
  header: { bg: string; text: string; border: string; input: string; inputText: string }
  palette: Palette
}

const roles: Record<string, keyof Palette> = {
  surface: 'page',
  'surface-dim': 'page',
  background: 'page',
  'surface-bright': 'card',
  'surface-container-lowest': 'card',
  'surface-container-low': 'card',
  'surface-container': 'subtle',
  'surface-container-high': 'strong',
  'surface-container-highest': 'strongest',
  'surface-variant': 'strongest',
  'surface-tint': 'primary',
  'on-background': 'text',
  'on-surface': 'text',
  'on-surface-variant': 'muted',
  'inverse-surface': 'text',
  'inverse-on-surface': 'card',
  outline: 'faint',
  'outline-variant': 'border',
  primary: 'primary',
  'on-primary': 'onPrimary',
  'primary-container': 'primaryStrong',
  'on-primary-container': 'onPrimary',
  'inverse-primary': 'primary',
  'primary-fixed': 'primarySoft',
  'primary-fixed-dim': 'primary',
  'on-primary-fixed': 'primary',
  'on-primary-fixed-variant': 'primary',
  secondary: 'secondary',
  'on-secondary': 'onPrimary',
  'secondary-container': 'secondary',
  'on-secondary-container': 'onPrimary',
  'secondary-fixed': 'secondary',
  'secondary-fixed-dim': 'secondary',
  'on-secondary-fixed': 'onPrimary',
  'on-secondary-fixed-variant': 'secondary',
  tertiary: 'tertiary',
  'on-tertiary': 'onPrimary',
  'tertiary-container': 'tertiary',
  'on-tertiary-container': 'onPrimary',
  'tertiary-fixed': 'tertiary',
  'tertiary-fixed-dim': 'tertiary',
  'on-tertiary-fixed': 'onPrimary',
  'on-tertiary-fixed-variant': 'tertiary',
  error: 'error',
  'on-error': 'onPrimary',
  'error-container': 'error',
  'on-error-container': 'onPrimary',
}

const channels = (hex: string) => {
  const value = Number.parseInt(hex.slice(1), 16)
  return `${(value >> 16) & 255} ${(value >> 8) & 255} ${value & 255}`
}

export function themeStyle(theme: MockTheme): CSSProperties {
  const vars: Record<string, string> = { '--m-font': theme.font }
  for (const [token, role] of Object.entries(roles)) vars[`--m-${token}`] = channels(theme.palette[role])
  return vars as CSSProperties
}

export const themes = {
  emaar: {
    brand: 'MSM Checklist',
    font: 'Lato',
    logo: emaarLogo,
    logoClass: 'h-5',
    logoPlacement: 'header',
    rail: true,
    sidebar: { bg: '#231F20', text: '#d9d3cb', muted: '#8d857c', activeBg: '#AE9D84', activeText: '#ffffff' },
    header: { bg: '#ffffff', text: '#231F20', border: '#e8e8e8', input: '#f6f3ef', inputText: '#8a8f94' },
    palette: {
      page: '#fdfafa',
      card: '#ffffff',
      subtle: '#f7f3ee',
      strong: '#eee8e0',
      strongest: '#e3dbd0',
      text: '#231F20',
      muted: '#6c757d',
      faint: '#8f949a',
      border: '#e6e0d8',
      primary: '#8f7a5f',
      primaryStrong: '#AE9D84',
      primarySoft: '#f3eee7',
      onPrimary: '#ffffff',
      secondary: '#014f7c',
      tertiary: '#0E1F2F',
      error: '#c0392b',
    },
  },
  momtalakat: {
    brand: 'Momtalakat',
    font: 'Cairo',
    logo: momtalakatLogo,
    logoClass: 'h-14',
    logoPlacement: 'sidebar',
    sidebar: { bg: '#195156', text: '#e3ecec', muted: '#9fb8b9', activeBg: '#cfa861', activeText: '#123F43' },
    header: { bg: '#ffffff', text: '#333333', border: '#e6e9e1', input: '#f3f5ee', inputText: '#5E797B' },
    palette: {
      page: '#FAFBF6',
      card: '#ffffff',
      subtle: '#f2f4ed',
      strong: '#e8ebe1',
      strongest: '#dde1d5',
      text: '#333333',
      muted: '#5E797B',
      faint: '#8a9a9b',
      border: '#e4e7dc',
      primary: '#195156',
      primaryStrong: '#195156',
      primarySoft: '#e6efef',
      onPrimary: '#ffffff',
      secondary: '#9c7a45',
      tertiary: '#5E797B',
      error: '#c0392b',
    },
  },
  fixedAssets: {
    brand: 'Fixed Assets',
    font: 'Nunito',
    logo: beytiLogo,
    logoClass: 'h-9',
    logoPlacement: 'header',
    sidebar: {
      bg: '#ffffff',
      text: '#424242',
      muted: '#9e9e9e',
      activeBg: '#104c97',
      activeText: '#ffffff',
      border: '#e0e0e0',
    },
    header: { bg: '#f7f7f7', text: '#1a2138', border: '#e0e0e0', input: '#ffffff', inputText: '#8f8f8f' },
    palette: {
      page: '#ebebeb',
      card: '#ffffff',
      subtle: '#f4f5f7',
      strong: '#e6e8ec',
      strongest: '#d9dce2',
      text: '#424242',
      muted: '#616161',
      faint: '#8f8f8f',
      border: '#e0e0e0',
      primary: '#104c97',
      primaryStrong: '#104c97',
      primarySoft: '#e3edf8',
      onPrimary: '#ffffff',
      secondary: '#0083bb',
      tertiary: '#2b81a3',
      error: '#d32f2f',
    },
  },
  hlthera: {
    brand: 'Healers',
    font: '-apple-system, "SF Pro Display", Inter',
    logo: hltheraLogo,
    logoClass: 'h-10',
    logoPlacement: 'sidebar',
    sidebar: { bg: '#001428', text: '#c5d3e3', muted: '#6f86a0', activeBg: '#1a406d', activeText: '#ffffff' },
    header: { bg: '#ffffff', text: '#212529', border: '#e6eaee', input: '#f5f7f9', inputText: '#8a96a3' },
    palette: {
      page: '#f5f7f9',
      card: '#ffffff',
      subtle: '#eef3f8',
      strong: '#e1eaf3',
      strongest: '#CBE4FA',
      text: '#212529',
      muted: '#5f6b7a',
      faint: '#8a96a3',
      border: '#e3e8ee',
      primary: '#1a406d',
      primaryStrong: '#2E7AC5',
      primarySoft: '#CBE4FA',
      onPrimary: '#ffffff',
      secondary: '#2E7AC5',
      tertiary: '#1a406d',
      error: '#C31E1E',
    },
  },
  wavesend: {
    brand: 'WaveSend',
    font: '"Segoe UI", system-ui',
    wordmark: { lead: 'Wave', leadColor: '#25D366', rest: 'Send' },
    logoPlacement: 'sidebar',
    sidebar: { bg: '#075E54', text: '#d1f2e6', muted: '#8cc7b8', activeBg: '#128C7E', activeText: '#ffffff' },
    header: { bg: '#ffffff', text: '#111827', border: '#e5e7eb', input: '#f3f4f6', inputText: '#6b7280' },
    palette: {
      page: '#f3f4f6',
      card: '#ffffff',
      subtle: '#f9fafb',
      strong: '#eef0f3',
      strongest: '#e5e7eb',
      text: '#111827',
      muted: '#4b5563',
      faint: '#6b7280',
      border: '#e5e7eb',
      primary: '#128C7E',
      primaryStrong: '#1ebe5a',
      primarySoft: '#dcf8e7',
      onPrimary: '#ffffff',
      secondary: '#15a34a',
      tertiary: '#075E54',
      error: '#dc2626',
    },
  },
  moh: {
    brand: 'Medical Stores',
    font: 'Poppins, "Noto Kufi Arabic"',
    logo: mohLogo,
    logoClass: 'h-10',
    logoChip: true,
    logoPlacement: 'sidebar',
    sidebar: { bg: '#0070c4', text: '#e7f1fe', muted: '#a9cdee', activeBg: '#005fa6', activeText: '#ffffff' },
    header: { bg: '#0070c4', text: '#ffffff', border: '#1a7fca', input: '#1a7fca', inputText: '#d6e8fa' },
    palette: {
      page: '#f7f7f7',
      card: '#ffffff',
      subtle: '#f1f6fc',
      strong: '#e7f1fe',
      strongest: '#d3e5fb',
      text: '#333333',
      muted: '#5c6670',
      faint: '#8a9199',
      border: '#e3e8ee',
      primary: '#0070c4',
      primaryStrong: '#0070c4',
      primarySoft: '#e7f1fe',
      onPrimary: '#ffffff',
      secondary: '#0b937f',
      tertiary: '#06487a',
      error: '#d02627',
    },
  },
} satisfies Record<string, MockTheme>
