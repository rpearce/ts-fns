export interface Log {
 (...args: unknown[]): <A>(x: A) => A
}

export const log: Log = (...args) => x =>
  (console.log(...args, x), x)
