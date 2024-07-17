# @rpearce/ts-fns

Public domain ([LICENSE](./LICENSE)) Typescript helper functions for copying &
pasting into projects. You can try it out here: https://npm.runkit.com/%40rpearce%2Fts-fns.

Most functions export two calling styles, regular and partial application:

```typescript
// Regular
hasProp('color', { color: 'blue' }) // true

// Partial application
hasPropU('color')({ color: 'blue' }) // true
```

Special thanks to the following for helping with some typings!

* [Hackle Wayne](https://github.com/hackle)
* [Lewis Campbell](https://github.com/LAC-Tech)

## Typed functions

Note: many functions have a unary, partial application style counterpart ending
in `U`; e.g., `cond` also exports `condU`.

* [`F`](./source/F.ts)
* [`T`](./source/T.ts)
* [`classNames`](./source/classNames.ts)
* [`compose2`](./source/compose2.ts)
* [`compose3`](./source/compose3.ts)
* [`cond`, `condU`](./source/cond.ts)
* [`constant`](./source/constant.ts)
* [`doesPropEq`, `doesPropEqU`](./source/doesPropEq.ts)
* [`filter`, `filterU`](./source/filter.ts)
* [`hasProp`, `hasPropU`](./source/hasProp.ts)
* [`identity`](./source/identity.ts)
* [`insertAt`, `insertAtU`](./source/insertAt.ts)
* [`isArray`](./source/isArray.ts)
* [`isFunction`](./source/isFunction.ts)
* [`isFunctor`](./source/isFunctor.ts)
* [`isObject`](./source/isObject.ts)
* [`lift2`, `lift2U`](./source/lift2.ts)
* [`lift3`, `lift3U`](./source/lift3.ts)
* [`log`](./source/log.ts)
* [`map`, `mapU`](./source/map.ts)
* [`mapObject`, `mapObjectU`](./source/mapObject.ts)
* [`omitKeys`, `omitKeysU`](./source/omitKeys.ts)
* [`pickKeys`, `pickKeysU`](./source/pickKeys.ts)
* [`pipe2`](./source/pipe2.ts)
* [`pipe3`](./source/pipe3.ts)
* [`propOr`, `propOrU`](./source/propOr.ts)
* [`reduce`, `reduceU`](./source/reduce.ts)
* [`reduceRight`, `reduceRightU`](./source/reduceRight.ts)
* [`shuffle`](./source/shuffle.ts)
* [`sum`](./source/sum.ts)
* [`takeN`, `takeNU`](./source/takeN.ts)
* [`unless`, `unlessU`](./source/unless.ts)
* [`when`, `whenU`](./source/when.ts)
* [`zip`](./source/zip.ts)

## TODO

* `both`
* `either`
* `ifElse`
* `neither`
* `sortAscBy`
* `sortDescBy`
* ??? Open an issue to request something!

## Usage

Copy the functions and types you need into your project.

### Example

```typescript
import {
  doesPropEq,
  doesPropEqU,
  takeN,
  takeNU,
} from './wherever-i-copied-the-helpers-to'

takeN(3, [1, 2, 3, 4])  // [1, 2, 3]
takeNU(3)([1, 2, 3, 4]) // [1, 2, 3]

doesPropEq('color', 'blue', { a: 'foo', b: 'bar', color: 'blue' })  // true
doesPropEqU('color')('blue')({ a: 'foo', b: 'bar', color: 'blue' }) // true
```

### More in-depth unary partial application example

```typescript
import { lift2U, propOrU } from './wherever-i-copied-the-helpers-to'

const propOrNA      = propOr('N/A')
const getName       = propOrNA('name')
const getEmail      = propOrNA('email')
const joinWithPipe  = (x: string) => (y: string) => `${x} | ${y}`
const joinNameEmail = lift2U(joinWithPipe)(getName)(getEmail)
const input         = { name: 'bobert', email: 'bobert@email.com', foo: 'bar' }

console.log(joinNameEmail(input))
// 'bobert | bobert@email.com'
```
