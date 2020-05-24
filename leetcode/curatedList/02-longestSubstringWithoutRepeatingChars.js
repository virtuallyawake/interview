/*
Given a string, find the length of the longest substring without repeating characters.

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

// Using sliding window
var lengthOfLongestSubstring = function(s) {
    var table = {};
    var left = 0;
    var right = 0;  // not included in the substring
    var maxLength = 0;

    while (right < s.length) {
        var c = s.charAt(right);
        if (c in table) {
            delete table[s.charAt(left)];
            left++;
        } else {
            table[c] = true;
            right++;
            if (right-left > maxLength) {
                maxLength = right-left;
            }
        }
    }
    
    return maxLength;
}
