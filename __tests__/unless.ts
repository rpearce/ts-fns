import { unless, unlessU } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('unless works with all function values', () => {
  const condition = (x: number) => x > 9000
  const transform = (x: number) => `${x} is not over 9000!`

  assert.deepStrictEqual(unless(condition, transform, 9001), 9001)
  assert.deepStrictEqual(unless(condition, transform, 9000), '9000 is not over 9000!')

  assert.deepStrictEqual(unlessU(condition)(transform)(9001), 9001)
  assert.deepStrictEqual(unlessU(condition)(transform)(9000), '9000 is not over 9000!')
})

test('unless works with all static values', () => {
  const condition = 9001
  const transform = 'Not 9001!'

  assert.deepStrictEqual(unless(condition, transform, 9001), 9001)
  assert.deepStrictEqual(unless(condition, transform, 9000), 'Not 9001!')

  assert.deepStrictEqual(unlessU(condition)(transform)(9001), 9001)
  assert.deepStrictEqual(unlessU(condition)(transform)(9000), 'Not 9001!')
})

test('unless works with function condition & static transform', () => {
  const condition = (x: number) => x > 9000
  const transform = 'That is not over 9000!'

  assert.deepStrictEqual(unless(condition, transform, 9001), 9001)
  assert.deepStrictEqual(unless(condition, transform, 9000), 'That is not over 9000!')

  assert.deepStrictEqual(unlessU(condition)(transform)(9001), 9001)
  assert.deepStrictEqual(unlessU(condition)(transform)(9000), 'That is not over 9000!')
})

test('unless works with static condition & function transform', () => {
  const condition = 9001
  const transform = (x: number) => `${x} is not 9001!`

  assert.deepStrictEqual(unless(condition, transform, 9001), 9001)
  assert.deepStrictEqual(unless(condition, transform, 9000), '9000 is not 9001!')

  assert.deepStrictEqual(unlessU(condition)(transform)(9001), 9001)
  assert.deepStrictEqual(unlessU(condition)(transform)(9000), '9000 is not 9001!')
})

test('unless preserves data & return value types (no unknown erasure)', () => {
  const isPositive = (x: number) => x > 0
  const negate = (x: number) => -x

  assert.deepStrictEqual(unless(isPositive, negate, -4) + 1, 5)
  assert.deepStrictEqual(unless(isPositive, negate, 4) + 1, 5)

  assert.deepStrictEqual(unlessU(isPositive)(negate)(-4) + 1, 5)
  assert.deepStrictEqual(unlessU(isPositive)(negate)(4) + 1, 5)
})
