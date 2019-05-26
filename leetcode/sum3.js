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

// My solution didn't pass. Time limit exceeded
function getFrequency(nums) {
    var table = {};
    for (var i=0; i<nums.length; i++) {
        var number = nums[i];
        if (!table[number])
            table[number] = 1;
        else
            table[number]++;
    }
    return table;
}
var threeSum = function(nums) {
    var result = [];
    nums.sort();
    var resultsTable = {};
    var table = getFrequency(nums);
    for (var i=0; i<nums.length; i++) {
        for (var j=i+1; j<nums.length; j++) {
            var complement = 0 - nums[i] - nums[j];
            if (complement < nums[j])
                continue;
            if (table[complement]) {
                if (complement === 0 && nums[i] === 0) {
                    if (table[complement] < 3)
                        continue;
                }
                if (complement === nums[i] || complement === nums[j]) {
                    if (table[complement] < 2)
                        continue;
                }   
                var triplet = [nums[i], nums[j], complement];
                
                if (!resultsTable[triplet.toString()]) {
                    result.push(triplet);
                    resultsTable[triplet.toString()] = true;
                }   
            }
        }
    }
    return result;
};
