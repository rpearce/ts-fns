import { T, cond, condU } from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('cond works will all static values', () => {
  // ===========================================================================

  assert.deepStrictEqual(cond([
    ['foo', 'was foo'],
    ['bar', 'was bar'],
  ], 'foo'), 'was foo')

  assert.deepStrictEqual(condU([
    ['foo', 'was foo'],
    ['bar', 'was bar'],
  ])('foo'), 'was foo')

  // ===========================================================================

  assert.deepStrictEqual(cond([
    ['foo', 'was foo'],
    ['bar', 'was bar'],
  ], 'bar'), 'was bar')

  assert.deepStrictEqual(condU([
    ['foo', 'was foo'],
    ['bar', 'was bar'],
  ])('bar'), 'was bar')

  // ===========================================================================

  assert.deepStrictEqual(cond([
    [true, 'was true'],
    [false, 'was false'],
  ], true), 'was true')

  assert.deepStrictEqual(condU([
    [true, 'was true'],
    [false, 'was false'],
  ])(true), 'was true')

  // ===========================================================================

  assert.deepStrictEqual(cond([
    [true, 'was true'],
    [false, 'was false'],
  ], true), 'was true')

  assert.deepStrictEqual(condU([
    [true, 'was true'],
    [false, 'was false'],
  ])(false), 'was false')

  // ===========================================================================
})

test('cond works will all function values', () => {
  // ===========================================================================

  assert.deepStrictEqual(cond([
    [(x: string) => x === 'foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', (x: string) => `was bar? ${x}`],
    [T, () => 'was none'],
  ], 'foo'), 'was foo? foo')

  assert.deepStrictEqual(condU([
    [(x: string) => x === 'foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', (x: string) => `was bar? ${x}`],
    [T, () => 'was none'],
  ])('foo'), 'was foo? foo')

  // ===========================================================================

  assert.deepStrictEqual(cond([
    [(x: string) => x === 'foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', (x: string) => `was bar? ${x}`],
    [T, () => 'was none'],
  ], 'bar'), 'was bar? bar')

  assert.deepStrictEqual(condU([
    [(x: string) => x === 'foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', (x: string) => `was bar? ${x}`],
    [T, () => 'was none'],
  ])('bar'), 'was bar? bar')

  // ===========================================================================

  assert.deepStrictEqual(cond([
    [(x: string) => x === 'foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', (x: string) => `was bar? ${x}`],
    [T, () => 'was none'],
  ], 'baz'), 'was none')

  assert.deepStrictEqual(condU([
    [(x: string) => x === 'foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', (x: string) => `was bar? ${x}`],
    [T, () => 'was none'],
  ])('baz'), 'was none')

  // ===========================================================================
})

test('cond works will mixed static & function values', () => {
  // ===========================================================================

  assert.deepStrictEqual(cond([
    ['foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, () => 'was none'],
  ], 'foo'), 'was foo? foo')

  assert.deepStrictEqual(condU([
    ['foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, () => 'was none'],
  ])('foo'), 'was foo? foo')

  // ===========================================================================

  assert.deepStrictEqual(cond([
    ['foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, () => 'was none'],
  ], 'bar'), 'was bar')

  assert.deepStrictEqual(condU([
    ['foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, () => 'was none'],
  ])('bar'), 'was bar')

  // ===========================================================================

  assert.deepStrictEqual(cond([
    ['foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, 'was none'],
  ], 'baz'), 'was none')

  assert.deepStrictEqual(condU([
    ['foo', (x: string) => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, 'was none'],
  ])('baz'), 'was none')

  // ===========================================================================
})

test('cond returns the data unchanged when nothing matches', () => {
  // ===========================================================================

  assert.deepStrictEqual(cond([
    ['foo', 'was foo'],
    [(x: string) => x === 'bar', 'was bar'],
  ], 'baz'), 'baz')

  assert.deepStrictEqual(condU([
    ['foo', 'was foo'],
    [(x: string) => x === 'bar', 'was bar'],
  ])('baz'), 'baz')

  // ===========================================================================

  assert.deepStrictEqual(cond([], 'baz'), 'baz')
  assert.deepStrictEqual(condU([])('baz'), 'baz')

  // ===========================================================================
})

test('cond works with mixed primitive types', () => {
  // ===========================================================================

  assert.deepStrictEqual(cond([
    [42, 'meaning of life'],
    [(x: number) => x > 9000, () => 'OVER 9000!!!'],
    [true, () => 'I am just true'],
    [() => true, (x: boolean) => `I am a fallback for ${x}`],
  ], true), 'I am just true')

  assert.deepStrictEqual(condU([
    [42, 'meaning of life'],
    [(x: number) => x > 9000, () => 'OVER 9000!!!'],
    [true, () => 'I am just true'],
    [() => true, (x: boolean) => `I am a fallback for ${x}`],
  ])(true), 'I am just true')

  // ===========================================================================
})
