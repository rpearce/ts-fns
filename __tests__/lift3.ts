import { lift3, propOr } from '../source'

test('lift3 gets name, email, age & joins into string with a pipe', () => {
  const propOrNA         = propOr('N/A')
  const getName          = propOrNA('name')
  const getEmail         = propOrNA('email')
  const getAge           = propOrNA('age')
  const joinPipe         = (x: string) => (y: string) => (z: string) => `${x} | ${y} | ${z}`
  const joinNameEmailAge = lift3(joinPipe)(getName)(getEmail)(getAge)
  const input            = { name: 'bobert', email: 'bobert@email.com', age: 34, foo: 'bar' }

  expect(joinNameEmailAge(input)).toStrictEqual('bobert | bobert@email.com | 34')
})
