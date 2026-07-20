import { isFunction } from './isFunction.js'

export type CondTuples<A, B> = [
  /** a predicate `(value: A) => boolean`, or any static value compared with `===` */
  unknown,
  ((value: A) => B) | B
][]

const isCondFn = (x: unknown): x is (value: unknown) => boolean =>
  isFunction(x)

export interface Cond {
  <A, B>(tuplesBox: CondTuples<A, B>, data: A): A | B
}

export interface CondU {
  <A, B>(tuplesBox: CondTuples<A, B>): (data: A) => A | B
}

export const cond: Cond = (tuplesBox, data) => {
  for (const [fst, snd] of tuplesBox) {
    if (fst === data || (isCondFn(fst) && fst(data))) {
      return isFunction(snd) ? snd(data) : snd
    }
  }

  return data
}

export const condU: CondU = tuplesBox => data =>
  cond(tuplesBox, data)
