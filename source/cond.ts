import { isFunction } from './'

export interface Cond {
  <A, B>(tuplesBox: CondTuples<A, B>, data: A): A | B
}

export interface CondU {
  <A, B>(tuplesBox: CondTuples<A, B>): (data: A) => A | B
}

export type CondTuples<A, B> = [
  ((value: A) => boolean) | unknown,
  ((value: A) => B) | B,
][]

export const cond: Cond = (tuplesBox, data) => {
  for (const [fst, snd] of tuplesBox) {
    if (fst === data || isFunction(fst) && fst(data)) {
      return isFunction(snd) ? snd(data) : snd
    }
  }

  return data
}

export const condU: CondU = tuplesBox => data =>
  cond(tuplesBox, data)
