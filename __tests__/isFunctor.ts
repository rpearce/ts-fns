import { isFunctor } from '../source'

test('isFunction returns a boolean', () => {
  expect(isFunctor(null)).toStrictEqual(false)
  expect(isFunctor(undefined)).toStrictEqual(false)
  expect(isFunctor({})).toStrictEqual(false)
  expect(isFunctor([])).toStrictEqual(true)
  expect(isFunctor([1, 2, 3])).toStrictEqual(true)
  expect(isFunctor({ map: () => ({}) })).toStrictEqual(true)
})
