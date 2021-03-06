import { propOr } from '../source'


test('propOr returns fallback if nil input', () => {
  const fallback = 'Unknown'
  const prop     = 'name'

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(propOr(fallback)(prop)(undefined)).toStrictEqual('Unknown')

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(propOr(fallback)(prop)(null)).toStrictEqual('Unknown')
})

test('propOr returns fallback if not found in object', () => {
  const fallback = 'Unknown'
  const prop     = 'name'

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(propOr(fallback)(prop)({})).toStrictEqual('Unknown')

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(propOr(fallback)(prop)({ foo: 'bar' })).toStrictEqual('Unknown')
})

test('propOr returns property if found in object', () => {
  const fallback = 'Unknown'
  const prop     = 'name'
  const input    = { name: 'bobert' }

  expect(propOr(fallback)(prop)(input)).toStrictEqual('bobert')
})

test('propOr returns fallback if not found in array', () => {
  const fallback = -1
  const prop     = 3
  const input    = [1, 2, 3]

  expect(propOr(fallback)(prop)(input)).toStrictEqual(-1)
})

test('propOr returns property if found in array', () => {
  const fallback = -1
  const prop     = 0
  const input    = [1, 2, 3]

  expect(propOr(fallback)(prop)(input)).toStrictEqual(1)
})
