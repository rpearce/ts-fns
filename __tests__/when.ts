import { when, whenU } from '../source/when.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('when works with all function values', () => {
  const condition = (x: number) => x > 9000
  const transform = (x: number) => `${x} is over 9000!`

  assert.deepStrictEqual(when(condition, transform, 9001), '9001 is over 9000!')
  assert.deepStrictEqual(when(condition, transform, 9000), 9000)

  assert.deepStrictEqual(whenU(condition)(transform)(9001), '9001 is over 9000!')
  assert.deepStrictEqual(whenU(condition)(transform)(9000), 9000)
})

test('when works with all static values', () => {
  const condition = 9001
  const transform = '9001 is over 9000!'

  assert.deepStrictEqual(when(condition, transform, 9001), '9001 is over 9000!')
  assert.deepStrictEqual(when(condition, transform, 9000), 9000)

  assert.deepStrictEqual(whenU(condition)(transform)(9001), '9001 is over 9000!')
  assert.deepStrictEqual(whenU(condition)(transform)(9000), 9000)
})

test('when works with function condition & static transform', () => {
  const condition = (x: number) => x > 9000
  const transform = 'That is over 9000!'

  assert.deepStrictEqual(when(condition, transform, 9001), 'That is over 9000!')
  assert.deepStrictEqual(when(condition, transform, 9000), 9000)

  assert.deepStrictEqual(whenU(condition)(transform)(9001), 'That is over 9000!')
  assert.deepStrictEqual(whenU(condition)(transform)(9000), 9000)
})

test('when works with static condition & function transform', () => {
  const condition = 9001
  const transform = (x: number) => `${x} = 9001 & is over 9000!`

  assert.deepStrictEqual(when(condition, transform, 9001), '9001 = 9001 & is over 9000!')
  assert.deepStrictEqual(when(condition, transform, 9000), 9000)

  assert.deepStrictEqual(whenU(condition)(transform)(9001), '9001 = 9001 & is over 9000!')
  assert.deepStrictEqual(whenU(condition)(transform)(9000), 9000)
})

test('when preserves data & return value types (no unknown erasure)', () => {
  const isPositive = (x: number) => x > 0
  const double = (x: number) => x * 2

  assert.deepStrictEqual(when(isPositive, double, 4) + 1, 9)
  assert.deepStrictEqual(when(isPositive, double, -4) + 1, -3)

  assert.deepStrictEqual(whenU(isPositive)(double)(4) + 1, 9)
  assert.deepStrictEqual(whenU(isPositive)(double)(-4) + 1, -3)
})
