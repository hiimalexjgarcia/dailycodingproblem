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

test('findNthPerfect(9) returns 91', () => {
  expect( findNthPerfect( 9 ) ).toBe( 91 )
})

test('findNthPerfect(10) returns 109', () => {
  expect( findNthPerfect( 10 ) ).toBe( 109 )
})

test('findNthPerfect(19) returns 190', () => {
  expect( findNthPerfect( 19 ) ).toBe( 190 )
})

test('findNthPerfect(20) returns 208', () => {
  expect( findNthPerfect( 20 ) ).toBe( 208 )
})
