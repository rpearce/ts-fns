import { mapObject, mapObjectU } from '../source/mapObject.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('mapObject returns transformed object', () => {
  const input = { foo: 'bar', baz: 'qux' }
  const output = { foo: 'BAR', baz: 'QUX' }
  const fn = (x: string) => x.toUpperCase()

  assert.deepStrictEqual(mapObject(fn, input), output)
  assert.deepStrictEqual(mapObjectU(fn)(input), output)
  assert.deepStrictEqual(input, { foo: 'bar', baz: 'qux' }) // not mutated
})

test('mapObject maps only own enumerable properties', () => {
  const input: Record<string, string> = { foo: 'bar' }
  Reflect.setPrototypeOf(input, { inherited: 'nope' })
  const fn = (x: string) => x.toUpperCase()

  assert.deepStrictEqual(mapObject(fn, input), { foo: 'BAR' })
  assert.deepStrictEqual(mapObjectU(fn)(input), { foo: 'BAR' })
})

test('mapObject returns an empty object for an empty object', () => {
  const fn = (x: number) => x + 1

  assert.deepStrictEqual(mapObject(fn, {}), {})
  assert.deepStrictEqual(mapObjectU(fn)({}), {})
})
