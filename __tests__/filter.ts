import { filter, filterU } from '../source/filter.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('filter', () => {
  assert.deepStrictEqual(filter(x => x > 2, [1, 2, 3, 4]), [3, 4])
  assert.deepStrictEqual(filterU((x: number) => x > 2)([1, 2, 3, 4]), [3, 4])

  assert.deepStrictEqual(
    filter(
      x => x.name === 'foo',
      [{ id: 1, name: 'bar' }, { id: 2, name: 'foo' }]
    ),
    [{ id: 2, name: 'foo' }]
  )

  assert.deepStrictEqual(
    filterU((x: { id: number, name: string }) => x.name === 'foo')([
      { id: 1, name: 'bar' },
      { id: 2, name: 'foo' },
    ]),
    [{ id: 2, name: 'foo' }]
  )
})

test('filter handles empty arrays and does not mutate its input', () => {
  assert.deepStrictEqual(filter((x: number) => x > 2, []), [])
  assert.deepStrictEqual(filterU((x: number) => x > 2)([]), [])

  const xs = [1, 2, 3, 4]
  assert.deepStrictEqual(filter(x => x > 2, xs), [3, 4])
  assert.deepStrictEqual(xs, [1, 2, 3, 4])
})
