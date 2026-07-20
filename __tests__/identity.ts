import assert from 'node:assert/strict'
import { identity } from '../source/index.js'
import { test } from 'node:test'

test('identity returns whatever it was passed', () => {
  assert.deepStrictEqual(identity(42), 42)

  const fn = (a: number) => (b: number) => b + a
  assert.deepStrictEqual(identity(fn), fn)

  const obj = { foo: 'bar' }
  assert.deepStrictEqual(identity(obj), obj)

  const arr = ['foo', 'bar']
  assert.deepStrictEqual(identity(arr), arr)
})
