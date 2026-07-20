import { F } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('F always returns false', () => {
  assert.deepStrictEqual(F(), false)

  // @ts-expect-error F takes no arguments; stray arguments must still be tolerated
  assert.deepStrictEqual(F(null), false)

  // @ts-expect-error F takes no arguments; stray arguments must still be tolerated
  assert.deepStrictEqual(F('ignored'), false)
})
