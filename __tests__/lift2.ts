import { lift2, lift2U } from '../source/lift2.js'
import assert from 'node:assert/strict'
import { propOrU } from '../source/propOr.js'
import { test } from 'node:test'

test('lift2 gets name, email & joins into string with a pipe', () => {
  const propOrNA = propOrU('N/A')
  const getName = propOrNA('name')
  const getEmail = propOrNA('email')
  const joinPipe = (x: string) => (y: string) => `${x} | ${y}`
  const input = { name: 'bobert', email: 'bobert@email.com', foo: 'bar' } as const

  const joinNameEmail = lift2(joinPipe, getName, getEmail)
  const joinNameEmailU = lift2U(joinPipe)(getName)(getEmail)

  assert.deepStrictEqual(joinNameEmail(input), 'bobert | bobert@email.com')
  assert.deepStrictEqual(joinNameEmailU(input), 'bobert | bobert@email.com')
})
