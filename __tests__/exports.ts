import * as F from '../source/F.js'
import * as T from '../source/T.js'
import * as classNames from '../source/classNames.js'
import * as compose2 from '../source/compose2.js'
import * as compose3 from '../source/compose3.js'
import * as cond from '../source/cond.js'
import * as constant from '../source/constant.js'
import * as customTypes from '../source/customTypes.js'
import * as doesPropEq from '../source/doesPropEq.js'
import * as filter from '../source/filter.js'
import * as hasProp from '../source/hasProp.js'
import * as identity from '../source/identity.js'
import * as ifElse from '../source/ifElse.js'
import * as insertAt from '../source/insertAt.js'
import * as isArray from '../source/isArray.js'
import * as isFunction from '../source/isFunction.js'
import * as isFunctor from '../source/isFunctor.js'
import * as isObject from '../source/isObject.js'
import * as lift2 from '../source/lift2.js'
import * as lift3 from '../source/lift3.js'
import * as log from '../source/log.js'
import * as map from '../source/map.js'
import * as mapObject from '../source/mapObject.js'
import * as omitKeys from '../source/omitKeys.js'
import * as pickKeys from '../source/pickKeys.js'
import * as pipe2 from '../source/pipe2.js'
import * as pipe3 from '../source/pipe3.js'
import * as propOr from '../source/propOr.js'
import * as reduce from '../source/reduce.js'
import * as reduceRight from '../source/reduceRight.js'
import * as shuffle from '../source/shuffle.js'
import * as sum from '../source/sum.js'
import * as takeN from '../source/takeN.js'
import * as unless from '../source/unless.js'
import * as when from '../source/when.js'
import * as zip from '../source/zip.js'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('every module exposes exactly its expected runtime exports', () => {
  const moduleSizes: [object, number][] = [
    [F, 1],
    [T, 1],
    [classNames, 1],
    [compose2, 1],
    [compose3, 1],
    [cond, 2],
    [constant, 1],
    [customTypes, 0],
    [doesPropEq, 2],
    [filter, 2],
    [hasProp, 2],
    [identity, 1],
    [ifElse, 2],
    [insertAt, 2],
    [isArray, 1],
    [isFunction, 1],
    [isFunctor, 1],
    [isObject, 1],
    [lift2, 2],
    [lift3, 2],
    [log, 1],
    [map, 2],
    [mapObject, 2],
    [omitKeys, 2],
    [pickKeys, 2],
    [pipe2, 1],
    [pipe3, 1],
    [propOr, 2],
    [reduce, 2],
    [reduceRight, 2],
    [shuffle, 1],
    [sum, 1],
    [takeN, 2],
    [unless, 2],
    [when, 2],
    [zip, 2],
  ]

  const fns: [string, unknown][] = [
    ['F', F.F],
    ['T', T.T],
    ['classNames', classNames.classNames],
    ['compose2', compose2.compose2],
    ['compose3', compose3.compose3],
    ['cond', cond.cond],
    ['condU', cond.condU],
    ['constant', constant.constant],
    ['doesPropEq', doesPropEq.doesPropEq],
    ['doesPropEqU', doesPropEq.doesPropEqU],
    ['filter', filter.filter],
    ['filterU', filter.filterU],
    ['hasProp', hasProp.hasProp],
    ['hasPropU', hasProp.hasPropU],
    ['identity', identity.identity],
    ['ifElse', ifElse.ifElse],
    ['ifElseU', ifElse.ifElseU],
    ['insertAt', insertAt.insertAt],
    ['insertAtU', insertAt.insertAtU],
    ['isArray', isArray.isArray],
    ['isFunction', isFunction.isFunction],
    ['isFunctor', isFunctor.isFunctor],
    ['isObject', isObject.isObject],
    ['lift2', lift2.lift2],
    ['lift2U', lift2.lift2U],
    ['lift3', lift3.lift3],
    ['lift3U', lift3.lift3U],
    ['log', log.log],
    ['map', map.map],
    ['mapU', map.mapU],
    ['mapObject', mapObject.mapObject],
    ['mapObjectU', mapObject.mapObjectU],
    ['omitKeys', omitKeys.omitKeys],
    ['omitKeysU', omitKeys.omitKeysU],
    ['pickKeys', pickKeys.pickKeys],
    ['pickKeysU', pickKeys.pickKeysU],
    ['pipe2', pipe2.pipe2],
    ['pipe3', pipe3.pipe3],
    ['propOr', propOr.propOr],
    ['propOrU', propOr.propOrU],
    ['reduce', reduce.reduce],
    ['reduceU', reduce.reduceU],
    ['reduceRight', reduceRight.reduceRight],
    ['reduceRightU', reduceRight.reduceRightU],
    ['shuffle', shuffle.shuffle],
    ['sum', sum.sum],
    ['takeN', takeN.takeN],
    ['takeNU', takeN.takeNU],
    ['unless', unless.unless],
    ['unlessU', unless.unlessU],
    ['when', when.when],
    ['whenU', when.whenU],
    ['zip', zip.zip],
    ['zipU', zip.zipU],
  ]

  for (const [mod, size] of moduleSizes) {
    assert.deepStrictEqual(Object.keys(mod).length, size)
  }

  for (const [name, fn] of fns) {
    assert.ok(typeof fn === 'function')
    assert.deepStrictEqual(fn.name, name)
  }
})
