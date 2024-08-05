export interface Zip {
  <A, B>(xs: A[], ys: B[]): [A, B][]
}

export interface ZipU {
  <A, B>(xs: A[]): (ys: B[]) => [A, B][]
}

export const zip: Zip = (xs, ys) => {
  const maxLength = Math.min(xs.length, ys.length)
  const zs = new Array(maxLength)

  for (let i = 0; i < maxLength; i++) {
    zs[i] = [xs[i], ys[i]]
  }

  return zs
}

export const zipU: ZipU = xs => ys =>
  zip(xs, ys)
