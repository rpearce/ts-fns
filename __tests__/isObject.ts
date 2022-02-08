import { isObject } from '../source'

test('isObject returns a boolean', () => {
  expect(isObject(null)).toStrictEqual(false)
  expect(isObject(undefined)).toStrictEqual(false)
  expect(isObject({})).toStrictEqual(true)
  expect(isObject({ foo: 'bar' })).toStrictEqual(true)
})
