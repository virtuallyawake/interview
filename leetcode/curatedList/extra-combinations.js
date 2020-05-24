/*
77. Combinations

Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

function generateCombinations(candidates, index, k, sol, result) {
    if (sol.length === k) {
        result.push(sol.slice());
        return;
    }
    
    for (var i=index; i<candidates.length; i++) {
        sol.push(candidates[i]);
        generateCombinations(candidates, i+1, k, sol, result);
        sol.pop();
    }
}

var combine = function(n, k) {
    var candidates = [];
    for (var i=1; i<=n; i++) {
        candidates.push(i);
    }
    
    var result = [];
    generateCombinations(candidates, 0, k, [], result);
    return result;
};
