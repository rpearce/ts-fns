export interface TakeN {
  (n: number, xs: unknown[]): unknown[]
}

export interface TakeNU {
  (n: number): (xs: unknown[]) => unknown[]
}

export const takeN: TakeN = (n, xs) =>
  n >= 0 ? xs.slice(0, n) : xs.slice(n)

export const takeNU: TakeNU = (n) => (xs) =>
  takeN(n, xs)
