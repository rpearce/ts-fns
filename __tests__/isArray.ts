import assert from 'node:assert/strict'
import { isArray } from '../source/index.js'
import { test } from 'node:test'

test('isArray returns a boolean', () => {
  assert.deepStrictEqual(isArray(null), false)
  assert.deepStrictEqual(isArray(undefined), false)
  assert.deepStrictEqual(isArray(1), false)
  assert.deepStrictEqual(isArray('[1]'), false)
  assert.deepStrictEqual(isArray({}), false)
  assert.deepStrictEqual(isArray({ length: 0 }), false)
  assert.deepStrictEqual(isArray([]), true)
  assert.deepStrictEqual(isArray([1]), true)
})
