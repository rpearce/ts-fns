import { insertAt, insertAtU } from '../source/insertAt.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('insert an item into an array at a position', () => {
  assert.deepStrictEqual(insertAt(3, 9)([1, 2, 3, 4, 5]), [1, 2, 3, 9, 4, 5])
  assert.deepStrictEqual(insertAt(3, 9, 10)([1, 2, 3, 4, 5]), [1, 2, 3, 9, 10, 4, 5])

  assert.deepStrictEqual(
    insertAt(3, [9, 10])([1, 2, 3, 4, 5]),
    [1, 2, 3, [9, 10], 4, 5]
  )

  assert.deepStrictEqual(insertAtU(3)(9)([1, 2, 3, 4, 5]), [1, 2, 3, 9, 4, 5])
  assert.deepStrictEqual(insertAtU(3)(9, 10)([1, 2, 3, 4, 5]), [1, 2, 3, 9, 10, 4, 5])

  assert.deepStrictEqual(
    insertAtU(3)([9, 10])([1, 2, 3, 4, 5]),
    [1, 2, 3, [9, 10], 4, 5]
  )
})

test('insertAt handles boundary, out-of-range & negative indexes', () => {
  assert.deepStrictEqual(insertAt(0, 9)([1, 2]), [9, 1, 2])
  assert.deepStrictEqual(insertAt(2, 9)([1, 2]), [1, 2, 9])
  assert.deepStrictEqual(insertAt(10, 9)([1, 2]), [1, 2, 9])
  assert.deepStrictEqual(insertAt(-1, 9)([1, 2, 3]), [1, 2, 9, 3])
  assert.deepStrictEqual(insertAt(-10, 9)([1, 2, 3]), [9, 1, 2, 3])
  assert.deepStrictEqual(insertAt(0, 9)([]), [9])

  assert.deepStrictEqual(insertAtU(0)(9)([1, 2]), [9, 1, 2])
  assert.deepStrictEqual(insertAtU(2)(9)([1, 2]), [1, 2, 9])
  assert.deepStrictEqual(insertAtU(10)(9)([1, 2]), [1, 2, 9])
  assert.deepStrictEqual(insertAtU(-1)(9)([1, 2, 3]), [1, 2, 9, 3])
  assert.deepStrictEqual(insertAtU(-10)(9)([1, 2, 3]), [9, 1, 2, 3])
  assert.deepStrictEqual(insertAtU(0)(9)([]), [9])
})

test('insertAt does not mutate the original array', () => {
  const xs = [1, 2, 3]

  assert.deepStrictEqual(insertAt(1, 9)(xs), [1, 9, 2, 3])
  assert.deepStrictEqual(xs, [1, 2, 3])

  assert.deepStrictEqual(insertAtU(1)(9)(xs), [1, 9, 2, 3])
  assert.deepStrictEqual(xs, [1, 2, 3])
})
