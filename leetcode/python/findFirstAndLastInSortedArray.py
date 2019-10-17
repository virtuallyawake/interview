"""
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
"""

class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        def firstAndLast(nums, target, mid):
            doneLeft = False;
            doneRight = False;
            left = mid;
            right = mid;
            N = len(nums);
            while not (doneLeft and doneRight):
                if left > 0 and nums[left] == nums[left-1]:
                    left = left - 1;
                else:
                    doneLeft = True;
                if right < N-1 and nums[right] == nums[right+1]:
                    right = right + 1;
                else:
                    doneRight = True;
                
            return [left, right];
        
        def binarySearch(num, target, left, right):
            if left > right:
                return [-1, -1];
            mid = left + (right-left+1)//2;
            if nums[mid] == target:
                return firstAndLast(nums, target, mid);
            if left == right:
                return [-1, -1];
            
            if target < nums[mid]:
                return binarySearch(nums, target, left, mid-1);
            else:
                return binarySearch(nums, target, mid+1, right);
        
        return binarySearch(nums, target, 0, len(nums)-1);
        
