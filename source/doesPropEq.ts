export interface DoesPropEq {
  (property: PropertyKey):
  (value: unknown) =>
  (data: Record<PropertyKey, unknown> | unknown[]) =>
  boolean
}

export const doesPropEq: DoesPropEq = property => value => data =>
  data[property as any] === value // eslint-disable-line @typescript-eslint/no-explicit-any
