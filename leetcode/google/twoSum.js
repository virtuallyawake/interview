/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var table = {};
    
    for(var i=0; i<nums.length; i++) {
        var complement = target - nums[i];
        if (complement in table) {
            return [i, table[complement]]
        }
        table[nums[i]] = i;
    }
}


var twoSum2 = function(nums, target) {
    var newNums = nums.map(function(num, i) {
       return [num, i]; 
    });
    newNums.sort((a,b) => a[0]-b[0]);
    
    var left = 0;
    var right = nums.length-1;
    var sum = newNums[right][0] + 1000000000;
    
    while (left < right) {
        sum = newNums[left][0] + newNums[right][0];
        console.log("sum: " + sum)
        if (sum > target)
            right--;
        
        if (sum < target)
            left++;

        if (sum == target)
            break;
    }
    
    return [newNums[left][1], newNums[right][1]];
};
