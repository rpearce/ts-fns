import { T, cond, condU } from '../source'

test('cond works will all static values', () => {
  // ===========================================================================

  expect(cond([
    ['foo', 'was foo'],
    ['bar', 'was bar'],
  ], 'foo')).toStrictEqual('was foo')

  expect(condU([
    ['foo', 'was foo'],
    ['bar', 'was bar'],
  ])('foo')).toStrictEqual('was foo')

  // ===========================================================================

  expect(cond([
    ['foo', 'was foo'],
    ['bar', 'was bar'],
  ], 'bar')).toStrictEqual('was bar')

  expect(condU([
    ['foo', 'was foo'],
    ['bar', 'was bar'],
  ])('bar')).toStrictEqual('was bar')

  // ===========================================================================

  expect(cond([
    [true, 'was true'],
    [false, 'was false'],
  ], true)).toStrictEqual('was true')

  expect(condU([
    [true, 'was true'],
    [false, 'was false'],
  ])(true)).toStrictEqual('was true')

  // ===========================================================================

  expect(cond([
    [true, 'was true'],
    [false, 'was false'],
  ], true)).toStrictEqual('was true')

  expect(condU([
    [true, 'was true'],
    [false, 'was false'],
  ])(false)).toStrictEqual('was false')

  // ===========================================================================
})

test('cond works will all function values', () => {
  // ===========================================================================

  expect(cond([
    [(x: string) => x === 'foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', x => `was bar? ${x}`],
    [T, () => 'was none'],
  ], 'foo')).toStrictEqual('was foo? foo')

  expect(condU([
    [(x: string) => x === 'foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', x => `was bar? ${x}`],
    [T, () => 'was none'],
  ])('foo')).toStrictEqual('was foo? foo')

  // ===========================================================================

  expect(cond([
    [(x: string) => x === 'foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', x => `was bar? ${x}`],
    [T, () => 'was none'],
  ], 'bar')).toStrictEqual('was bar? bar')

  expect(condU([
    [(x: string) => x === 'foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', x => `was bar? ${x}`],
    [T, () => 'was none'],
  ])('bar')).toStrictEqual('was bar? bar')

  // ===========================================================================

  expect(cond([
    [(x: string) => x === 'foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', x => `was bar? ${x}`],
    [T, () => 'was none'],
  ], 'baz')).toStrictEqual('was none')

  expect(condU([
    [(x: string) => x === 'foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', x => `was bar? ${x}`],
    [T, () => 'was none'],
  ])('baz')).toStrictEqual('was none')

  // ===========================================================================
})

test('cond works will mixed static & function values', () => {
  // ===========================================================================

  expect(cond([
    ['foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, () => 'was none'],
  ], 'foo')).toStrictEqual('was foo? foo')

  expect(condU([
    ['foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, () => 'was none'],
  ])('foo')).toStrictEqual('was foo? foo')

  // ===========================================================================

  expect(cond([
    ['foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, () => 'was none'],
  ], 'bar')).toStrictEqual('was bar')

  expect(condU([
    ['foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, () => 'was none'],
  ])('bar')).toStrictEqual('was bar')

  // ===========================================================================

  expect(cond([
    ['foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, 'was none'],
  ], 'baz')).toStrictEqual('was none')

  expect(condU([
    ['foo', x => `was foo? ${x}`],
    [(x: string) => x === 'bar', 'was bar'],
    ['random', 'nothing'],
    [T, 'was none'],
  ])('baz')).toStrictEqual('was none')

  // ===========================================================================
})

test('cond works with mixed primitive types', () => {
  // ===========================================================================

  expect(cond([
    [42, 'meaning of life'],
    [(x: number) => x > 9000, () => 'OVER 9000!!!'],
    [true, () => 'I am just true'],
    [() => true, x => `I am a fallback for ${x}`],
  ], true)).toStrictEqual('I am just true')

  expect(condU([
    [42, 'meaning of life'],
    [(x: number) => x > 9000, () => 'OVER 9000!!!'],
    [true, () => 'I am just true'],
    [() => true, x => `I am a fallback for ${x}`],
  ])(true)).toStrictEqual('I am just true')

  // ===========================================================================
})
