import { zip, zipU } from '../source'

test('zip combines two lists into pairs by index', () => {
  expect(zip([], [])).toEqual([])
  expect(zip([1, 2, 3], [4, 5, 6])).toEqual([[1, 4], [2, 5], [3, 6]])
  expect(zip([1, 2, 3, 4, 5], [6, 7])).toEqual([[1, 6], [2, 7]])
  expect(zip([1], [2, 3, 4, 5])).toEqual([[1, 2]])

  expect(zipU([])([])).toEqual([])
  expect(zipU([1, 2, 3])([4, 5, 6])).toEqual([[1, 4], [2, 5], [3, 6]])
  expect(zipU([1, 2, 3, 4, 5])([6, 7])).toEqual([[1, 6], [2, 7]])
  expect(zipU([1])([2, 3, 4, 5])).toEqual([[1, 2]])
})
