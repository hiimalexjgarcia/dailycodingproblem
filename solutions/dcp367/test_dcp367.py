#
# Daily Coding Problem: Problem #367 [Medium]
#
# Good morning! Here's your coding interview problem for today.
#
# This problem was asked by Two Sigma.
#
# Given two sorted iterators, merge it into one iterator.
#
# For example, given these two iterators:
#
# foo = iter([5, 10, 15])
# bar = iter([3, 8, 9])
#
# You should be able to do:
#
# for num in merge_iterators(foo, bar):
#     print(num)
#
# # 3
# # 5
# # 8
# # 9
# # 10
# # 15
#
# Bonus: Make it work without pulling in the contents of the iterators in memory.
#

import unittest
import dcp367

class TestDcp367(unittest.TestCase):

    def test_merge_iterator_exists(self):
        self.assertEqual('merge_iterator' in dir(dcp367), True)

    def test_merge_iterator_basic(self):
        foo = iter([5, 10, 15])
        bar = iter([3, 8, 9])
        merge_iterator = dcp367.merge_iterator
        mi = merge_iterator(foo, bar)
        self.assertEqual(next(mi), 3)
        self.assertEqual(next(mi), 5)
        self.assertEqual(next(mi), 8)
        self.assertEqual(next(mi), 9)
        self.assertEqual(next(mi), 10)
        self.assertEqual(next(mi), 15)
        self.assertRaises(StopIteration, next, mi)

    def test_merge_iterator_custom(self):
        foo = iter([1, 2, 4])
        bar = iter([3, 4, 5, 9, 20])
        merge_iterator = dcp367.merge_iterator
        mi = merge_iterator(foo, bar)
        self.assertEqual(next(mi), 1)
        self.assertEqual(next(mi), 2)
        self.assertEqual(next(mi), 3)
        self.assertEqual(next(mi), 4)
        self.assertEqual(next(mi), 4)
        self.assertEqual(next(mi), 5)
        self.assertEqual(next(mi), 9)
        self.assertEqual(next(mi), 20)
        self.assertRaises(StopIteration, next, mi)

if __name__ == '__main__':
    unittest.main()
