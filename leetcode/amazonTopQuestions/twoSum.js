/*
1. Two Sum
https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
    var table = {};
    for (var i=0; i<nums.length; i++) {
        var complement = target - nums[i];
        if (complement in table) {
            return [table[complement], i];
        } else {
            table[nums[i]] = i;
        }
    }
};
