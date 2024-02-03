import { lift3, lift3U, propOrU } from '../source'

test('lift3 gets name, email, age & joins into string with a pipe', () => {
  const propOrNA         = propOrU('N/A')
  const getName          = propOrNA('name')
  const getEmail         = propOrNA('email')
  const getAge           = propOrNA('age')
  const joinPipe         = (x: string) => (y: string) => (z: string) => `${x} | ${y} | ${z}`
  const input            = { name: 'bobert', email: 'bobert@email.com', age: 34, foo: 'bar' } as const

  const joinNameEmailAge = lift3(joinPipe, getName, getEmail, getAge)
  const joinNameEmailAgeU = lift3U(joinPipe)(getName)(getEmail)(getAge)

  expect(joinNameEmailAge(input)).toStrictEqual('bobert | bobert@email.com | 34')
  expect(joinNameEmailAgeU(input)).toStrictEqual('bobert | bobert@email.com | 34')
})
