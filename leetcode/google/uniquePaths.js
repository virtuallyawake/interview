/*
62.

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Version that timed out
function explorePaths(i, j, m, n) {
    if (i === m-1 && j === n-1) {
        return 1;
    }

    var numPaths = 0;
    if (i < m-1) {
        numPaths += explorePaths(i+1, j, m, n);
    }
    if (j < n-1) {
        numPaths += explorePaths(i, j+1, m, n);
    }
    
    return numPaths;
}

var uniquePaths = function(m, n) {
    return explorePaths(0, 0, m, n);
};

// Version that doesn't time out. With memo.
function explorePathsMemo(i, j, m, n, memo) {
    if (i >= m || j >= n) {
        return 0;
    }
    
    if (i === m-1 && j === n-1) {
        return 1;
    }
    
    // key = 'i,j'
    var key = i + ',' + j;
    if (key in memo)
        return memo[key];
    
    memo[key] = explorePathsMemo(i+1, j, m, n, memo) + explorePathsMemo(i, j+1, m, n, memo);
    return memo[key];
}

var uniquePaths = function(m, n) {
    var memo = {};
    return explorePathsMemo(0, 0, m, n, memo);
};


