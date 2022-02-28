import { isFunction } from './'

interface Cond {
  <A, B>(tuplesBox: [
    A | ((val: A) => boolean) | unknown,
    B | ((val: A) => B),
  ][]): (data: A) => A | B
}

export const cond: Cond = tuplesBox => data => {
  const [...tuples] = tuplesBox || []

  for (const [fst, snd] of tuples) {
    if (fst === data || isFunction(fst) && fst(data)) {
      return isFunction(snd) ? snd(data) : snd
    }
  }

  return data
}
