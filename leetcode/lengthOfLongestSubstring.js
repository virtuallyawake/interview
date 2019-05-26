/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var array = s.split('');
    var longest = 0;
    for (var i=0; i<array.length; i++) {
        var seen = {};
        var length = 0;
        for (var j=i; j<array.length; j++) {
            var char = array[j];
            if (seen[char]) {
                break;
            } else {
                seen[char] = true;
                length++;
            }
        }
        if (length > longest) {
            longest = length;
        }
    }
    return longest;
};
