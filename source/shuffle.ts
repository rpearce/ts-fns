// Fisher-Yates variant: repeatedly extract a uniformly random remaining element
export const shuffle = <A>(xs: A[]): A[] => {
  const pool = [...xs]
  const result: A[] = []

  while (pool.length > 0) {
    const j = Math.floor(Math.random() * pool.length)

    result.push(...pool.splice(j, 1))
  }

  return result
}
