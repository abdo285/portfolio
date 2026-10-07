// Renders the dev-only project mockups (mockups.html) and writes optimized WebP screenshots
// to src/assets/projects/<slug>-<n>.webp (three screens per project) plus <slug>-<n>-thumb.webp.
//
// Usage: npm run covers [-- <slug>[:<n>] ...]   (set CHROME_PATH to use a system Chrome)
import { mkdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { chromium } from 'playwright'
import sharp from 'sharp'
import { createServer } from 'vite'

const OUT = 'src/assets/projects'
const SCREENS = [1, 2, 3]
const SLUGS = [
  'emaar-msm-checklist',
  'momtalakat',
  'smartech-fixed-assets',
  'hlthera',
  'wavesend',
  'moh-medical-stores',
]
const args = process.argv.slice(2)
const jobs = (args.length ? args : SLUGS).flatMap((arg) => {
  const [slug, n] = arg.split(':')
  return (n ? [Number(n)] : SCREENS).map((screen) => ({ slug, screen }))
})

mkdirSync(OUT, { recursive: true })
const server = await createServer({ server: { port: 4319, strictPort: true }, logLevel: 'error' })
await server.listen()
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined })
// 1280x800 CSS pixels at 1.25x keeps UI text legible when the screenshot is scaled down in cards.
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1.25 })

try {
  for (const { slug, screen } of jobs) {
    await page.goto(`http://localhost:4319/mockups.html?p=${slug}&s=${screen}`, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    const png = await page.locator('#cover > div').screenshot()
    const file = join(OUT, `${slug}-${screen}.webp`)
    await sharp(png).webp({ quality: 80, effort: 6 }).toFile(file)
    const thumb = join(OUT, `${slug}-${screen}-thumb.webp`)
    await sharp(png).resize(480).webp({ quality: 72, effort: 6 }).toFile(thumb)
    console.log(`${file}  ${(statSync(file).size / 1024).toFixed(0)} KB  (thumb ${(statSync(thumb).size / 1024).toFixed(0)} KB)`)
  }
} finally {
  await browser.close()
  await server.close()
}
