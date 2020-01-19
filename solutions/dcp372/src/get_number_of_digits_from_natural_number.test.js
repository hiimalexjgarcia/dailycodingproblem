/*
Daily Coding Problem: Problem #372 [Easy]

Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Write a function that takes a natural number as input and returns the number of digits the input has.

Constraint: don't use any loops.

*/
/* eslint-env jest */

const getNumberOfDigitsFromNaturalNumber = require('./get_number_of_digits_from_natural_number')

test('given number 234, return 3', () => {
  expect(getNumberOfDigitsFromNaturalNumber(234)).toBe(3)
})
