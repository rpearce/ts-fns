export const filter = (
  fn: Parameters<typeof Array.prototype.filter>[0],
  arr: unknown[]
) =>
  arr.filter(fn)

export const filterU =
  (fn: Parameters<typeof filter>[0]) =>
    (arr: Parameters<typeof filter>[1]) =>
      filter(fn, arr)
