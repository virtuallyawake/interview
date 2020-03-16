/*
70.

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
 * @param {number} n
 * @return {number}
 */

function explorePaths(i, n) {
    if (i > n) {
        return 0;
    }

    if (i === n) {
        return 1;
    }
    
    return explorePaths(i+1, n) + explorePaths(i+2, n);
}

function explorePathsMemo(i, n, memo) {
    if (i > n) {
        return 0;
    }

    if (i === n) {
        return 1;
    }
    
    if (i in memo) {
        console.log("memo")
        return memo[i];
    }

    memo[i] = explorePathsMemo(i+1, n, memo) + explorePathsMemo(i+2, n, memo);
    return memo[i];
}

var climbStairs = function(n) {
    return explorePathsMemo(0, n, {});
};
