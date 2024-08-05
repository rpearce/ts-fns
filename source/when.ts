import { isFunction } from './'

export interface When {
  <A, B>(
    condition: ((x: A) => boolean) | A | unknown,
    returnVal: ((x: A) => B) | B | unknown,
    data: A
  ): A | B | unknown
}

export interface WhenU {
  <A, B>
  (condition: ((x: A) => boolean) | A | unknown):
  (returnVal: ((x: A) => B) | B | unknown) =>
  (data: A) =>
  A | B | unknown
}

export const when: When = (condition, returnVal, data) => {
  if (condition === data || (isFunction(condition) && condition(data))) {
    return isFunction(returnVal) ? returnVal(data) : returnVal
  }

  return data
}

export const whenU: WhenU = condition => returnVal => data =>
  when(condition, returnVal, data)
