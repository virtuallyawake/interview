/*
33. Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

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

function binarySearchRotated(arr, left, right, target) {
    if (left > right) {
        return -1;
    }

    var midPoint = left + Math.floor((right-left+1)/2);
    
    if (arr[midPoint] === target) {
        return midPoint;
    }
    
    if (left === right) {
        return -1;
    }
    
    // Check if left subarray is ordered
    if (arr[left] < arr[midPoint-1]) {
        if (arr[left] <= target && target <= arr[midPoint-1]) {
            return binarySearchRotated(arr, left, midPoint-1, target);
        } else { // search on right subarray
            return binarySearchRotated(arr, midPoint+1, right, target);
        }
    } else { // right subarray is ordered
        if (arr[midPoint+1] <= target && target <= arr[right]) {
            return binarySearchRotated(arr, midPoint+1, right, target);
        } else { // search on left subarray
            return binarySearchRotated(arr, left, midPoint-1, target);
        }
    }
}

var search = function(nums, target) {
    if (nums.length === 0) {
        return -1;
    }
    
    return binarySearchRotated(nums, 0, nums.length-1, target); 
};
