/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
[2,3,1,1,4]
reachable = {
    0: true
    1: true,
    2: true,
    3: true,
    4: true
}
*/
var canJump = function(nums) {
    var reachable = { 0: true };
    for (var i=0; i<nums.length; i++) {
        if (i in reachable) {
            var steps = Math.min(nums[i], nums.length-1-i);
            for (var j=1; j<=steps; j++) {
                reachable[i+j] = true;
            }
        }
        if (nums.length-1 in reachable) {
            return true;
        }
    }
    
    return false;
};
