// Regenerates the self-hosted Material Symbols subset from the icon names used in src/.
// Picks up `<Icon name="..." />` usages and `icon: '...'` entries in content arrays.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const SRC = 'src'
const OUT = 'src/assets/fonts/material-symbols-outlined-subset.woff2'
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry)
    return statSync(path).isDirectory() ? walk(path) : /\.tsx?$/.test(path) ? [path] : []
  })
}

const names = new Set()
for (const file of walk(SRC)) {
  const text = readFileSync(file, 'utf8')
  for (const m of text.matchAll(/<Icon[^>]*\sname="([a-z0-9_]+)"/g)) names.add(m[1])
  for (const m of text.matchAll(/\bicon:\s*'([a-z0-9_]+)'/g)) names.add(m[1])
}

const iconNames = [...names].sort()
const cssUrl =
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' +
  `&icon_names=${iconNames.join(',')}&display=block`

const css = await (await fetch(cssUrl, { headers: { 'User-Agent': UA } })).text()
const fontUrl = css.match(/url\((https:[^)]+)\)/)?.[1]
if (!fontUrl) throw new Error(`Could not find font URL in Google Fonts response:\n${css}`)

const font = Buffer.from(await (await fetch(fontUrl)).arrayBuffer())
writeFileSync(OUT, font)
console.log(`Wrote ${OUT} (${font.length} bytes) with ${iconNames.length} icons:\n${iconNames.join(', ')}`)
