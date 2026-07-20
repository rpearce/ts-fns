import { zip, zipU } from '../source/zip.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('zip combines two lists into pairs by index', () => {
  assert.deepStrictEqual(zip([], []), [])
  assert.deepStrictEqual(zip([1, 2, 3], [4, 5, 6]), [[1, 4], [2, 5], [3, 6]])
  assert.deepStrictEqual(zip([1, 2, 3, 4, 5], [6, 7]), [[1, 6], [2, 7]])
  assert.deepStrictEqual(zip([1], [2, 3, 4, 5]), [[1, 2]])

  assert.deepStrictEqual(zipU([])([]), [])
  assert.deepStrictEqual(zipU([1, 2, 3])([4, 5, 6]), [[1, 4], [2, 5], [3, 6]])
  assert.deepStrictEqual(zipU([1, 2, 3, 4, 5])([6, 7]), [[1, 6], [2, 7]])
  assert.deepStrictEqual(zipU([1])([2, 3, 4, 5]), [[1, 2]])
})
