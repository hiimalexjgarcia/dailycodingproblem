/* eslint-env jest */
/*
  Daily Coding Problem: Problem #451 [Easy]

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Apple.

  Implement the function fib(n), which returns the nth number in the Fibonacci
  sequence, using only O(1) space.
*/

const fib = require('./dcp451')

test('fib(0) returns 0', () => {
  expect(fib(0)).toStrictEqual(0)
})
test('fib(1) returns 1', () => {
  expect(fib(1)).toStrictEqual(1)
})
test('fib(2) returns 1', () => {
  expect(fib(2)).toStrictEqual(1)
})
test('fib(3) returns 2', () => {
  expect(fib(3)).toStrictEqual(2)
})
test('fib(4) returns 3', () => {
  expect(fib(4)).toStrictEqual(3)
})
test('fib(5) returns 5', () => {
  expect(fib(5)).toStrictEqual(5)
})
test('fib(6) returns 8', () => {
  expect(fib(6)).toStrictEqual(8)
})
test('fib(7) returns 13', () => {
  expect(fib(7)).toStrictEqual(13)
})
test('fib(8) returns 21', () => {
  expect(fib(8)).toStrictEqual(21)
})
test('fib(9) returns 34', () => {
  expect(fib(9)).toStrictEqual(34)
})
test('fib(10) returns 55', () => {
  expect(fib(10)).toStrictEqual(55)
})

