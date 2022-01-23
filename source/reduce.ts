export interface Reduce {
  <A, B>
  (fn: (accumulator: B, currentValue: A, currentIndex: number, xs: A[]) => B):
  (initialValue: B) =>
  (xs: A[]) => B
}

export const reduce: Reduce = fn => initialValue => xs =>
  xs.reduce(fn, initialValue)
