export interface Identity {
  <A>(x: A): A
}

export const identity: Identity = x => x
