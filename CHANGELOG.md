# Changelog

## 2.0.0

### Major Changes

- ab187ab: Remove the root barrel entry in favor of per-function subpath exports for optimal tree-shaking: `import { map, mapU } from '@rpearce/ts-fns/map'` instead of `import { map } from '@rpearce/ts-fns'`. Each helper module is importable directly and nothing else is loaded. The `Functor` type moved with it: `import type { Functor } from '@rpearce/ts-fns/customTypes'`.

  Other breaking changes in this release:

  - The emitted output is now valid native-Node ESM (explicit `.js` specifiers) and targets ES2023 — consumers no longer need a bundler, but do need an ES2023-capable runtime.
  - Several type signatures are stricter and more precise: `filter`/`filterU` are generic and their predicate must return an actual `boolean` (truthy returns no longer typecheck); `takeN`/`takeNU` preserve element types; `when`/`unless`/`propOrU` no longer erase inference to `unknown`; `Functor`'s index signature is `unknown` instead of `any`; `map`'s input type (`MapData`) now includes arrays explicitly.

### Minor Changes

- cf0a84a: Add `ifElse` and `ifElseU`: a branching combinator where the predicate and both branches may each be a static value or a function of the data args — `ifElse(pred, onTrue, onFalse)(...data)`.

### Patch Changes

- cf0a84a: Correctness fixes (behavior changes if you depended on the buggy behavior):

  - `propOr` no longer returns the fallback for falsy property values (`0`, `''`, `false`, `NaN`) — only `null`/`undefined` trigger the fallback, as its type signature always promised.
  - `omitKeys` no longer silently drops own keys that shadow `Object.prototype` members (`toString`, `constructor`, …) and no longer copies inherited properties into its result.
  - `pickKeys` no longer creates `undefined` entries for keys absent from the object and only picks own properties.
  - `mapObject` maps only own enumerable properties (inherited properties no longer leak into results).
  - `classNames` skips empty strings (no more doubled spaces) and ignores inherited object properties.
  - `shuffle` no longer throws on arrays containing functions or symbols and preserves element identity (it previously deep-cloned object elements); it remains a uniform, non-mutating shuffle.

## 1.2.2

### Patch Changes

- fd16d7f: testing changeset setup - take 4
- 02c2dad: testing changeset take 3 - changelog
- eb21ea3: testing changeset take 5
