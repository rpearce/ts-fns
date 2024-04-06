import { classNames } from '../source'

test('cond works will all static values', () => {
  expect(classNames()).toStrictEqual('')
  expect(classNames('')).toStrictEqual('')
  expect(classNames('foo')).toStrictEqual('foo')
  expect(classNames('foo bar')).toStrictEqual('foo bar')
  expect(classNames('foo', 'bar')).toStrictEqual('foo bar')
  expect(classNames('foo', 'bar', 'baz')).toStrictEqual('foo bar baz')
  expect(classNames('foo', { 'bar': true })).toStrictEqual('foo bar')
  expect(classNames('foo', { 'bar': true, 'baz': false })).toStrictEqual('foo bar')
  expect(classNames('foo', { 'bar': true, 'baz': true })).toStrictEqual('foo bar baz')
  expect(classNames('foo', { 'bar': true, 'baz': true }, 'qux')).toStrictEqual('foo bar baz qux')
  expect(classNames('foo', { 'bar': true, 'baz': true }, 'qux', {})).toStrictEqual('foo bar baz qux')
  expect(classNames('foo', { 'bar': true, 'baz': true }, 'qux', { 'abc': false })).toStrictEqual('foo bar baz qux')
  expect(classNames('foo', { 'bar': true, 'baz': true }, 'qux', { 'abc': true })).toStrictEqual('foo bar baz qux abc')
  expect(classNames({ 'bar': true, 'baz': false, 'qux': true })).toStrictEqual('bar qux')

  // @ts-expect-error Testing undefined behavior for non-TS
  expect(classNames(undefined, 'foo')).toStrictEqual('foo')
})
