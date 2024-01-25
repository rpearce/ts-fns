import { shuffle } from '../source'

test('shuffles a list', () => {
  const arr = [1, 2, 3, 4]
  const arrShuffled = shuffle(arr)

  expect(arrShuffled).not.toEqual(arr)
  expect(arrShuffled.toSorted()).toEqual(arr.toSorted())
})
