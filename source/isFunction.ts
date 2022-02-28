// https://github.com/microsoft/TypeScript/issues/37663#issuecomment-1053831482
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (x: unknown): x is Function =>
  typeof x === 'function'
