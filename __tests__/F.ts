import { F } from '../source'

test('F always returns false', () => {
  expect(F()).toStrictEqual(false)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(F(null)).toStrictEqual(false)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(F('ignored')).toStrictEqual(false)
})
