export interface Lift2 {
  <A, B, C, D>
  (
    f: (xf: B) => (fy: C) => D,
    g: (xg: A) => B,
    h: (xh: A) => C
  ): (x: A) => D
}
export interface Lift2U {
  <A, B, C, D>
  (f: (xf: B) => (fy: C) => D):
  (g: (xg: A) => B) =>
  (h: (xh: A) => C) =>
  (x: A) => D
}

export const lift2: Lift2 = (f, g, h) => x =>
  f(g(x))(h(x))

export const lift2U: Lift2U = f => g => h => x =>
  lift2(f, g, h)(x)
