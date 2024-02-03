export const omitKeys =
  <
    K extends PropertyKey,
    A extends Record<PropertyKey, unknown>
  >
  (keys: K[], obj: A): Partial<A> => {
    const keysIndex: { [key: PropertyKey]: boolean } = {}
    const result: Partial<A> = {}

    for (let i = 0; i < keys.length; i++) {
      keysIndex[keys[i]] = true
    }

    for (const k in obj) {
      if (!keysIndex[k]) {
        result[k] = obj[k]
      }
    }

    return result
  }

export const omitKeysU =
  <
    K extends PropertyKey,
    A extends Record<PropertyKey, unknown>
  >
  (keys: K[]) => (obj: A): Partial<A> =>
    omitKeys(keys, obj)
