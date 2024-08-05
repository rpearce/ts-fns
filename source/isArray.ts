export const isArray = (x: unknown): x is unknown[] =>
  Array.isArray(x)
