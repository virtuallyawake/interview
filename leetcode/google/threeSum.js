/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

// ALMOST PASSES ALL TESTS. TIMED OUT ON THE SECOND TO LAST.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    var results = {};
    // a+b+c = 0
    for (var i=0; i<nums.length; i++) {
        var a = nums[i];
        // b + c = -a
        var target = -a;
        var left = i+1;
        var right = nums.length-1;
        while (left < right) {
            var b = nums[left];
            var c = nums[right];
            var sum = b + c;
            if (sum === target) {
                var result = [a, b, c];
                result.sort((a,b) => a-b);
                var key = result.join(''); //abc
                results[key] = result;
            }
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    
    return Object.values(results);
};
