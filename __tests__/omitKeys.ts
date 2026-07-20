import { omitKeys, omitKeysU } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('omitKeys returns the keys you did NOT specify to omit from an object', () => {
  assert.deepStrictEqual(
    omitKeys(['a', 'b'], { a: 'foo', b: 'bar', c: 'baz' }),
    { c: 'baz' }
  )

  assert.deepStrictEqual(
    omitKeys([], { a: 'foo', b: 'bar', c: 'baz' }),
    { a: 'foo', b: 'bar', c: 'baz' }
  )

  assert.deepStrictEqual(
    omitKeysU(['a', 'b'])({ a: 'foo', b: 'bar', c: 'baz' }),
    { c: 'baz' }
  )

  assert.deepStrictEqual(
    omitKeysU([])({ a: 'foo', b: 'bar', c: 'baz' }),
    { a: 'foo', b: 'bar', c: 'baz' }
  )
})

test('omitKeys keeps own keys that shadow Object.prototype members', () => {
  assert.deepStrictEqual(
    omitKeys(['a'], { a: 1, toString: 'keep', constructor: 'keep too' }),
    { toString: 'keep', constructor: 'keep too' }
  )

  assert.deepStrictEqual(
    omitKeysU(['a'])({ a: 1, toString: 'keep', constructor: 'keep too' }),
    { toString: 'keep', constructor: 'keep too' }
  )
})

test('omitKeys copies only own enumerable properties', () => {
  const input: Record<string, string> = { a: 'foo', b: 'bar' }
  Reflect.setPrototypeOf(input, { inherited: 'nope' })

  assert.deepStrictEqual(omitKeys(['a'], input), { b: 'bar' })
  assert.deepStrictEqual(omitKeysU(['a'])(input), { b: 'bar' })
})
