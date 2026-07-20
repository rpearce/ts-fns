import { isFunction } from './isFunction.js'

export interface Unless {
  <A, B>(
    condition: ((x: A) => boolean) | A,
    returnVal: ((x: A) => B) | B,
    data: A
  ): A | B
}

export interface UnlessU {
  <A>
  (condition: ((x: A) => boolean) | A):
  <B>(returnVal: ((x: A) => B) | B) =>
  (data: A) =>
  A | B
}

export const unless: Unless = (condition, returnVal, data) => {
  if (condition === data || (isFunction(condition) && condition(data))) {
    return data
  }

  return isFunction(returnVal) ? returnVal(data) : returnVal
}

export const unlessU: UnlessU = condition => returnVal => data =>
  unless(condition, returnVal, data)
