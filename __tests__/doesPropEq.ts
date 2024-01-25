import { doesPropEq } from '../source'

test('doesPropEq determines if a property in an object equals a value', () => {
  // Object data
  expect(doesPropEq('color')('blue')({ a: 'foo', b: 'bar', color: 'blue' })).toEqual(true)
  expect(doesPropEq('color')('blue')({ a: 'foo', b: 'bar', color: 'green' })).toEqual(false)
  expect(doesPropEq('color')('blue')({})).toEqual(false)

  // Array data
  expect(doesPropEq(0)('blue')(['blue', 'green', 'red'])).toEqual(true)
  expect(doesPropEq(0)('blue')(['red', 'blue', 'green'])).toEqual(false)
  expect(doesPropEq(3)('blue')([])).toEqual(false)
})
