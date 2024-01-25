export interface Shuffle {
  <A>(xs: A[]): A[]
}

// Modern Fisher-Yates shuffle algo
export const shuffle: Shuffle = (xs) => {
  const xsClone = structuredClone(xs)
  let i = xsClone.length - 1

  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = xsClone[i]

    xsClone[i] = xsClone[j]
    xsClone[j] = tmp
  }

  return xsClone
}
