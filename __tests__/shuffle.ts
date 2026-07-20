import assert from 'node:assert/strict'
import { shuffle } from '../source/index.js'
import { test } from 'node:test'

test('shuffles a list into a permutation of the same elements', () => {
  const arr = [1, 2, 3, 4]
  const arrShuffled = shuffle(arr)

  assert.strictEqual(arrShuffled.length, arr.length)
  assert.deepStrictEqual(arrShuffled.toSorted((a, b) => a - b), arr.toSorted((a, b) => a - b))
})

test('shuffle does not mutate its input', () => {
  const arr = [1, 2, 3, 4, 5]

  shuffle(arr)

  assert.deepStrictEqual(arr, [1, 2, 3, 4, 5])
})

test('shuffle handles empty and single-element lists', () => {
  assert.deepStrictEqual(shuffle([]), [])
  assert.deepStrictEqual(shuffle([7]), [7])
})

test('shuffle preserves element identity & handles uncloneable values', () => {
  const obj = { id: 1 }
  const fn = () => 'hi'
  const arr = [obj, fn]
  const arrShuffled = shuffle(arr)

  assert.strictEqual(arrShuffled.length, 2)
  assert.ok(arrShuffled.includes(obj))
  assert.ok(arrShuffled.includes(fn))
  assert.deepStrictEqual(arr, [obj, fn]) // not mutated
})

test('shuffle performs a uniform permutation (deterministic randomness)', t => {
  t.mock.method(Math, 'random', () => 0.99) // always extracts the last remaining element

  assert.deepStrictEqual(shuffle([1, 2, 3, 4]), [4, 3, 2, 1])
})
