import {
  compose2,
  isFunction,
  isFunctor,
  isObject,
  mapObject,
} from './'

export type K = string | number | symbol

export interface Functor<A> {
  map<B>(fn: (x: A) => B): Functor<B>,
  [k: K]: any, // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface Funxion {
  <A, B>(x: A): B
}

export type MapData<A> = Functor<A> | Record<K, A> | Funxion

export const map = <A, B>(fn: (x: A) => B) => (m: MapData<A>) => {
  if (isFunction(fn)) {
    if (isFunctor(m)) {
      return (m as Functor<A>).map(fn)
    }

    if (isObject(m)) {
      return mapObject(fn)(m as Record<K, A>)
    }

    if (isFunction(m)) {
      return compose2(fn, m as Funxion)
    }
  }

  return m
}
