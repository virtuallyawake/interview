/*
763. Partition Labels
https://leetcode.com/problems/partition-labels/

A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:

S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let last = {};
    let arr = S.split('');
    
    arr.forEach((letter, i) =>{
        last[letter] = i;
    });
    
    let p = 0;
    let end = last[arr[p]];
    let size = 1;
    let result = [];
    while (p < arr.length) {
        if (last[arr[p]] > end) {
            end = last[arr[p]];
        }
        if (p === end) {
            result.push(size);
            size = 0;
        }

        p++;
        size++;
    }
    
    return result;
};
