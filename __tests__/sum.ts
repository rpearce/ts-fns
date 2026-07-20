import assert from 'node:assert/strict'
import { sum } from '../source/sum.js'
import { test } from 'node:test'

test('sum adds all the numbers in a list', () => {
  assert.deepStrictEqual(sum([]), 0)
  assert.deepStrictEqual(sum([1, 2, 3, 94]), 100)
})
