export interface PropOrU {
  <A>
  (fallback: A):
  <K extends PropertyKey>(property: K) =>
  <B>(data: B) =>
  B extends Record<K, infer V> ? (V extends null | undefined ? A : V) : A
}

const hasKey = (obj: object, key: PropertyKey): obj is Record<PropertyKey, unknown> =>
  key in obj

export function propOr<A, B, K extends PropertyKey> (
  fallback: A,
  property: K,
  data: B
): B extends Record<K, infer V> ? (V extends null | undefined ? A : V) : A
export function propOr (fallback: unknown, property: PropertyKey, data: unknown): unknown {
  if (data instanceof Object && hasKey(data, property)) {
    return data[property] ?? fallback
  }

  return fallback
}

export const propOrU: PropOrU = fallback => property => data =>
  propOr(fallback, property, data)
