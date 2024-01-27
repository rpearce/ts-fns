import { insertAt } from '../source'

test('insert an item into an array at a position', () => {
  expect(insertAt(3)(9)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 9, 4, 5])
  expect(insertAt(3)(9, 10)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 9, 10, 4, 5])
})
