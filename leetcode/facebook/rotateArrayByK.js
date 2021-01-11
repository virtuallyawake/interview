/*
189. Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Using tmp array
var rotate1 = function(nums, k) {
    var N = nums.length;
    k = k % N;
    var tmpArray = nums.slice(N-k, N);
    
    // Move elements 0 to (N-k-1) up k positions
    for (var i=N-k-1; i>=0; i--) {
        nums[i+k] = nums[i];
    }
    
    // Put tmpArray elements in the front
    for (var i=0; i<tmpArray.length; i++) {
        nums[i] = tmpArray[i];
    }
};

// Shifting elements one positions at a time
// Might exceed time
function rotateOnePosition(nums) {
    var previous = nums[nums.length-1];
    for (var i=0; i<nums.length; i++) {
        var tmp = nums[i];
        nums[i] = previous;
        previous = tmp;
    }
}

var rotate2 = function(nums, k) {
    var N = nums.length;
    k = k % N;
    for (var i=0; i<k; i++) {
        rotateOnePosition(nums);
    }    
}

// Compute the right position for each element
// Then move all elements to the right position in nums
var rotate = function(nums, k) {
    var N = nums.length;
    // 1. Find the new positions for elements
    var table = {};  // pos: element
    for (var i=0; i<N; i++) {
        table[(i+k) % N] = nums[i];
    }
    // 2. Populate nums with elements in the correct positions
    for (var i=0; i<N; i++) {
        nums[i] = table[i];
    }
}
 
