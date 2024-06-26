/*
  Daily Coding Problem: Problem #1525 [Easy]

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Google.

  UTF-8 is a character encoding that maps each symbol to one, two, three, or four bytes.

  For example, the Euro sign, €, corresponds to the three bytes 11100010 10000010 10101100. The rules for mapping characters are as follows:

  * For a single-byte character, the first bit must be zero.
  * For an n-byte character, the first byte starts with n ones and a zero. The other n - 1 bytes all start with 10.

  Visually, this can be represented as follows.

  Bytes   |           Byte format
  -----------------------------------------------
    1     | 0xxxxxxx
    2     | 110xxxxx 10xxxxxx
    3     | 1110xxxx 10xxxxxx 10xxxxxx
    4     | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

  Write a program that takes in an array of integers representing byte values, and returns whether it is a valid UTF-8 encoding.
*/

const isValidUTF8 = require('./dcp1525')

test('isValidUTF8([226, 130, 172]) returns true', () => {
  expect( isValidUTF8([226, 130, 172]) ).toBe( true )
})

test('isValidUTF8([223]) returns false', () => {
  expect( isValidUTF8([223]) ).toBe( false )
})

test('isValidUTF8([127]) returns true', () => {
  expect( isValidUTF8([127]) ).toBe( true )
})

test('isValidUTF8([]) throws exception', () => {
  expect( () => isValidUTF8([]) ).toThrow( Error )
})

test('isValidUTF8([223, 23, 523, 12, 5]) throws exception', () => {
  expect( () => isValidUTF8([223, 23, 523, 12, 5]) ).toThrow ( Error )
})

test('isValidUTF8([255, 128, 138, 148, 158, 168, 178, 188]) throws exception', () => {
  expect( () => isValidUTF8([255, 128, 138, 148, 158, 168, 178, 188]) ).toThrow( Error )
})
