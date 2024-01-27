import type { AnyFunction } from './customTypes'

// https://github.com/microsoft/TypeScript/issues/37663
export const isFunction = (x: unknown): x is AnyFunction =>
  typeof x === 'function'
