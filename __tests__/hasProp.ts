import { hasProp, hasPropU } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('hasProp tests if an object has a property', () => {
  assert.deepStrictEqual(hasProp('foo', { foo: 'foo', bar: 'bar' }), true)
  assert.deepStrictEqual(hasProp('baz', { foo: 'foo', bar: 'bar' }), false)
  assert.deepStrictEqual(hasProp('foo', {}), false)

  assert.deepStrictEqual(hasPropU('foo')({ foo: 'foo', bar: 'bar' }), true)
  assert.deepStrictEqual(hasPropU('baz')({ foo: 'foo', bar: 'bar' }), false)
  assert.deepStrictEqual(hasPropU('foo')({}), false)
})

test('hasProp only reports own properties, not inherited ones', () => {
  assert.deepStrictEqual(hasProp('toString', {}), false)
  assert.deepStrictEqual(hasPropU('toString')({}), false)

  const obj: Record<string, unknown> = { own: true }
  Reflect.setPrototypeOf(obj, { inherited: true })
  assert.deepStrictEqual(hasProp('own', obj), true)
  assert.deepStrictEqual(hasProp('inherited', obj), false)
  assert.deepStrictEqual(hasPropU('own')(obj), true)
  assert.deepStrictEqual(hasPropU('inherited')(obj), false)
})

test('hasProp works with own falsy and undefined values', () => {
  assert.deepStrictEqual(hasProp('foo', { foo: undefined }), true)
  assert.deepStrictEqual(hasPropU('foo')({ foo: undefined }), true)
})
