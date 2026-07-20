import assert from 'node:assert/strict'
import { pipe2 } from '../source/index.js'
import { test } from 'node:test'

test('pipe2 adds 2 to a number and then multiplies by 10', () => {
  const add = (a: number) => (b: number) => a + b
  const mult = (a: number) => (b: number) => a * b
  const add2 = add(2)
  const mult10 = mult(10)
  const add12 = pipe2(add2, mult10)

  assert.deepStrictEqual(add12(8), 100)
})
