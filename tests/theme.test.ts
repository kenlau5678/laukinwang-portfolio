import assert from 'node:assert/strict'
import test from 'node:test'

test('resolves and toggles the site theme', async () => {
  const theme = await import('../src/theme.ts').catch(() => null)

  assert.ok(theme, 'theme helpers should exist')
  assert.equal(theme.resolveInitialTheme(null, true), 'dark')
  assert.equal(theme.resolveInitialTheme(null, false), 'light')
  assert.equal(theme.resolveInitialTheme('light', true), 'light')
  assert.equal(theme.nextTheme('light'), 'dark')
  assert.equal(theme.nextTheme('dark'), 'light')
  assert.equal(theme.getRevealRadius(100, 100, 200, 200), Math.hypot(100, 100))
  assert.equal(theme.getRevealRadius(20, 30, 200, 100), Math.hypot(180, 70))
})
