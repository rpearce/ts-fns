import assert from 'node:assert/strict'
import { isFunctor } from '../source/index.js'
import { test } from 'node:test'

test('isFunction returns a boolean', () => {
  assert.deepStrictEqual(isFunctor(null), false)
  assert.deepStrictEqual(isFunctor(undefined), false)
  assert.deepStrictEqual(isFunctor(42), false)
  assert.deepStrictEqual(isFunctor('str'), false)
  assert.deepStrictEqual(isFunctor({}), false)
  assert.deepStrictEqual(isFunctor({ map: 'not a function' }), false)
  assert.deepStrictEqual(isFunctor([]), true)
  assert.deepStrictEqual(isFunctor([1, 2, 3]), true)
  assert.deepStrictEqual(isFunctor({ map: () => ({}) }), true)
})
