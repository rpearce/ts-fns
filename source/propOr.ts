export interface PropOr {
  <A, B, K extends PropertyKey>
  (fallback: A, property: K, data: B):
  B extends Record<K, infer V> ? (V extends null | undefined ? A : V) : A
}

export interface PropOrU {
  <A, B, K extends PropertyKey>
  (fallback: A):
  (property: K) =>
  (data: B) =>
  B extends Record<K, infer V> ? (V extends null | undefined ? A : V) : A
}

export const propOr: PropOr = (fallback, property, data) => {
  if (data instanceof Object) {
    return (data as any)[property] || fallback // eslint-disable-line @typescript-eslint/no-explicit-any
  } else {
    return fallback
  }
}

export const propOrU: PropOrU = fallback => property => data =>
  propOr(fallback, property, data)
