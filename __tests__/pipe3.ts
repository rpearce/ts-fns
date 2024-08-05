import { pipe3 } from '../source'

test('pipe3 adds 2, multiplies by 10, then subtracts 3', () => {
  const add = (a: number) => (b: number) => b + a
  const mult = (a: number) => (b: number) => b * a
  const sub = (a: number) => (b: number) => b - a
  const add2 = add(2)
  const mult10 = mult(10)
  const sub3 = sub(3)
  const add12 = pipe3(add2, mult10, sub3)

  expect(add12(8)).toStrictEqual(97)
})
