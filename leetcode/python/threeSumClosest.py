"""
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
"""

class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """

        shortest = 10000;
        nums.sort();
        n = len(nums);
        for i in range(n):
            j = i+1;
            k = n-1;
            while j<k:
                sum = nums[i] + nums[j] + nums[k];
                diff = abs(target - sum);
                if diff < shortest:
                    shortest = diff;
                    winner = sum;
                if sum < target:
                    j = j + 1;
                if sum > target:
                    k = k - 1;
                if sum == target:
                    break;
         
        return winner;
