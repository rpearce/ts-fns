import assert from 'node:assert/strict'
import { isObject } from '../source/index.js'
import { test } from 'node:test'

test('isObject returns a boolean', () => {
  assert.deepStrictEqual(isObject(null), false)
  assert.deepStrictEqual(isObject(undefined), false)
  assert.deepStrictEqual(isObject(0), false)
  assert.deepStrictEqual(isObject(''), false)
  assert.deepStrictEqual(isObject('foo'), false)
  assert.deepStrictEqual(isObject([]), false)
  assert.deepStrictEqual(isObject(() => ({})), false)
  assert.deepStrictEqual(isObject(new Date()), false)
  assert.deepStrictEqual(isObject({}), true)
  assert.deepStrictEqual(isObject({ foo: 'bar' }), true)
  assert.deepStrictEqual(isObject(Object.create(null)), true)
})
