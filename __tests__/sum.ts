import { sum } from '../source'

test('sum adds all the numbers in a list', () => {
  expect(sum([])).toEqual(0)
  expect(sum([1, 2, 3, 94])).toStrictEqual(100)
})
