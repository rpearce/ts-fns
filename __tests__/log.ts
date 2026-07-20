import assert from 'node:assert/strict'
import { log } from '../source/index.js'
import { test } from 'node:test'

test('log returns original value', () => {
  const data = { testing: '123' }

  assert.deepStrictEqual(log()(data), data)
  assert.deepStrictEqual(log('foo')(data), data)
  assert.deepStrictEqual(log('foo', 'bar', 'baz')(data), data)
})

test('log logs the provided args followed by the value', t => {
  const spy = t.mock.method(console, 'log', () => undefined)
  const data = { testing: '123' }

  assert.deepStrictEqual(log()(data), data)
  assert.deepStrictEqual(spy.mock.calls.at(-1)?.arguments, [data])

  assert.deepStrictEqual(log('foo', 'bar')(data), data)
  assert.deepStrictEqual(spy.mock.calls.at(-1)?.arguments, ['foo', 'bar', data])
})
