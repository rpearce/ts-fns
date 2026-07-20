export const pickKeys =
  <A extends Record<PropertyKey, unknown>>
  (keys: PropertyKey[], obj: A): Partial<A> => {
    const result: Partial<A> = {}
    const writable: Record<PropertyKey, unknown> = result

    for (const key of keys) {
      if (Object.hasOwn(obj, key)) {
        writable[key] = obj[key]
      }
    }

    return result
  }

export const pickKeysU =
  <A extends Record<PropertyKey, unknown>>
  (keys: PropertyKey[]) => (obj: A): Partial<A> =>
    pickKeys(keys, obj)
