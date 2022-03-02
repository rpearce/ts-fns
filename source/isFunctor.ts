import { Functor, isArray, isObject, isFunction } from './'

export const isFunctor = <A>(x: unknown): x is Functor<A> =>
  (isArray(x) || isObject(x)) && isFunction(x.map)
