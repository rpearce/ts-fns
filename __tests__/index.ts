import * as fns from '../source'

test('all exports are defined', () => {
  const expectedFns = [
    'F',
    'T',
    'compose2',
    'compose3',
    'cond',
    'constant',
    'doesPropEq',
    'hasProp',
    'identity',
    'insertAt',
    'isArray',
    'isFunction',
    'isFunctor',
    'isObject',
    'lift2',
    'lift3',
    'log',
    'map',
    'mapObject',
    'omitKeys',
    'pickKeys',
    'pipe2',
    'pipe3',
    'propOr',
    'reduce',
    'reduceRight',
    'shuffle',
    'sum',
    'takeN',
    'unless',
    'when',
  ]

  expect(expectedFns.length).toStrictEqual(Object.keys(fns).length)

  expectedFns.forEach(fnName => {
    const fn = fns[fnName as keyof typeof fns]

    expect(typeof fn).toStrictEqual('function')
    expect(fn.name).toStrictEqual(fnName)
  })
})
