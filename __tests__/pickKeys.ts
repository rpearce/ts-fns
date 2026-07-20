import { pickKeys, pickKeysU } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('pickKeys returns only the keys you asked for from an object', () => {
  assert.deepStrictEqual(
    pickKeys(['a', 'b'], { a: 'foo', b: 'bar', c: 'baz' }),
    { a: 'foo', b: 'bar' }
  )

  assert.deepStrictEqual(
    pickKeys([], { a: 'foo', b: 'bar', c: 'baz' }),
    {}
  )

  assert.deepStrictEqual(
    pickKeysU(['a', 'b'])({ a: 'foo', b: 'bar', c: 'baz' }),
    { a: 'foo', b: 'bar' }
  )

  assert.deepStrictEqual(
    pickKeysU([])({ a: 'foo', b: 'bar', c: 'baz' }),
    {}
  )
})

test('pickKeys ignores keys not present in the object', () => {
  assert.deepStrictEqual(
    pickKeys(['a', 'z'], { a: 'foo', b: 'bar' }),
    { a: 'foo' }
  )

  assert.deepStrictEqual(
    pickKeysU(['a', 'z'])({ a: 'foo', b: 'bar' }),
    { a: 'foo' }
  )
})

test('pickKeys picks only own properties', () => {
  const input: Record<string, string> = { a: 'foo' }
  Reflect.setPrototypeOf(input, { inherited: 'nope' })

  assert.deepStrictEqual(pickKeys(['a', 'inherited'], input), { a: 'foo' })
  assert.deepStrictEqual(pickKeysU(['a', 'inherited'])(input), { a: 'foo' })
})
