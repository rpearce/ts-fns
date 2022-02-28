import { isArray, isObject, isFunction } from './'

export interface IsFunctor {
  (x: unknown): boolean
}

export const isFunctor: IsFunctor = x =>
  (isArray(x) || isObject(x)) && isFunction(x.map)
