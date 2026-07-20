import { isFunction } from './isFunction.js'

export interface IfElse {
  <A extends unknown[], B, C>(
    pred: boolean | ((...dataArgs: A) => boolean),
    case1: B | ((...dataArgs: A) => B),
    case2: C | ((...dataArgs: A) => C)
  ): (...dataArgs: A) => B | C
}

export interface IfElseU {
  <A extends unknown[], B, C>
  (pred: boolean | ((...dataArgs: A) => boolean)):
  (case1: B | ((...dataArgs: A) => B)) =>
  (case2: C | ((...dataArgs: A) => C)) =>
  (...dataArgs: A) => B | C
}

export const ifElse: IfElse = (pred, case1, case2) => (...dataArgs) => {
  if (isFunction(pred) ? pred(...dataArgs) : pred) {
    return isFunction(case1) ? case1(...dataArgs) : case1
  }

  return isFunction(case2) ? case2(...dataArgs) : case2
}

export const ifElseU: IfElseU = pred => case1 => case2 =>
  ifElse(pred, case1, case2)
