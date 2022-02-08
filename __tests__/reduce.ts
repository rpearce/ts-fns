import { reduce } from '../source'

test('reduce works on a list to filter our odd numbers', () => {
  const initialValue: number[] = []
  const input = [1, 2, 3, 4, 5]

  const fn = (acc: number[], x: number) =>
    x % 2 === 0 ? acc.concat(x) : acc

  expect(reduce(fn)(initialValue)(input)).toEqual([2, 4])
})
