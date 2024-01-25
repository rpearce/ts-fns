export interface HasProp {
  (property: PropertyKey):
  (obj: Record<PropertyKey, unknown>) =>
  boolean
}

export const hasProp: HasProp = property => obj =>
  Object.prototype.hasOwnProperty.call(obj, property)
