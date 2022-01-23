type Key = string | number | symbol

export interface PropOr {
  <A>(fallback: A):
  <K extends Key>(property: K)
  => <B>(data: B)
  => B[keyof B] | A
}

export const propOr: PropOr = fallback => property => data => {
  if (data instanceof Object) {
    return (
      (data as unknown) as Record<Key, typeof data[keyof typeof data]>
    )[property] || fallback
  } else {
    return fallback
  }
}
