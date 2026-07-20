import assert from 'node:assert/strict'
import { compose2 } from '../source/index.js'
import { test } from 'node:test'

test('compose2 adds 2 to a number and then multiplies by 10', () => {
  const add = (a: number) => (b: number) => a + b
  const mult = (a: number) => (b: number) => a * b
  const add2 = add(2)
  const mult10 = mult(10)
  const add12 = compose2(mult10, add2)

  assert.deepStrictEqual(add12(8), 100)
})
