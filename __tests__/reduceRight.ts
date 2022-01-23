import { reduceRight } from '../source'

test('reduceRight works on a list to filter our odd numbers in reverse', () => {
  const initialValue: number[] = []
  const input = [1, 2, 3, 4, 5]

  const fn = (acc: number[], x: number) =>
    x % 2 === 0 ? acc.concat(x) : acc

  expect(reduceRight(fn)(initialValue)(input)).toEqual([4, 2])
})
