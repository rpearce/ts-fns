import { isFunction } from '../source'

test('isFunction returns a boolean', () => {
  expect(isFunction(null)).toStrictEqual(false)
  expect(isFunction(undefined)).toStrictEqual(false)
  expect(isFunction(() => ({}))).toStrictEqual(true)
  expect(isFunction(Function.prototype)).toStrictEqual(true)
})
