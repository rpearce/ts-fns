import { T } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('T always returns true', () => {
  assert.deepStrictEqual(T(), true)

  // @ts-expect-error T takes no arguments; stray arguments must still be tolerated
  assert.deepStrictEqual(T(null), true)

  // @ts-expect-error T takes no arguments; stray arguments must still be tolerated
  assert.deepStrictEqual(T('ignored'), true)
})
