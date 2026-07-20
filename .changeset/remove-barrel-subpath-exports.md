---
"@rpearce/ts-fns": major
---

Remove the root barrel entry in favor of per-function subpath exports for optimal tree-shaking: `import { map, mapU } from '@rpearce/ts-fns/map'` instead of `import { map } from '@rpearce/ts-fns'`. Each helper module is importable directly and nothing else is loaded. The `Functor` type moved with it: `import type { Functor } from '@rpearce/ts-fns/customTypes'`.

Other breaking changes in this release:

- The emitted output is now valid native-Node ESM (explicit `.js` specifiers) and targets ES2023 — consumers no longer need a bundler, but do need an ES2023-capable runtime.
- Several type signatures are stricter and more precise: `filter`/`filterU` are generic and their predicate must return an actual `boolean` (truthy returns no longer typecheck); `takeN`/`takeNU` preserve element types; `when`/`unless`/`propOrU` no longer erase inference to `unknown`; `Functor`'s index signature is `unknown` instead of `any`; `map`'s input type (`MapData`) now includes arrays explicitly.
