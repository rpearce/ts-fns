import { compose3 } from '../source'

test('compose3 adds 2, multiplies by 10, then subtracts 3', () => {
  const add    = (a: number) => (b: number) => b + a
  const mult   = (a: number) => (b: number) => b * a
  const sub    = (a: number) => (b: number) => b - a
  const add2   = add(2)
  const mult10 = mult(10)
  const sub3   = sub(3)
  const add12  = compose3(sub3, mult10, add2)

  expect(add12(8)).toStrictEqual(97)
})
