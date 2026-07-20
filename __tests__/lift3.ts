import { lift3, lift3U } from '../source/lift3.js'
import assert from 'node:assert/strict'
import { propOrU } from '../source/propOr.js'
import { test } from 'node:test'

test('lift3 gets name, email, age & joins into string with a pipe', () => {
  const propOrNA = propOrU('N/A')
  const getName = propOrNA('name')
  const getEmail = propOrNA('email')
  const getAge = propOrNA('age')
  const joinPipe = (x: string) => (y: string) => (z: string) => `${x} | ${y} | ${z}`
  const input = { name: 'bobert', email: 'bobert@email.com', age: 34, foo: 'bar' } as const

  const joinNameEmailAge = lift3(joinPipe, getName, getEmail, getAge)
  const joinNameEmailAgeU = lift3U(joinPipe)(getName)(getEmail)(getAge)

  assert.deepStrictEqual(joinNameEmailAge(input), 'bobert | bobert@email.com | 34')
  assert.deepStrictEqual(joinNameEmailAgeU(input), 'bobert | bobert@email.com | 34')
})
