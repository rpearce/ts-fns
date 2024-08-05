import { lift2, lift2U, propOrU } from '../source'

test('lift2 gets name, email & joins into string with a pipe', () => {
  const propOrNA = propOrU('N/A')
  const getName = propOrNA('name')
  const getEmail = propOrNA('email')
  const joinPipe = (x: string) => (y: string) => `${x} | ${y}`
  const input = { name: 'bobert', email: 'bobert@email.com', foo: 'bar' } as const

  const joinNameEmail = lift2(joinPipe, getName, getEmail)
  const joinNameEmailU = lift2U(joinPipe)(getName)(getEmail)

  expect(joinNameEmail(input)).toStrictEqual('bobert | bobert@email.com')
  expect(joinNameEmailU(input)).toStrictEqual('bobert | bobert@email.com')
})
