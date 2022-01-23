type K = string | number | symbol

export const mapObject = <A, B>(fn: (x: A) => B) => (obj: Record<K, A>) => {
  const newObj = {} as Record<K, B>

  for (const k in obj) {
    newObj[k] = fn(obj[k])
  }

  return newObj
}
