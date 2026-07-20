import { isFunction } from './isFunction.js'

export interface When {
  <A, B>(
    condition: ((x: A) => boolean) | A,
    returnVal: ((x: A) => B) | B,
    data: A
  ): A | B
}

export interface WhenU {
  <A>
  (condition: ((x: A) => boolean) | A):
  <B>(returnVal: ((x: A) => B) | B) =>
  (data: A) =>
  A | B
}

export const when: When = (condition, returnVal, data) => {
  if (condition === data || (isFunction(condition) && condition(data))) {
    return isFunction(returnVal) ? returnVal(data) : returnVal
  }

  return data
}

export const whenU: WhenU = condition => returnVal => data =>
  when(condition, returnVal, data)
