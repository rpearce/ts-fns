type K = string | number | symbol

export const isObject = (x: unknown): x is Record<K, unknown> =>
  !!x && Object.prototype.toString.call(x) === '[object Object]'
