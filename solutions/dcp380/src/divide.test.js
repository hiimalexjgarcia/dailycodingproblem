/* eslint-env jest */
/*
  Daily Coding Problem: Problem 380 [Medium]

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Nextdoor.

  Implement integer division without using the division operator. Your function should return a tuple of (dividend, remainder) and it should take two numbers, the product and divisor.

  For example, calling divide(10, 3) should return (3, 1) since the divisor is 3 and the remainder is 1.

  Bonus: Can you do it in O(log n) time?
*/

const divide = require('./divide')

test('given (10, 3), return (3, 1)', () => {
  expect(divide(10, 3)).toStrictEqual([3, 1])
})
test('given (40, 3), return (13, 1)', () => {
  expect(divide(40, 3)).toStrictEqual([13, 1])
})
test('given (1, 2), return (0, 1)', () => {
  expect(divide(1, 2)).toStrictEqual([0, 1])
})
test('given (0, 5), return (0, 0)', () => {
  expect(divide(0, 5)).toStrictEqual([0, 0])
})
