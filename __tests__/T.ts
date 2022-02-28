import { T } from '../source'

test('T always returns true', () => {
  expect(T()).toStrictEqual(true)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(T(null)).toStrictEqual(true)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(T('ignored')).toStrictEqual(true)
})
