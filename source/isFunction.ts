// https://github.com/microsoft/TypeScript/issues/37663
export const isFunction = (x: unknown): x is Function =>
  typeof x === 'function'
