import { takeN, takeNU } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('take N elements from the front of a list', () => {
  assert.deepStrictEqual(takeN(3, [1, 2, 3, 4]), [1, 2, 3])
  assert.deepStrictEqual(takeN(0, [1, 2, 3, 4]), [])
  assert.deepStrictEqual(takeN(10, [1, 2, 3, 4]), [1, 2, 3, 4])
  assert.deepStrictEqual(takeN(-1, [1, 2, 3, 4]), [4])
  assert.deepStrictEqual(takeN(-2, [1, 2, 3, 4]), [3, 4])

  assert.deepStrictEqual(takeNU(3)([1, 2, 3, 4]), [1, 2, 3])
  assert.deepStrictEqual(takeNU(0)([1, 2, 3, 4]), [])
  assert.deepStrictEqual(takeNU(10)([1, 2, 3, 4]), [1, 2, 3, 4])
  assert.deepStrictEqual(takeNU(-1)([1, 2, 3, 4]), [4])
  assert.deepStrictEqual(takeNU(-2)([1, 2, 3, 4]), [3, 4])
})

test('takeN does not mutate its input', () => {
  const input = [1, 2, 3, 4]

  takeN(2, input)
  takeNU(-2)(input)

  assert.deepStrictEqual(input, [1, 2, 3, 4])
})

test('takeN preserves the element type of the list', () => {
  const doubled = takeN(2, [1, 2, 3]).map(x => x * 2)
  const doubledU = takeNU(2)([1, 2, 3]).map(x => x * 2)

  assert.deepStrictEqual(doubled, [2, 4])
  assert.deepStrictEqual(doubledU, [2, 4])
})
