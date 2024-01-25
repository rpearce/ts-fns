export interface PropOr {
  <A>(fallback: A):
  <K extends PropertyKey>(property: K) =>
  <B>(data: B) =>
  B extends Record<K, infer V> ? (V extends null | undefined ? A : V) : A
}

export const propOr: PropOr = fallback => property => data => {
  if (data instanceof Object) {
    return (data as any)[property] || fallback // eslint-disable-line @typescript-eslint/no-explicit-any
  } else {
    return fallback
  }
}
