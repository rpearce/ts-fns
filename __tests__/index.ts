import * as fns from '../source/index.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('all exports are defined', () => {
  const expectedFns = [
    'F',
    'T',
    'classNames',
    'compose2',
    'compose3',
    'cond',
    'condU',
    'constant',
    'doesPropEq',
    'doesPropEqU',
    'filter',
    'filterU',
    'hasProp',
    'hasPropU',
    'identity',
    'ifElse',
    'ifElseU',
    'insertAt',
    'insertAtU',
    'isArray',
    'isFunction',
    'isFunctor',
    'isObject',
    'lift2',
    'lift2U',
    'lift3',
    'lift3U',
    'log',
    'map',
    'mapU',
    'mapObject',
    'mapObjectU',
    'omitKeys',
    'omitKeysU',
    'pickKeys',
    'pickKeysU',
    'pipe2',
    'pipe3',
    'propOr',
    'propOrU',
    'reduce',
    'reduceU',
    'reduceRight',
    'reduceRightU',
    'shuffle',
    'sum',
    'takeN',
    'takeNU',
    'unless',
    'unlessU',
    'when',
    'whenU',
    'zip',
    'zipU',
  ]

  assert.deepStrictEqual(expectedFns.length, Object.keys(fns).length)

  const fnMap = new Map(Object.entries(fns))

  for (const fnName of expectedFns) {
    const fn = fnMap.get(fnName)

    assert.ok(typeof fn === 'function')
    assert.deepStrictEqual(fn.name, fnName)
  }
})
