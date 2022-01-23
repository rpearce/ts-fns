import { log } from '../source'

test('log returns original value', () => {
  const data = { testing: '123' }

  expect(log()(data)).toStrictEqual(data)
  expect(log('foo')(data)).toStrictEqual(data)
  expect(log('foo', 'bar', 'baz')(data)).toStrictEqual(data)
})
