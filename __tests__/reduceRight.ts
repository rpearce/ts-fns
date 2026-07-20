import { reduceRight, reduceRightU } from '../source/reduceRight.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('reduceRight works on a list to filter our odd numbers in reverse', () => {
  const initialValue: number[] = []
  const input = [1, 2, 3, 4, 5]

  const fn = (acc: number[], x: number) =>
    x % 2 === 0 ? [...acc, x] : acc

  assert.deepStrictEqual(reduceRight(fn, initialValue, input), [4, 2])
  assert.deepStrictEqual(reduceRightU(fn)(initialValue)(input), [4, 2])
})

test('reduceRight returns the initial value for an empty list', () => {
  const fn = (acc: number, x: number) => acc + x

  assert.deepStrictEqual(reduceRight(fn, 42, []), 42)
  assert.deepStrictEqual(reduceRightU(fn)(42)([]), 42)
})

test('reduceRight passes index and list to the reducer', () => {
  const fn = (acc: string, x: string, i: number, xs: string[]) =>
    acc + x + i + xs.length

  assert.deepStrictEqual(reduceRight(fn, '', ['a', 'b']), 'b12a02')
  assert.deepStrictEqual(reduceRightU(fn)('')(['a', 'b']), 'b12a02')
})
