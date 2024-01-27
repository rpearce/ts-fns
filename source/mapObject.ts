export const mapObject =
  <A, B>(fn: (x: A) => B) => (obj: Record<PropertyKey, A>) => {
    const newObj = {} as Record<PropertyKey, B>

    for (const k in obj) {
      newObj[k] = fn(obj[k])
    }

    return newObj
  }
