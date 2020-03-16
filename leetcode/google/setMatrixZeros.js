/*
73.

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // Get coordinates of zeros
    var rows = {};
    var cols = {};
    
    var N = matrix.length;
    var M = matrix[0].length;
    
    // Collecting rows and columns where zeros are found
    for (var i=0; i<N; i++) {
        for (var j=0; j<M; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = true;
                cols[j] = true;
            }
        }
    }
    
    // Set element to 0 if in row or col found earlier
    for (var i=0; i<N; i++) {
        for (var j=0; j<M; j++) {
            if (i in rows || j in cols) {
                matrix[i][j] = 0;
            }
        }
    }
};
