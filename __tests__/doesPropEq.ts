import { doesPropEq, doesPropEqU } from '../source/doesPropEq.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('doesPropEq determines if a property in an object equals a value', () => {
  // Object data

  assert.deepStrictEqual(doesPropEq('color', 'blue', { a: 'foo', b: 'bar', color: 'blue' }), true)
  assert.deepStrictEqual(doesPropEqU('color')('blue')({ a: 'foo', b: 'bar', color: 'blue' }), true)

  assert.deepStrictEqual(doesPropEq('color', 'blue', { a: 'foo', b: 'bar', color: 'green' }), false)
  assert.deepStrictEqual(doesPropEqU('color')('blue')({ a: 'foo', b: 'bar', color: 'green' }), false)

  assert.deepStrictEqual(doesPropEq('color', 'blue', {}), false)
  assert.deepStrictEqual(doesPropEqU('color')('blue')({}), false)

  // Array data

  assert.deepStrictEqual(doesPropEq(0, 'blue', ['blue', 'green', 'red']), true)
  assert.deepStrictEqual(doesPropEqU(0)('blue')(['blue', 'green', 'red']), true)

  assert.deepStrictEqual(doesPropEq(0, 'blue', ['red', 'blue', 'green']), false)
  assert.deepStrictEqual(doesPropEqU(0)('blue')(['red', 'blue', 'green']), false)

  assert.deepStrictEqual(doesPropEq(3, 'blue', []), false)
  assert.deepStrictEqual(doesPropEqU(3)('blue')([]), false)
})
