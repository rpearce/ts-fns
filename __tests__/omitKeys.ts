import { omitKeys } from '../source'

test('omitKeys returns the keys you did NOT specify to omit from an object', () => {
  expect(
    omitKeys(['a', 'b'])({ a: 'foo', b: 'bar', c: 'baz' })
  ).toEqual({ c: 'baz' })

  expect(
    omitKeys([])({ a: 'foo', b: 'bar', c: 'baz' })
  ).toEqual({ a: 'foo', b: 'bar', c: 'baz' })
})
