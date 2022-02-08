# @rpearce/ts-fns

This repo & package are for experimentation with typescript and functions. Use
at your own risk :warning:.

## Example usage

```sh
npm i @rpearce/ts-fns
```

```ts
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

* [`compose2`](./source/compose2.ts)
* [`compose3`](./source/compose3.ts)
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
* [`reduceRight`](./source/.ts)
* [`sum`](./source/.ts)