export const filter = <A>(
  fn: (value: A, index: number, array: A[]) => boolean,
  arr: A[]
) =>
  arr.filter(fn)

export const filterU = <A>(fn: (value: A, index: number, array: A[]) => boolean) =>
  (arr: A[]) =>
    filter(fn, arr)
