import { compose2 } from '../source'

test('compose2 adds 2 to a number and then multiplies by 10', () => {
  const add    = (a: number) => (b: number) => a + b
  const mult   = (a: number) => (b: number) => a * b
  const add2   = add(2)
  const mult10 = mult(10)
  const add12  = compose2(mult10, add2)

  expect(add12(8)).toStrictEqual(100)
})
