import { reduce, reduceU } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('reduce works on a list to filter our odd numbers', () => {
  const initialValue: number[] = []
  const input = [1, 2, 3, 4, 5]

  const fn = (acc: number[], x: number) =>
    x % 2 === 0 ? [...acc, x] : acc

  assert.deepStrictEqual(reduce(fn, initialValue, input), [2, 4])
  assert.deepStrictEqual(reduceU(fn)(initialValue)(input), [2, 4])
})

test('reduce returns the initial value for an empty list', () => {
  const fn = (acc: number, x: number) => acc + x

  assert.deepStrictEqual(reduce(fn, 42, []), 42)
  assert.deepStrictEqual(reduceU(fn)(42)([]), 42)
})

test('reduce passes index and list to the reducer', () => {
  const fn = (acc: string, x: string, i: number, xs: string[]) =>
    acc + x + i + xs.length

  assert.deepStrictEqual(reduce(fn, '', ['a', 'b']), 'a02b12')
  assert.deepStrictEqual(reduceU(fn)('')(['a', 'b']), 'a02b12')
})
