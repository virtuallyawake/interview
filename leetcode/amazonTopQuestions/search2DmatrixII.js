/*
240. Search a 2D Matrix II
https://leetcode.com/problems/search-a-2d-matrix-ii/

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Start in top-right corner
    // If target is smaller, go left
    // If target is bigger, go down
    // If we go out-of-bounds, return false
    
    if (matrix.length === 0) {
        return false;
    }
    
    let i = 0; //  first row
    let j = matrix[0].length-1; // last column
    
    while (i < matrix.length && j >= 0) {
        if (target === matrix[i][j]) {
            return true;
        }
        
        if (target < matrix[i][j]) {  // target is smaller
            j--;
        } else { // target is bigger
            i++;
        }
    }
    
    return false;
};
