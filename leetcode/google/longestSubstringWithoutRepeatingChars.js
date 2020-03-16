/*Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

// Using sliding window
var lengthOfLongestSubstring = function(s) {
    var i = 0;
    var j = 0;
    var table = {};
    var longest = 0;
    
    while (i<s.length && j<s.length) {
        var char = s.charAt(j);
        if (char in table) {
            delete table[s.charAt(i)];
            i++;
        } else {
            table[char] = true;
            j++;
        }

        if (j-i > longest) {
            longest = j-i;
        }
    }
    return longest;
}

var lengthOfLongestSubstring2 = function(s) {
    var longest = 0;
    for (var i=0; i<s.length; i++) {
        var table = {};
        var length = 0;
        for (var j=i; j<s.length; j++) {
            var char = s.charAt(j);
            if (char in table) {
                break;
            }
            table[char] = true;
            length++;
        }
        if (length > longest) {
            longest = length;
        }
    }
    
    return longest;
};
