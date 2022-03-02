import { Objekt } from './'

export const isObject = (x: unknown): x is Objekt<unknown> =>
  !!x && Object.prototype.toString.call(x) === '[object Object]'
