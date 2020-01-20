/*
    Daily Coding Problem: Problem 373 [Hard]

    Good morning! Here's your coding interview problem for today.

    This problem was asked by Facebook.

    Given a list of integers L, find the maximum length of a sequence of consecutive numbers that can be formed using elements from L.

    For example, given L = [5, 2, 99, 3, 4, 1, 100], return 5 as we can build a sequence [1, 2, 3, 4, 5] which has length 5.
*/

function getMaxLength (l) {
  if (l.length < 3) { return l.length }

  l.sort((a, b) => a - b)
  l.push(Number.MIN_VALUE)

  let previous = 0
  let current = l.shift()
  let length = 1
  let maxLength = 1

  do {
    previous = current
    current = l.shift()
    if (previous === (current - 1)) { length++ } else {
      if (length >= maxLength) {
        maxLength = length
        length = 1
      }
    }
  } while (l.length !== 0)

  return maxLength
}

module.exports = getMaxLength
