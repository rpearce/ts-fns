export interface IsFunction {
  (x: unknown): boolean
}

export const isFunction: IsFunction = x => typeof x === 'function'
