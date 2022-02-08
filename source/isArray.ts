export interface IsArray {
  (x: unknown): boolean
}

export const isArray: IsArray = x => Array.isArray(x)
