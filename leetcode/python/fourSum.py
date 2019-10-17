"""
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
"""

class Solution(object):    
    def fourSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        nums.sort();
        solutions = set();
        for i in range(len(nums)):
            a = nums[i];
            for j in range(i+1, len(nums)):
                b = nums[j];
                # do we have c + d = target - a - b ?
                targetcd = target - a - b;
                left = j + 1;
                right = len(nums) - 1;
                while left < right:
                    c = nums[left];
                    d = nums[right];
                    sum = c + d;
                    if sum == targetcd:
                        solutions.add((a,b,c,d));
                    if sum < targetcd:
                        left = left + 1;
                    else:
                        right = right - 1;
                        
        return [list(tup) for tup in solutions];
