export interface Pipe2 {
  <A, B, C>(
    g: (x: A) => B,
    f: (x: B) => C,
  ):   (x: A) => C
}

export const pipe2: Pipe2 = (g, f) => (x) =>
  f (g (x))
