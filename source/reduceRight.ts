export interface ReduceRight {
  <A, B>
  (
    fn: (accumulator: B, currentValue: A, currentIndex: number, xs: A[]) => B,
    initialValue: B,
    xs: A[]
  ): B
}

export interface ReduceRightU {
  <A, B>
  (fn: (accumulator: B, currentValue: A, currentIndex: number, xs: A[]) => B):
  (initialValue: B) =>
  (xs: A[]) => B
}

export const reduceRight: ReduceRight = (fn, initialValue, xs) =>
  xs.reduceRight(fn, initialValue)

export const reduceRightU: ReduceRightU = fn => initialValue => xs =>
  reduceRight(fn, initialValue, xs)
