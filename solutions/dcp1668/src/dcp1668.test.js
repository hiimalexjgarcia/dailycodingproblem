/*
  Daily Coding Problem: Problem #1668 [Easy]

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Microsoft.

  A number is considered perfect if its digits sum up to exactly 10.

  Given a positive integer n, return the n-th perfect number.

  For example, given 1, you should return 19. Given 2, you should return 28.
*/

const findNthPerfect = require('./dcp1668')

test('findNthPerfect(1) returns 19', () => {
  expect( findNthPerfect( 1 ) ).toBe( 19 )
})

test('findNthPerfect(2) returns 28', () => {
  expect( findNthPerfect( 2 ) ).toBe( 28 )
})
