import { isFunction } from './'

export interface Unless {
  <A, B>(
    condition: ((x: A) => boolean) | A | unknown,
    returnVal: ((x: A) => B) | B | unknown,
    data: A
  ): A | B | unknown
}

export interface UnlessU {
  <A, B>
  (condition: ((x: A) => boolean) | A | unknown):
  (returnVal: ((x: A) => B) | B | unknown) =>
  (data: A) =>
  A | B | unknown
}

export const unless: Unless = (condition, returnVal, data) => {
  if (condition === data || (isFunction(condition) && condition(data))) {
    return data
  }

  return isFunction(returnVal) ? returnVal(data) : returnVal
}

export const unlessU: UnlessU = condition => returnVal => data =>
  unless(condition, returnVal, data)
