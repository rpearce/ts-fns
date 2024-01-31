import { when, whenU } from '../source'

test('when works with all function values', () => {
  const condition = (x: number) => x > 9000
  const transform = (x: number) => `${x} is over 9000!`

  expect(when(condition, transform, 9001)).toStrictEqual('9001 is over 9000!')
  expect(when(condition, transform, 9000)).toStrictEqual(9000)

  expect(whenU(condition)(transform)(9001)).toStrictEqual('9001 is over 9000!')
  expect(whenU(condition)(transform)(9000)).toStrictEqual(9000)
})

test('when works with all static values', () => {
  const condition = 9001
  const transform = '9001 is over 9000!'

  expect(when(condition, transform, 9001)).toStrictEqual('9001 is over 9000!')
  expect(when(condition, transform, 9000)).toStrictEqual(9000)

  expect(whenU(condition)(transform)(9001)).toStrictEqual('9001 is over 9000!')
  expect(whenU(condition)(transform)(9000)).toStrictEqual(9000)
})

test('when works with function condition & static transform', () => {
  const condition = (x: number) => x > 9000
  const transform = 'That is over 9000!'

  expect(when(condition, transform, 9001)).toStrictEqual('That is over 9000!')
  expect(when(condition, transform, 9000)).toStrictEqual(9000)

  expect(whenU(condition)(transform)(9001)).toStrictEqual('That is over 9000!')
  expect(whenU(condition)(transform)(9000)).toStrictEqual(9000)
})

test('when works with static condition & function transform', () => {
  const condition = 9001
  const transform = (x: number) => `${x} = 9001 & is over 9000!`

  expect(when(condition, transform, 9001)).toStrictEqual('9001 = 9001 & is over 9000!')
  expect(when(condition, transform, 9000)).toStrictEqual(9000)

  expect(whenU(condition)(transform)(9001)).toStrictEqual('9001 = 9001 & is over 9000!')
  expect(whenU(condition)(transform)(9000)).toStrictEqual(9000)
})
