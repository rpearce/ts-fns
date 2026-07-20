export interface Functor<A> {
  map: <B>(fn: (x: A) => B) => Functor<B>,
  [k: PropertyKey]: unknown,
}
