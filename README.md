# @rpearce/ts-fns

[![npm version](https://img.shields.io/npm/v/@rpearce/ts-fns.svg?style=flat-square)](https://www.npmjs.com/package/@rpearce/ts-fns) [![npm downloads](https://img.shields.io/npm/dm/@rpearce/ts-fns.svg?style=flat-square)](https://www.npmjs.com/package/@rpearce/ts-fns) [![bundlephobia size](https://flat.badgen.net/bundlephobia/minzip/@rpearce/ts-fns)](https://bundlephobia.com/result?p=@rpearce/ts-fns)

:warning: This repo & package are for experimentation with typescript and
functions. Use at your own risk.

This work is public domain ([LICENSE](./LICENSE)), so feel free to use whatever
you like.

Special thanks to the following for helping with some typings!

* [Hackle Wayne](https://github.com/hackle)
* [Lewis Campbell](https://github.com/LAC-Tech)

## Example usage

```sh
npm i @rpearce/ts-fns
```

```typescript
import { lift2, propOr } from '@rpearce/ts-fns'

const propOrNA      = propOr('N/A')
const getName       = propOrNA('name')
const getEmail      = propOrNA('email')
const joinPipe      = (x: string) => (y: string) => `${x} | ${y}`
const joinNameEmail = lift2(joinPipe)(getName)(getEmail)
const input         = { name: 'bobert', email: 'bobert@email.com', foo: 'bar' }

console.log(joinNameEmail(input))
// 'bobert | bobert@email.com'
```

## Typed functions

* [`F`](./source/F.ts)
* [`T`](./source/T.ts)
* [`compose2`](./source/compose2.ts)
* [`compose3`](./source/compose3.ts)
* [`cond`](./source/cond.ts)
* [`constant`](./source/constant.ts)
* [`identity`](./source/identity.ts)
* [`isArray`](./source/isArray.ts)
* [`isFunction`](./source/isFunction.ts)
* [`isFunctor`](./source/isFunctor.ts)
* [`isObject`](./source/isObject.ts)
* [`lift2`](./source/lift2.ts)
* [`lift3`](./source/lift3.ts)
* [`log`](./source/log.ts)
* [`map`](./source/map.ts)
* [`mapObject`](./source/mapObject.ts)
* [`propOr`](./source/propOr.ts)
* [`reduce`](./source/reduce.ts)
* [`reduceRight`](./source/reduceRight.ts)
* [`sum`](./source/sum.ts)
* [`unless`](./source/unless.ts)
* [`when`](./source/when.ts)

## TODO

* `ascBy`
* `both`
* `descBy`
* `either`
* `ifElse`
* `neither`
* `takeN`
