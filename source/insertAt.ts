export interface InsertAt {
  (i: number, ...ys: unknown[]):
  (xs: unknown[]) =>
  unknown[]
}

export interface InsertAtU {
  (i: number):
  (...ys: unknown[]) =>
  (xs: unknown[]) =>
  unknown[]
}

export const insertAt: InsertAt = (i, ...ys) =>  xs =>
  xs.toSpliced(i, 0, ...ys)

export const insertAtU: InsertAtU = i => (...ys) => xs =>
  insertAt(i, ...ys)(xs)
