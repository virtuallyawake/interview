/*
139. Word Break
https://leetcode.com/problems/word-break/

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

function findCombinations(s, p, dict, memo) {
    if (p === s.length) {
        return true;
    }
    
    return dict.map(w => {
        let tmpWord = s.slice(p, p + w.length);
        if (tmpWord === w) {
            let key = p + w.length;
            if (key in memo) {
                return memo[key];
            }
            memo[key] = findCombinations(s, p + w.length, dict, memo);
            return memo[key];
        } else {
            return false;
        }
    }).reduce((acc, v) => acc || v, false);
}

var wordBreak = function(s, wordDict) {
    let memo = {};
    return findCombinations(s, 0, wordDict, memo);
};
