/* eslint-env jest */

/*
Daily Coding Problem: Problem #365 [Hard]
Sat, Jan 11, 2020 at 10:25 AM

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

A quack is a data structure combining properties of both stacks and queues. It can be viewed as a list of elements written left to right such that three operations are possible:

    push(x): add a new item x to the left end of the list
    pop(): remove and return the item on the left end of the list
    pull(): remove the item on the right end of the list.

Implement a quack using three stacks and O(1) additional memory, so that the amortized time for any push, pop, or pull operation is O(1).
*/

const Quack = require('./quack')

test('instantiate a Quack', () => {
  const myQuack = new Quack()
  expect(myQuack).toBeInstanceOf(Quack)
})
