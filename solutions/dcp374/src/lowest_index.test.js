/* eslint-env jest */
/*
  Daily Coding Problem: Problem #374 [Hard]

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Amazon.

  Given a sorted array arr of distinct integers, return the lowest index i for which arr[i] == i. Return null if there is no such index.

  For example, given the array [-5, -3, 2, 3], return 2 since arr[2] == 2. Even though arr[3] == 3, we return 2 since it's the lowest index.
*/

const lowestIndex = require('./lowest_index')

test('given [-5, -3, 2, 3], return 2', () => {
  expect(lowestIndex([-5, -3, 2, 3])).toBe(2)
})
test('given [2, 4, 5, 6], return null', () => {
  expect(lowestIndex([2, 4, 5, 6])).toBe(null)
})
test('given [-1, 0, 1, 2], return null', () => {
  expect(lowestIndex([-1, 0, 1, 2])).toBe(null)
})
