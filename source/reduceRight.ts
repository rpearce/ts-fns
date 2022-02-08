export interface ReduceRight {
  <A, B>
  (fn: (accumulator: B, currentValue: A, currentIndex: number, xs: A[]) => B):
  (initialValue: B) =>
  (xs: A[]) => B
}

export const reduceRight: ReduceRight = fn => initialValue => xs =>
  xs.reduceRight(fn, initialValue)
