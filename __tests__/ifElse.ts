import { ifElse, ifElseU } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('ifElse works with all function values', () => {
  const pred = (x: number) => x > 9000
  const case1 = (x: number) => `${x} is over 9000!`
  const case2 = (x: number) => `${x} is not over 9000!`

  assert.deepStrictEqual(ifElse(pred, case1, case2)(9001), '9001 is over 9000!')
  assert.deepStrictEqual(ifElse(pred, case1, case2)(9000), '9000 is not over 9000!')

  assert.deepStrictEqual(ifElseU(pred)(case1)(case2)(9001), '9001 is over 9000!')
  assert.deepStrictEqual(ifElseU(pred)(case1)(case2)(9000), '9000 is not over 9000!')
})

test('ifElse works with static boolean predicates', () => {
  const case1 = (x: number) => `${x} took the true branch`
  const case2 = (x: number) => `${x} took the false branch`

  assert.deepStrictEqual(ifElse(true, case1, case2)(9001), '9001 took the true branch')
  assert.deepStrictEqual(ifElse(false, case1, case2)(9001), '9001 took the false branch')

  assert.deepStrictEqual(ifElseU(true)(case1)(case2)(9001), '9001 took the true branch')
  assert.deepStrictEqual(ifElseU(false)(case1)(case2)(9001), '9001 took the false branch')
})

test('ifElse works with all static values', () => {
  assert.deepStrictEqual(ifElse(true, 'yes', 'no')(9001), 'yes')
  assert.deepStrictEqual(ifElse(false, 'yes', 'no')(9001), 'no')

  assert.deepStrictEqual(ifElseU(true)('yes')('no')(9001), 'yes')
  assert.deepStrictEqual(ifElseU(false)('yes')('no')(9001), 'no')
})

test('ifElse works with static case1 & function case2', () => {
  const pred = (x: number) => x > 9000
  const case2 = (x: number) => `${x} is not over 9000!`

  assert.deepStrictEqual(ifElse(pred, 'Over 9000!', case2)(9001), 'Over 9000!')
  assert.deepStrictEqual(ifElse(pred, 'Over 9000!', case2)(9000), '9000 is not over 9000!')

  assert.deepStrictEqual(ifElseU(pred)('Over 9000!')(case2)(9001), 'Over 9000!')
  assert.deepStrictEqual(ifElseU(pred)('Over 9000!')(case2)(9000), '9000 is not over 9000!')
})

test('ifElse works with function case1 & static case2', () => {
  const pred = (x: number) => x > 9000
  const case1 = (x: number) => `${x} is over 9000!`

  assert.deepStrictEqual(ifElse(pred, case1, 'Not over 9000!')(9001), '9001 is over 9000!')
  assert.deepStrictEqual(ifElse(pred, case1, 'Not over 9000!')(9000), 'Not over 9000!')

  assert.deepStrictEqual(ifElseU(pred)(case1)('Not over 9000!')(9001), '9001 is over 9000!')
  assert.deepStrictEqual(ifElseU(pred)(case1)('Not over 9000!')(9000), 'Not over 9000!')
})

test('ifElse works with multiple data args', () => {
  const pred = (x: number, y: number) => x > y
  const case1 = (x: number, y: number) => `${x} is greater than ${y}`
  const case2 = (x: number, y: number) => `${x} is not greater than ${y}`

  assert.deepStrictEqual(ifElse(pred, case1, case2)(2, 1), '2 is greater than 1')
  assert.deepStrictEqual(ifElse(pred, case1, case2)(1, 2), '1 is not greater than 2')

  assert.deepStrictEqual(ifElseU(pred)(case1)(case2)(2, 1), '2 is greater than 1')
  assert.deepStrictEqual(ifElseU(pred)(case1)(case2)(1, 2), '1 is not greater than 2')
})
