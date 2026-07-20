export const zip = <A, B>(xs: A[], ys: B[]): [A, B][] => {
  const zs: [A, B][] = []
  const iterY = ys[Symbol.iterator]()

  for (const x of xs) {
    const next = iterY.next()

    if (next.done === true) {
      break
    }

    zs.push([x, next.value])
  }

  return zs
}

export const zipU = <A, B>(xs: A[]) => (ys: B[]): [A, B][] =>
  zip(xs, ys)
