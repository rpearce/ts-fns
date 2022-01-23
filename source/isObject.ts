export interface IsObject {
  (x: unknown): boolean
}

export const isObject: IsObject = x =>
  !!x && Object.prototype.toString.call(x) === '[object Object]'
