import * as fns from '../source'

test('all exports are defined', () => {
  const expectedFns = [
    'F',
    'T',
    'compose2',
    'compose3',
    'cond',
    'condU',
    'constant',
    'doesPropEq',
    'doesPropEqU',
    'hasProp',
    'hasPropU',
    'identity',
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

  expect(expectedFns.length).toStrictEqual(Object.keys(fns).length)

  expectedFns.forEach(fnName => {
    const fn = fns[fnName as keyof typeof fns]

    expect(typeof fn).toStrictEqual('function')
    expect(fn.name).toStrictEqual(fnName)
  })
})
