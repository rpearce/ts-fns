import assert from 'node:assert/strict'
import { isFunction } from '../source/isFunction.js'
import { test } from 'node:test'

test('isFunction returns a boolean', () => {
  const baz = function baz () { return 1 }

  assert.deepStrictEqual(isFunction(null), false)
  assert.deepStrictEqual(isFunction(undefined), false)
  assert.deepStrictEqual(isFunction('fn'), false)
  assert.deepStrictEqual(isFunction({}), false)
  assert.deepStrictEqual(isFunction(() => ({})), true)
  assert.deepStrictEqual(isFunction(baz), true)
  assert.deepStrictEqual(isFunction(class Foo { public bar () { return this } }), true)
  assert.deepStrictEqual(isFunction(Function.prototype), true)
})
