import { constant } from '../source'

test('constant returns whatever it was passed when called again', () => {
  expect(constant(42)('foo')).toStrictEqual(42)

  const fn = (a: number) => (b: number) => b + a
  expect(constant(fn)('foo')).toStrictEqual(fn)

  const obj = { foo: 'bar' }
  expect(constant(obj)('foo')).toStrictEqual(obj)

  const arr = ['foo', 'bar']
  expect(constant(arr)('foo')).toStrictEqual(arr)
})
