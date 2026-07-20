import type { Functor } from './customTypes.js'
import { compose2 } from './compose2.js'
import { isFunction } from './isFunction.js'
import { isFunctor } from './isFunctor.js'
import { isObject } from './isObject.js'
import { mapObject } from './mapObject.js'

export type MapData<A> =
    A[]
  | Functor<A>
  | Record<PropertyKey, A>
  | ((x: never) => A)

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
