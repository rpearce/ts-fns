import { lift2, propOr } from '../source'

test('lift2 gets name, email & joins into string with a pipe', () => {
  const propOrNA      = propOr('N/A')
  const getName       = propOrNA('name')
  const getEmail      = propOrNA('email')
  const joinPipe      = (x: string) => (y: string) => `${x} | ${y}`
  const joinNameEmail = lift2(joinPipe)(getName)(getEmail)
  const input         = { name: 'bobert', email: 'bobert@email.com', foo: 'bar' }

  expect(joinNameEmail(input)).toStrictEqual('bobert | bobert@email.com')
})
