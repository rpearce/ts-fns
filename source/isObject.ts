export const isObject = (x: unknown): x is Record<PropertyKey, unknown> =>
  !!x && Object.prototype.toString.call(x) === '[object Object]'
