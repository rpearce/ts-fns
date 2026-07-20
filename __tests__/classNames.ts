import assert from 'node:assert/strict'
import { classNames } from '../source/classNames.js'
import { test } from 'node:test'

test('cond works will all static values', () => {
  assert.deepStrictEqual(classNames(), '')
  assert.deepStrictEqual(classNames(''), '')
  assert.deepStrictEqual(classNames('foo'), 'foo')
  assert.deepStrictEqual(classNames('foo bar'), 'foo bar')
  assert.deepStrictEqual(classNames('foo', 'bar'), 'foo bar')
  assert.deepStrictEqual(classNames('foo', 'bar', 'baz'), 'foo bar baz')
  assert.deepStrictEqual(classNames('foo', { bar: true }), 'foo bar')
  assert.deepStrictEqual(classNames('foo', { bar: true, baz: false }), 'foo bar')
  assert.deepStrictEqual(classNames('foo', { bar: true, baz: true }), 'foo bar baz')
  assert.deepStrictEqual(classNames('foo', { bar: true, baz: true }, 'qux'), 'foo bar baz qux')
  assert.deepStrictEqual(classNames('foo', { bar: true, baz: true }, 'qux', {}), 'foo bar baz qux')
  assert.deepStrictEqual(classNames('foo', { bar: true, baz: true }, 'qux', { abc: false }), 'foo bar baz qux')
  assert.deepStrictEqual(classNames('foo', { bar: true, baz: true }, 'qux', { abc: true }), 'foo bar baz qux abc')
  assert.deepStrictEqual(classNames({ bar: true, baz: false, qux: true }), 'bar qux')

  // @ts-expect-error Testing undefined behavior for non-TS
  assert.deepStrictEqual(classNames(undefined, 'foo'), 'foo')
})

test('classNames skips empty strings without adding stray spaces', () => {
  assert.deepStrictEqual(classNames('', 'foo'), 'foo')
  assert.deepStrictEqual(classNames('foo', ''), 'foo')
  assert.deepStrictEqual(classNames('foo', '', 'bar'), 'foo bar')
})

test('classNames ignores inherited object properties', () => {
  const obj: Record<string, boolean> = { own: true }
  Reflect.setPrototypeOf(obj, { inherited: true })

  assert.deepStrictEqual(classNames(obj), 'own')
  assert.deepStrictEqual(classNames('foo', obj), 'foo own')
})
