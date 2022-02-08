import { map } from '../source'
import { Functor } from '../source/map'

test('map returns input if function not provided', () => {
  const input = { foo: 'bar' }
  const fn    = undefined

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(map(fn)(input)).toStrictEqual(input)
})

test('map returns input if input is not mappable', () => {
  const input = 123
  const fn    = (x: number) => x + 1

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(map(fn)(input)).toStrictEqual(input)
})

test('map returns a transformed array', () => {
  const input  = [1,2,3]
  const output = [2,4,6]
  const fn     = (x: number) => x * 2

  expect(map(fn)(input)).toEqual(output)
  expect(input).toEqual([1,2,3]) // not mutated
})

test('map returns result of mapping a functor', () => {
  const F = <A>(value: A): Functor<A> => ({
    value,
    map: fn => F(fn(value)),
  })

  const input  = F(2)
  const output = 10
  const fn     = (x: number) => x * 5

  // regrettable casting on next line...
  expect((map(fn)(input) as Functor<number>).value).toEqual(output)
  expect(input.value).toEqual(2) // not mutated
})

test('map returns transformed object', () => {
  const input  = { foo: 'bar', baz: 'qux' }
  const output = { foo: 'BAR', baz: 'QUX' }
  const fn     = (x: string) => x.toUpperCase()

  expect(map(fn)(input)).toEqual(output)
  expect(input).toEqual({ foo: 'bar', baz: 'qux' }) // not mutated
})
