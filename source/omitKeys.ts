export const omitKeys =
  <A extends Record<PropertyKey, unknown>>
  (keys: PropertyKey[], obj: A): Partial<A> => {
    const keysIndex = new Set(keys)
    const result: Partial<A> = {}

    for (const k in obj) {
      if (Object.hasOwn(obj, k) && !keysIndex.has(k)) {
        result[k] = obj[k]
      }
    }

    return result
  }

export const omitKeysU =
  <A extends Record<PropertyKey, unknown>>
  (keys: PropertyKey[]) => (obj: A): Partial<A> =>
    omitKeys(keys, obj)
