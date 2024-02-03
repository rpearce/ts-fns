export type Functor<A> =
  { map<B>(fn: (x: A) => B): Functor<B>
  , [k: PropertyKey]: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  }
