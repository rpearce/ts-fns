export const omitKeys =
  <
    K extends PropertyKey,
    A extends Record<PropertyKey, unknown>
  >
  (keys: K[], obj: A): Partial<A> => {
    const keysIndex: Record<PropertyKey, boolean> = {}
    const result: Partial<A> = {}

    for (const key of keys) {
      keysIndex[key] = true
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
