import {
  Functor,
  compose2,
  isFunction,
  isFunctor,
  isObject,
  mapObject,
} from './'

export type MapData<A> =
    Functor<A>
  | Record<PropertyKey, A>
  | ((x: unknown) => A)

export const map = <A, B>(fn: (x: A) => B, m: MapData<A>) => {
  if (isFunction(fn)) {
    if (isFunctor(m)) {
      return m.map(fn)
    }

    if (isObject(m)) {
      return mapObject(fn, m)
    }

    if (isFunction(m)) {
      return compose2(fn, m)
    }
  }

  return m
}

export const mapU = <A, B>(fn: (x: A) => B) => (m: MapData<A>) =>
  map(fn, m)
