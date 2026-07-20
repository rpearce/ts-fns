import { propOr, propOrU } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('propOr returns fallback if nil input', () => {
  const fallback = 'Unknown'
  const prop = 'name'

  assert.deepStrictEqual(propOr(fallback, prop, undefined), 'Unknown')
  assert.deepStrictEqual(propOrU(fallback)(prop)(undefined), 'Unknown')

  assert.deepStrictEqual(propOr(fallback, prop, null), 'Unknown')
  assert.deepStrictEqual(propOrU(fallback)(prop)(null), 'Unknown')
})

test('propOr returns fallback if not found in object', () => {
  const fallback = 'Unknown'
  const prop = 'name'

  assert.deepStrictEqual(propOr(fallback, prop, {}), 'Unknown')
  assert.deepStrictEqual(propOr(fallback, prop, { foo: 'bar' }), 'Unknown')

  assert.deepStrictEqual(propOrU(fallback)(prop)({}), 'Unknown')
  assert.deepStrictEqual(propOrU(fallback)(prop)({ foo: 'bar' }), 'Unknown')
})

test('propOr returns property if found in object', () => {
  const fallback = 'Unknown'
  const prop = 'name'
  const input = { name: 'bobert' }

  assert.deepStrictEqual(propOr(fallback, prop, input), 'bobert')
  assert.deepStrictEqual(propOrU(fallback)(prop)(input), 'bobert')
})

test('propOr returns falsy property values instead of the fallback', () => {
  assert.deepStrictEqual(propOr(-1, 'count', { count: 0 }), 0)
  assert.deepStrictEqual(propOr('fallback', 'name', { name: '' }), '')
  assert.deepStrictEqual(propOr(true, 'flag', { flag: false }), false)

  assert.deepStrictEqual(propOrU(-1)('count')({ count: 0 }), 0)
  assert.deepStrictEqual(propOrU('fallback')('name')({ name: '' }), '')
  assert.deepStrictEqual(propOrU(true)('flag')({ flag: false }), false)
})

test('propOr returns fallback if property value is null or undefined', () => {
  assert.deepStrictEqual(propOr('Unknown', 'name', { name: null }), 'Unknown')
  assert.deepStrictEqual(propOr('Unknown', 'name', { name: undefined }), 'Unknown')

  assert.deepStrictEqual(propOrU('Unknown')('name')({ name: null }), 'Unknown')
  assert.deepStrictEqual(propOrU('Unknown')('name')({ name: undefined }), 'Unknown')
})

test('propOrU resolves to the found property value type', () => {
  assert.deepStrictEqual(propOrU(0)('name')({ name: 'bobert' }).toUpperCase(), 'BOBERT')
})

test('propOr returns fallback if not found in array', () => {
  const fallback = -1
  const prop = 3
  const input = [1, 2, 3]

  assert.deepStrictEqual(propOr(fallback, prop, input), -1)
  assert.deepStrictEqual(propOrU(fallback)(prop)(input), -1)
})

test('propOr returns property if found in array', () => {
  const fallback = -1
  const prop = 0
  const input = [1, 2, 3]

  assert.deepStrictEqual(propOr(fallback, prop, input), 1)
  assert.deepStrictEqual(propOrU(fallback)(prop)(input), 1)
})
