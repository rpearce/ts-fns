import { hasProp } from './hasProp.js'
import { isObject } from './isObject.js'

export interface ClassNames {
  (...args: (string | Record<string, boolean>)[]): string
}

export const classNames: ClassNames = (...args) => {
  const cns: string[] = []

  for (const arg of args) {
    if (typeof arg === 'string') {
      if (arg) {
        cns.push(arg)
      }
    } else if (isObject(arg)) {
      for (const k in arg) {
        if (hasProp(k, arg) && Boolean(arg[k])) {
          cns.push(k)
        }
      }
    }
  }

  return cns.join(' ')
}
