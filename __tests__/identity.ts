import { identity } from '../source'

test('identity returns whatever it was passed', () => {
  expect(identity(42)).toEqual(42)

  const fn = (a: number) => (b: number) => b + a
  expect(identity(fn)).toStrictEqual(fn)

  const obj = { foo: 'bar' }
  expect(identity(obj)).toStrictEqual(obj)

  const arr = ['foo', 'bar']
  expect(identity(arr)).toStrictEqual(arr)
})
