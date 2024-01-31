export interface HasProp {
  (property: PropertyKey, obj: Record<PropertyKey, unknown>): boolean
}

export interface HasPropU {
  (property: PropertyKey):
  (obj: Record<PropertyKey, unknown>) =>
  boolean
}

export const hasProp: HasProp = (property, obj) =>
  Object.prototype.hasOwnProperty.call(obj, property)

export const hasPropU: HasPropU = property => obj =>
  hasProp(property, obj)
