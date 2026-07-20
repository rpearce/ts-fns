import { reduce } from './reduce.js'

export interface Sum {
  (xs: number[]): number
}

export const sum: Sum = xs =>
  reduce<number, number>((acc, x) => acc + x, 0, xs)
