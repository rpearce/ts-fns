export const pickKeys =
  <
    K extends PropertyKey,
    A extends Record<PropertyKey, unknown>
  >
  (keys: K[], obj: A): Partial<A> =>
    keys.reduce((acc: Partial<A>, key) => {
      acc[key] = obj[key]
      return acc
    }, {})

export const pickKeysU =
  <
    K extends PropertyKey,
    A extends Record<PropertyKey, unknown>
  >
  (keys: K[]) => (obj: A): Partial<A> =>
    pickKeys(keys, obj)
