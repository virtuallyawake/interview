/*
Find the leftmost column that has 1 in a binary matrix

Given a matrix satisfying the following two conditions:
each cell is either 1 or 0
in each row, from left to right, when you first see a number 1 in cell, then the rest cells in this row will all be 1
For example:
[[0, 0, 1, 1, 1],
 [0, 1, 1, 1, 1],
 [0, 0, 1, 1, 1],
 [0, 0, 0, 0, 0]]
Question: find the leftmost column that has number 1

In this example, answer will be 2, because there is a number 1 at Matrix[1, 1]

*/

function getLeftmost1(A) {
    var rows = A.length;
    var cols = A[0].length;
    
    for (var j=0; j<cols; j++) {
  	for (var i=0; i<rows; i++) {
    	    if (A[i][j] === 1) {
      		return j+1;
	    }
	}
    }
}

function getLeftmost(A) {
    var i = 0;
    var j = 0;
    var rows = A.length;
    var cols = A[0].length;
    var leftmost = 100000000;
    
    while (i < rows && j < cols) {
  	if (A[i][j] === 0) {
    	    if (j === cols - 1) {
      		i++;
	    } else {
      		j++;
	    }
	    continue;
	}
	
	if (A[i][j] === 1) {
    	    if (j < leftmost) {
      		leftmost = j;
	    }
    	    if (j === 0) {
      		i++;
		continue;
	    }
     	    if (A[i][j-1] === 0) {
		i++;
	    } else {
       		j--;
	    }
	}
    }
    
    return leftmost+1;
}

var A = [[0, 0, 0, 0, 0],
         [0, 0, 0, 1, 1],
         [1, 1, 1, 1, 1],
         [0, 0, 0, 0, 0]];
/*         
0 => move right
[0, 1] => move down
[1, 1] => move left
*/
console.log(getLeftmost(A));
 
