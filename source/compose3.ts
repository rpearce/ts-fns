export interface Compose3 {
  <A, B, C, D>(
    f: (x: C) => D,
    g: (x: B) => C,
    h: (x: A) => B
  ):   (x: A) => D
}

export const compose3: Compose3 = (f, g, h) => (x) =>
  f(g (h (x)))
