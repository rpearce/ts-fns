import { isFunction } from './'

export interface When {
  <A>(condition: ((x: A) => boolean) | A | unknown):
  <B>(returnVal: ((x: A) => B) | B | unknown) =>
  (data: A) =>
  A | B | unknown
}

export const when: When = condition => returnVal => data => {
  if (condition === data || isFunction(condition) && condition(data)) {
    return isFunction(returnVal) ? returnVal(data) : returnVal
  }

  return data
}
