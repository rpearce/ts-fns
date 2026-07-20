export const isObject = (x: unknown): x is Record<PropertyKey, unknown> =>
  Boolean(x) && Object.prototype.toString.call(x) === '[object Object]'
