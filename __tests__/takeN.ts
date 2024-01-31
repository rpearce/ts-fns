import { takeN, takeNU } from '../source'

test('take N elements from the front of a list', () => {
  expect(takeN(3, [1, 2, 3, 4])).toEqual([1, 2, 3])
  expect(takeN(0, [1, 2, 3, 4])).toEqual([])
  expect(takeN(10, [1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(takeN(-1, [1, 2, 3, 4])).toEqual([4])
  expect(takeN(-2, [1, 2, 3, 4])).toEqual([3, 4])

  expect(takeNU(3)([1, 2, 3, 4])).toEqual([1, 2, 3])
  expect(takeNU(0)([1, 2, 3, 4])).toEqual([])
  expect(takeNU(10)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(takeNU(-1)([1, 2, 3, 4])).toEqual([4])
  expect(takeNU(-2)([1, 2, 3, 4])).toEqual([3, 4])
})
