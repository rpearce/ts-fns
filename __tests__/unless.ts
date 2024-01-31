import { unless, unlessU } from '../source'

test('unless works with all function values', () => {
  const condition = (x: number) => x > 9000
  const transform = (x: number) => `${x} is not over 9000!`

  expect(unless(condition, transform, 9001)).toStrictEqual(9001)
  expect(unless(condition, transform, 9000)).toStrictEqual('9000 is not over 9000!')

  expect(unlessU(condition)(transform)(9001)).toStrictEqual(9001)
  expect(unlessU(condition)(transform)(9000)).toStrictEqual('9000 is not over 9000!')
})

test('unless works with all static values', () => {
  const condition = 9001
  const transform = 'Not 9001!'

  expect(unless(condition, transform, 9001)).toStrictEqual(9001)
  expect(unless(condition, transform, 9000)).toStrictEqual('Not 9001!')

  expect(unlessU(condition)(transform)(9001)).toStrictEqual(9001)
  expect(unlessU(condition)(transform)(9000)).toStrictEqual('Not 9001!')
})

test('unless works with function condition & static transform', () => {
  const condition = (x: number) => x > 9000
  const transform = 'That is not over 9000!'

  expect(unless(condition, transform, 9001)).toStrictEqual(9001)
  expect(unless(condition, transform, 9000)).toStrictEqual('That is not over 9000!')

  expect(unlessU(condition)(transform)(9001)).toStrictEqual(9001)
  expect(unlessU(condition)(transform)(9000)).toStrictEqual('That is not over 9000!')
})

test('unless works with static condition & function transform', () => {
  const condition = 9001
  const transform = (x: number) => `${x} is not 9001!`

  expect(unless(condition, transform, 9001)).toStrictEqual(9001)
  expect(unless(condition, transform, 9000)).toStrictEqual('9000 is not 9001!')

  expect(unlessU(condition)(transform)(9001)).toStrictEqual(9001)
  expect(unlessU(condition)(transform)(9000)).toStrictEqual('9000 is not 9001!')
})
