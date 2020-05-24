/*
128. Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let max = 0;
    
    for(let item of numSet) {
        if (!numSet.has(item-1)) { // item is the first in streak
            let counter = 0;
            while(numSet.has(item)) {
                counter++;
                item++;
            }
            if (counter > max) {
                max = counter;
            }        
        }
    }
    
    return max;
};
