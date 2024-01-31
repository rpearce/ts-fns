import { pickKeys, pickKeysU } from '../source'

test('pickKeys returns only the keys you asked for from an object', () => {
  expect(
    pickKeys(['a', 'b'], { a: 'foo', b: 'bar', c: 'baz' })
  ).toEqual({ a: 'foo', b: 'bar' })

  expect(
    pickKeys([], { a: 'foo', b: 'bar', c: 'baz' })
  ).toEqual({})

  expect(
    pickKeysU(['a', 'b'])({ a: 'foo', b: 'bar', c: 'baz' })
  ).toEqual({ a: 'foo', b: 'bar' })

  expect(
    pickKeysU([])({ a: 'foo', b: 'bar', c: 'baz' })
  ).toEqual({})
})
