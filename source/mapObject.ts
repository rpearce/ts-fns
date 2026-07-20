export const mapObject =
  <A, B>(fn: (x: A) => B, obj: Record<PropertyKey, A>) => {
    const newObj: Record<PropertyKey, B> = {}

    for (const [k, v] of Object.entries(obj)) {
      newObj[k] = fn(v)
    }

    return newObj
  }

export const mapObjectU =
  <A, B>(fn: (x: A) => B) => (obj: Record<PropertyKey, A>) =>
    mapObject(fn, obj)
