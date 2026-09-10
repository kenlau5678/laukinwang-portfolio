import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

test('includes the path tracing course project and its supplied image', () => {
  const source = readFileSync(new URL('../src/Data/portfolio.ts', import.meta.url), 'utf8')

  assert.match(source, /title: "Path Tracing Renderer"/)
  assert.match(
    source,
    /Implemented a CPU-based renderer featuring ray casting, Whitted-style reflection and refraction, path tracing, area lights, soft shadows, Russian roulette, BVH acceleration/,
  )
  assert.match(source, /tech: \["C\+\+", "Path Tracing"\]/)
  assert.ok(existsSync(new URL('../src/assets/PathTracing.jpg', import.meta.url)))
})
