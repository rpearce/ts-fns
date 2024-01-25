import { hasProp } from '../source'

test('hasProp tests if an object has a property', () => {
  expect(hasProp('foo')({ foo: 'foo', bar: 'bar' })).toEqual(true)
  expect(hasProp('baz')({ foo: 'foo', bar: 'bar' })).toEqual(false)
  expect(hasProp('foo')({})).toEqual(false)
})
