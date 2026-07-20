import { map, mapU } from '../source/map.js'
import type { Functor } from '../source/customTypes.js'
import assert from 'node:assert/strict'
import { isFunctor } from '../source/isFunctor.js'
import { test } from 'node:test'

const isNumFn = (x: unknown): x is (n: number) => number =>
  typeof x === 'function'

test('map returns input if function not provided', () => {
  const input = { foo: 'bar' }
  const fn = undefined

  // @ts-expect-error the invalid input is the point of this test
  assert.deepStrictEqual(map(fn, input), input)

  // @ts-expect-error the invalid input is the point of this test
  assert.deepStrictEqual(mapU(fn)(input), input)
})

test('map returns input if input is not mappable', () => {
  const input = 123
  const fn = (x: number) => x + 1

  // @ts-expect-error the invalid input is the point of this test
  assert.deepStrictEqual(map(fn, input), input)

  // @ts-expect-error the invalid input is the point of this test
  assert.deepStrictEqual(mapU(fn)(input), input)
})

test('map returns a transformed array', () => {
  const input = [1, 2, 3]
  const output = [2, 4, 6]
  const fn = (x: number) => x * 2

  assert.deepStrictEqual(map(fn, input), output)
  assert.deepStrictEqual(mapU(fn)(input), output)
  assert.deepStrictEqual(input, [1, 2, 3]) // not mutated
})

test('map returns result of mapping a functor', () => {
  const F = <A>(value: A): Functor<A> => ({
    value,
    map: fn => F(fn(value)),
  })

  const input = F(2)
  const output = 10
  const fn = (x: number) => x * 5

  const result = map(fn, input)
  const resultU = mapU(fn)(input)

  assert.ok(isFunctor(result))
  assert.ok(isFunctor(resultU))
  assert.deepStrictEqual(result['value'], output)
  assert.deepStrictEqual(resultU['value'], output)
  assert.deepStrictEqual(input['value'], 2) // not mutated
})

test('map composes when given a function to map over', () => {
  const inc = (x: number) => x + 1
  const dbl = (x: number) => x * 2

  const composed = map(dbl, inc)
  const composedU = mapU(dbl)(inc)

  assert.ok(isNumFn(composed))
  assert.ok(isNumFn(composedU))
  assert.deepStrictEqual(composed(3), 8)
  assert.deepStrictEqual(composedU(3), 8)
})

test('map returns transformed object', () => {
  const input = { foo: 'bar', baz: 'qux' }
  const output = { foo: 'BAR', baz: 'QUX' }
  const fn = (x: string) => x.toUpperCase()

  assert.deepStrictEqual(map(fn, input), output)
  assert.deepStrictEqual(mapU(fn)(input), output)
  assert.deepStrictEqual(input, { foo: 'bar', baz: 'qux' }) // not mutated
})
