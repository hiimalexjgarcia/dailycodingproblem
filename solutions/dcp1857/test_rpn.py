import unittest

from rpn import rpn

class TestRpn(unittest.TestCase):
    def test_expression_five_three_plus(self): # [5, 3, '+']
        self.assertEqual(rpn("[5, 3, '+']"), 8)

    def test_expression_fifteen_seven_one_one_plus_minus_division_three_times_two_one_one_plus_plus_minus(self): # [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']
        self.assertEqual(rpn("[15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']"), 5)

    def test_expression_invalid(self):
        self.assertEqual(rpn("[asdf]"), "Invalid expression: [asdf]")
