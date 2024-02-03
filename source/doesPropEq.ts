export interface DoesPropEq {
  (
    property: PropertyKey,
    value: unknown,
    data: Record<PropertyKey, unknown> | unknown[]
  ): boolean
}

export interface DoesPropEqU {
  (property: PropertyKey):
  (value: unknown) =>
  (data: Record<PropertyKey, unknown> | unknown[]) =>
  boolean
}

export const doesPropEq: DoesPropEq = (property, value, data) =>
  data[property as any] === value // eslint-disable-line @typescript-eslint/no-explicit-any

export const doesPropEqU: DoesPropEqU = property => value => data =>
  doesPropEq(property, value, data)
