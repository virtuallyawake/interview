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

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
For a given 'a', find b+c = -a
*/
var threeSum = function(nums) {
    nums.sort(function(a, b) {
        return a-b;
    });
    
    var results = {};
    // a+b+c = 0
    for (var i=0; i<nums.length; i++) {
        var a = nums[i];
        var target = -a;  // b+c = -a
        var left = i+1;
        var right = nums.length-1;
        
        while (left < right) {
            var b = nums[left];
            var c = nums[right];
            var sum = b + c;
            if (sum === target) {
                var result = [a,b,c];
                var key = result.join(',');
                results[key] = result;
                left++;
                right--;
                continue;
            }
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return Object.values(results);
};
