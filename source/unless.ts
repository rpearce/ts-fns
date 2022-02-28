import { isFunction } from './'

export interface Unless {
  <A>(condition: ((x: A) => boolean) | A | unknown):
  <B>(returnVal: ((x: A) => B) | B | unknown)
  => (data: A)
  => A | B
}

export const unless: Unless = condition => returnVal => data => {
  if (condition === data || isFunction(condition) && condition(data)) {
    return data
  }

  return isFunction(returnVal) ? returnVal(data) : returnVal
}
