export interface InsertAt {
  (i: number):
  (...ys: unknown[]) =>
  (xs: unknown[]) =>
  unknown[]
}

export const insertAt: InsertAt = (i) => (...ys) => (xs) =>
  xs.toSpliced(i, 0, ...ys)
