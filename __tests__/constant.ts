import assert from 'node:assert/strict'
import { constant } from '../source/constant.js'
import { test } from 'node:test'

test('constant returns whatever it was passed when called again', () => {
  assert.deepStrictEqual(constant(42)('foo'), 42)

  const fn = (a: number) => (b: number) => b + a
  assert.deepStrictEqual(constant(fn)('foo'), fn)

  const obj = { foo: 'bar' }
  assert.deepStrictEqual(constant(obj)('foo'), obj)

  const arr = ['foo', 'bar']
  assert.deepStrictEqual(constant(arr)('foo'), arr)
})

test('constant preserves falsy values', () => {
  assert.deepStrictEqual(constant<undefined | null>(undefined)('foo'), undefined)
  assert.deepStrictEqual(constant(null)('foo'), null)
  assert.deepStrictEqual(constant(0)('foo'), 0)
  assert.deepStrictEqual(constant('')('foo'), '')
  assert.deepStrictEqual(constant(false)('foo'), false)
})
