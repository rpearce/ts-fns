import { Objekt } from './'

export const mapObject = <A, B>(fn: (x: A) => B) => (obj: Objekt<A>) => {
  const newObj = {} as Objekt<B>

  for (const k in obj) {
    newObj[k] = fn(obj[k])
  }

  return newObj
}
