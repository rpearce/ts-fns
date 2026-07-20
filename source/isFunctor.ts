import type { Functor } from './customTypes.js'
import { isArray } from './isArray.js'
import { isFunction } from './isFunction.js'
import { isObject } from './isObject.js'

export const isFunctor = <A>(x: unknown): x is Functor<A> =>
  isArray(x) || (isObject(x) && isFunction(x['map']))
