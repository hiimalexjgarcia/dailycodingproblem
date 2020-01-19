/*
  Daily Coding Problem: Problem #372 [Easy]

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Amazon.

  Write a function that takes a natural number as input and returns the number of digits the input has.

  Constraint: don't use any loops.
*/

function getNumberOfDigitsFromNaturalNumber (number) {
  return number.toString().length
}

module.exports = getNumberOfDigitsFromNaturalNumber
