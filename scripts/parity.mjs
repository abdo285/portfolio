// Visual parity check: screenshots the original Stitch HTML and this build at the
// same viewports, then writes per-viewport diff images and mismatch percentages.
//
// Usage: node scripts/parity.mjs <original-url> <build-url> [out-dir]
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import pixelmatch from 'pixelmatch'
import { chromium } from 'playwright'
import { PNG } from 'pngjs'

const [originalUrl, buildUrl, outDir = 'parity-output'] = process.argv.slice(2)
if (!originalUrl || !buildUrl) {
  console.error('Usage: node scripts/parity.mjs <original-url> <build-url> [out-dir]')
  process.exit(1)
}

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

const freeze = `*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}`

async function capture(browser, url, viewport) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 })
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.addStyleTag({ content: freeze })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(500)
  const buffer = await page.screenshot({ fullPage: true })
  await page.close()
  return PNG.sync.read(buffer)
}

function pad(png, width, height) {
  if (png.width === width && png.height === height) return png
  const out = new PNG({ width, height })
  out.data.fill(0)
  PNG.bitblt(png, out, 0, 0, png.width, png.height, 0, 0)
  return out
}

mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined })
const results = []

for (const viewport of viewports) {
  const a = await capture(browser, originalUrl, viewport)
  const b = await capture(browser, buildUrl, viewport)
  const width = Math.max(a.width, b.width)
  const height = Math.max(a.height, b.height)
  const pa = pad(a, width, height)
  const pb = pad(b, width, height)
  const diff = new PNG({ width, height })
  const mismatched = pixelmatch(pa.data, pb.data, diff.data, width, height, { threshold: 0.1 })

  writeFileSync(join(outDir, `${viewport.name}-original.png`), PNG.sync.write(a))
  writeFileSync(join(outDir, `${viewport.name}-build.png`), PNG.sync.write(b))
  writeFileSync(join(outDir, `${viewport.name}-diff.png`), PNG.sync.write(diff))

  results.push({
    viewport: viewport.name,
    originalHeight: a.height,
    buildHeight: b.height,
    mismatchedPixels: mismatched,
    mismatchPercent: +((mismatched / (width * height)) * 100).toFixed(3),
  })
}

await browser.close()
console.table(results)
