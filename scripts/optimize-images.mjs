#!/usr/bin/env bun
// In-place optimizer for public/images.
// - Resizes anything wider than MAX_WIDTH down to MAX_WIDTH (preserves aspect).
// - Recompresses JPG at quality 80 (mozjpeg), PNG with palette+effort, WEBP at q 80.
// - Skips files where the re-encoded output is not at least MIN_SAVINGS smaller.
// - Walks public/images recursively. Leaves SVG/ICO/GIF alone.

import { readdir, stat, readFile, writeFile, rename, unlink } from 'node:fs/promises'
import { extname, join } from 'node:path'
import sharp from 'sharp'

const ROOT = new URL('../public/images/', import.meta.url).pathname
const MAX_WIDTH = 1800
const JPG_QUALITY = 80
const WEBP_QUALITY = 80
const MIN_SAVINGS_BYTES = 4 * 1024 // skip rewrite if savings < 4KB

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp'])

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(p)
    else if (entry.isFile() && exts.has(extname(entry.name).toLowerCase())) yield p
  }
}

function fmt(bytes) {
  if (bytes > 1024 * 1024) return (bytes / 1024 / 1024).toFixed(2) + 'M'
  if (bytes > 1024) return (bytes / 1024).toFixed(0) + 'K'
  return bytes + 'B'
}

async function optimize(file) {
  const ext = extname(file).toLowerCase()
  const origBuf = await readFile(file)
  const origSize = origBuf.byteLength

  let pipeline = sharp(origBuf, { failOn: 'none' })
  const meta = await pipeline.metadata()
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }

  let outBuf
  if (ext === '.jpg' || ext === '.jpeg') {
    outBuf = await pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toBuffer()
  } else if (ext === '.png') {
    // For photographic PNGs, often huge gains by switching to JPG; but to keep paths stable,
    // recompress as PNG with palette quantization. Has alpha? keep alpha.
    outBuf = await pipeline.png({ compressionLevel: 9, palette: true, effort: 10 }).toBuffer()
  } else if (ext === '.webp') {
    outBuf = await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer()
  } else {
    return null
  }

  const savings = origSize - outBuf.byteLength
  if (savings < MIN_SAVINGS_BYTES) {
    return { file, origSize, newSize: origSize, skipped: true, resized: meta.width > MAX_WIDTH }
  }

  const tmp = file + '.opt.tmp'
  await writeFile(tmp, outBuf)
  await rename(tmp, file)
  return { file, origSize, newSize: outBuf.byteLength, skipped: false, resized: meta.width > MAX_WIDTH }
}

const results = []
let totalBefore = 0
let totalAfter = 0
for await (const f of walk(ROOT)) {
  try {
    const r = await optimize(f)
    if (!r) continue
    results.push(r)
    totalBefore += r.origSize
    totalAfter += r.newSize
    const tag = r.skipped ? 'skip' : r.resized ? 'RESIZE' : 'recomp'
    console.log(
      `[${tag.padEnd(6)}] ${f.replace(ROOT, '')}  ${fmt(r.origSize)} → ${fmt(r.newSize)}`
    )
  } catch (err) {
    console.error(`[ERR] ${f}: ${err.message}`)
  }
}

console.log('\n=== summary ===')
console.log(`files:        ${results.length}`)
console.log(`total before: ${fmt(totalBefore)}`)
console.log(`total after:  ${fmt(totalAfter)}`)
console.log(`saved:        ${fmt(totalBefore - totalAfter)}  (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`)
