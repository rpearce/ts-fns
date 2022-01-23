export interface Lift3 {
  <A, B, C, D, E>
  (f: (x: B) => (y: C) => (z: D) => E):
  (g: (x: A) => B) =>
  (h: (x: A) => C) =>
  (i: (x: A) => D) =>
  (x: A) => E
}

export const lift3: Lift3 = f => g => h => i => x =>
  f (g (x)) (h (x)) (i (x))
