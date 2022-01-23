import { mapObject } from '../source'

test('mapObject returns transformed object', () => {
  const input  = { foo: 'bar', baz: 'qux' }
  const output = { foo: 'BAR', baz: 'QUX' }
  const fn     = (x: string) => x.toUpperCase()

  expect(mapObject(fn)(input)).toEqual(output)
  expect(input).toEqual({ foo: 'bar', baz: 'qux' }) // not mutated
})
