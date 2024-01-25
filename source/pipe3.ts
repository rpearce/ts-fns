export interface Pipe3 {
  <A, B, C, D>(
    h: (x: A) => B,
    g: (x: B) => C,
    f: (x: C) => D,
  ):   (x: A) => D
}

export const pipe3: Pipe3 = (h, g, f) => (x) =>
  f (g (h (x)))
