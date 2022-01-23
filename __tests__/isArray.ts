import { isArray } from '../source'

test('isArray returns a boolean', () => {
  expect(isArray(null)).toStrictEqual(false)
  expect(isArray(undefined)).toStrictEqual(false)
  expect(isArray(1)).toStrictEqual(false)
  expect(isArray('[1]')).toStrictEqual(false)
  expect(isArray([])).toStrictEqual(true)
  expect(isArray([1])).toStrictEqual(true)
})
