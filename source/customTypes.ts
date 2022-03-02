export type Key =
    string
  | number
  | symbol

export type Objekt<A> =
  Record<Key, A>

export type Functor<A> =
  { map<B>(fn: (x: A) => B): Functor<B>
  , [k: Key]: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  }
