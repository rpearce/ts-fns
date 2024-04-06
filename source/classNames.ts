import { isObject } from './'

export interface ClassNames {
  (...args: (string | Record<string, boolean>)[]): string
}

export const classNames: ClassNames = (...args) => {
  const cns: string[] = []

  for (const arg of args) {
    if (typeof arg === 'string') {
      cns.push(arg)
    } else if (isObject(arg)) {
      for (const k in arg) {
        if (arg[k]) {
          cns.push(k)
        }
      }
    }
  }

  return cns.join(' ')
}
