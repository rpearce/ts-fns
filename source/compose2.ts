export interface Compose2 {
  <A, B, C>(
    f: (x: B) => C,
    g: (x: A) => B
  ):   (x: A) => C
}

export const compose2: Compose2 = (f, g) => (x) =>
  f (g (x))
