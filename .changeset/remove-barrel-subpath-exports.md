---
"@rpearce/ts-fns": major
---

Remove the root barrel entry in favor of per-function subpath exports for optimal tree-shaking: `import { map, mapU } from '@rpearce/ts-fns/map'` instead of `import { map } from '@rpearce/ts-fns'`. Each helper module is importable directly and nothing else is loaded. Also in this release: the emitted output is valid native-Node ESM (explicit `.js` specifiers), targets ES2023, and several type signatures are stricter and more precise.
