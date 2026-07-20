export interface TakeN {
  <A>(n: number, xs: A[]): A[]
}

export interface TakeNU {
  (n: number): <A>(xs: A[]) => A[]
}

export const takeN: TakeN = (n, xs) =>
  n >= 0 ? xs.slice(0, n) : xs.slice(n)

export const takeNU: TakeNU = (n) => (xs) =>
  takeN(n, xs)
