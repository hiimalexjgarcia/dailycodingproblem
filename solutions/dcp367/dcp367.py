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

def merge_iterator(foo, bar):
    result = []
    for num in foo:
        result.append(num)
    for num in bar:
        result.append(num)
    result.sort()
    return iter(result)
