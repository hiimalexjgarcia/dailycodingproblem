/*
  Daily Coding Problem: Problem 373 [Hard]

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Facebook.

  Given a list of integers L, find the maximum length of a sequence of consecutive numbers that can be formed using elements from L.

  For example, given L = [5, 2, 99, 3, 4, 1, 100], return 5 as we can build a sequence [1, 2, 3, 4, 5] which has length 5.
*/
/* eslint-env jest */

const getMaxLength = require('./get_max_length')

test('given [5, 2, 99, 3, 4, 1, 100], return 5', () => {
  expect(getMaxLength([5, 2, 99, 3, 4, 1, 100])).toBe(5)
})

test('given [3, 2, 4, 11, 9, 10, 12], return 4', () => {
  expect(getMaxLength([3, 2, 4, 11, 9, 10, 12])).toBe(4)
})

test('given [8, 3, 82, 38, 28, 4, 7, 9, -1, 0, 12, 15, 16, 1, 2, 10, 11], return 6', () => {
  expect(getMaxLength([8, 3, 82, 38, 28, 4, 7, 9, -1, 0, 12, 15, 16, 1, 2, 10, 11])).toBe(6)
})
