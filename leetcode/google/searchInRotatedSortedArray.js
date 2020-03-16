/*Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [1,2,3], mid = 2
// [1,2], mid = 2
function binarySearch(nums, target, left, right) {
    var mid = left + Math.floor((right-left+1)/2);
    
    if (left > right)
        return -1;
    
    if (nums[mid] === target) 
        return mid;
    
    if (left === right)
        return -1;
    
    if (nums[left] <= nums[mid-1]) { // left half sorted
        if (target < nums[left] || target > nums[mid-1]) { // search on right half
            return binarySearch(nums, target, mid+1, right);
        }
        return binarySearch(nums, target, left, mid-1);
    } else { // right half sorted
        if (target < nums[mid+1] || target > nums[right]) { // search on left half
            return binarySearch(nums, target, left, mid-1);
        }
        return binarySearch(nums, target, mid+1, right);
    }
}

var search = function(nums, target) {
    if (nums.length === 0)
        return -1;
    
    return binarySearch(nums, target, 0, nums.length-1)
};
