"""
Subject: Daily Coding Problem: Problem #1857 [Hard]

Good morning! Here's your coding interview problem for today.

This problem was asked by Jane Street.

Given an arithmetic expression in Reverse Polish Notation, write a program to evaluate it.

The expression is given as a list of numbers and operands. For example: [5, 3, '+'] should return 5 + 3 = 8.

For example,

[15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']

should return 5, since it is equivalent to

((15 / (7 - (1 + 1))) * 3) - (2 + (1 + 1)) = 5.

You can assume the given expression is always valid.
"""

import unittest

from rpn import rpn

class TestRpn(unittest.TestCase):
    def test_expression_five_three_plus(self): # [5, 3, '+']
        self.assertEqual(rpn("[5, 3, '+']"), 8)

    def test_expression_fifteen_seven_one_one_plus_minus_division_three_times_two_one_one_plus_plus_minus(self): # [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']
        self.assertEqual(rpn("[15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']"), 5)

    def test_expression_10_10_times_2_division(self): # [ 10, 12, '*', 2, '/' ]
        self.assertEqual(rpn("[10, 12, '*', 2, '/']"), 60)

    def test_expression_invalid_expression(self):
        self.assertRaises(ValueError, rpn, "[1,2,34]")