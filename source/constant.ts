export interface Constant {
  <A>(x: A): (b: unknown) => A
}

export const constant: Constant = x => () => x
