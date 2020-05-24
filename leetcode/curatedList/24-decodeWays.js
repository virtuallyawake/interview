/*
91. Decode Ways

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

626

*/

function decodeWays(digits, pos) {
    if (pos === digits.length) {
        return 1;
    }

    var result = 0;
    // 1 character
    var oneDigit = digits[pos];
    if (oneDigit > 0) {
        result += decodeWays(digits, pos+1);
    } else {
        return 0;
    }
    
    // 2 characters
    if (pos+1 < digits.length) {
        var twoDigits = 10*digits[pos] + digits[pos+1];
        if (twoDigits <= 26) {
            result += decodeWays(digits, pos+2);
        }
    }
    
    return result;
}

var numDecodings = function(s) {
    var digits = s.split('').map((c) => parseInt(c));
    return decodeWays(digits, 0);
}
