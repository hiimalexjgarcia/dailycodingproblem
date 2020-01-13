/* eslint-env jest */
const rearrangeString = require('./rearrange_string')

test('given string "yyz", return "yzy"', () => {
  expect(rearrangeString('yyz')).toBe('yzy')
})

test('given string "yyy", return null', () => {
  expect(rearrangeString('yyy')).toBe(null)
})

test('given string "y", return "y"', () => {
  expect(rearrangeString('y')).toBe('y')
})

test('given string "", return ""', () => {
  expect(rearrangeString('')).toBe('')
})

test('given string "zzvvvvvvzxcvoiwls", return "zvzvzvxvcvovivwls"', () => {
  expect(rearrangeString('zzvvvvvvzxcvoiwls')).toBe('zvzvzvxvcvovivwls')
})


/*
Sun, Jan 12, 2020 at 10:33 AM

Daily Coding Problem

Good morning! Here's your coding interview problem for today.
This problem was asked by Flexport.
Given a string s , rearrange the characters so that any two adjacent
characters are not the same. If this is not possible, return null.
For example, if s = yyz then return yzy . If s = yyy then
return null.
*/
