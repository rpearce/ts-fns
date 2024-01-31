// https://github.com/microsoft/TypeScript/issues/37663
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (x: unknown): x is Function =>
  typeof x === 'function'
