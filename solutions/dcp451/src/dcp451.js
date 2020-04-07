/*
  Daily Coding Problem: Problem #451 [Easy]

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Apple.

  Implement the function fib(n), which returns the nth number in the Fibonacci
  sequence, using only O(1) space.
*/

function fib (seqnum) {
  if (seqnum < 0)
    return null
  if (seqnum <= 1 || seqnum === 5)
    return seqnum
  if (seqnum <= 4)
    return seqnum - 1

  let prevSeqValue = 5
  let curSeqValue = 8
  let curSeq = 6

  while (seqnum > curSeq) {
    let tmp = prevSeqValue
    prevSeqValue = curSeqValue
    curSeqValue = curSeqValue + tmp
    curSeq++
  }

  return curSeqValue
}

module.exports = fib
