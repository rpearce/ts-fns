import { filter, filterU } from '../source'

test('filter', () => {
  expect(filter(x => x > 2, [1, 2, 3, 4])).toEqual([3, 4])
  expect(filterU(x => x > 2)([1, 2, 3, 4])).toEqual([3, 4])

  expect(
    filter(
      x => x.name === 'foo',
      [{ id: 1, name: 'bar' }, { id: 2, name: 'foo' }]
    )
  ).toEqual([{ id: 2, name: 'foo' }])

  expect(
    filterU(x => x.name === 'foo')([
      { id: 1, name: 'bar' },
      { id: 2, name: 'foo' },
    ])
  ).toEqual([{ id: 2, name: 'foo' }])
})
