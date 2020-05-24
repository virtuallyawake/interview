/*
73. Set Matrix Zeroes

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
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

// 1st pass: collect rows and cols where there is a zero.
// 2nd pass: set elements in rows and cols identified in 1st pass to zero
// O(mn) time
// O(m + n) space
var setZeroes = function(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    var zeroRows = {};
    var zeroCols = {};
    
    for (var i=0; i<rows; i++) {
	for (var j=0; j<cols; j++) {
	    if (matrix[i][j] === 0) {
		zeroRows[i] = true;
		zeroCols[j] = true;
	    }
	}
    }


    for (var i=0; i<rows; i++) {
	for (var j=0; j<cols; j++) {
	    if (i in zeroRows || j in zeroCols) {
		matrix[i][j] = 0;
	    }
	}
    }
};

// Constant space
// 1st pass: if 0 found, change elements in row and col to X, except 0s.
// 2nd pass: change Xs to 0s.

function setRowTo(matrix, row, setChar, skipChar) {
    for (var j=0; j<matrix[0].length; j++) {
	if (matrix[row][j] !== skipChar) {
	    matrix[row][j] = setChar;
	}
    }
}

function setColTo(matrix, col, setChar, skipChar) {
    for	(var i=0; i<matrix.length; i++) {
	if (matrix[i][col] !== skipChar) {
            matrix[i][col] = setChar;
        }
    }
}

var setZeroes = function(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;

    for (var i=0; i<rows; i++) {
	for (var j=0; j<cols; j++) {
            if (matrix[i][j] === 0) {
		setRowTo(matrix, i, 'X', 0);
		setColTo(matrix, j, 'X', 0);
            }
        }
    }

    for (var i=0; i<rows; i++) {
	for (var j=0; j<cols; j++) {
	    if (matrix[i][j] === 'X') {
		matrix[i][j] = 0;
	    }
	}
    }
}
