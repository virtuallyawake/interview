/*
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
 */

var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var buildDecodedStrings = function(arr, decoded, p) {
    if (p >= arr.length) {
        console.log(decoded)
        return 1;
    }
    
    var result = 0;
    // single digit  
    var digit = arr[p];
    if (digit > 0) {
        var r = buildDecodedStrings(arr, decoded + letters.charAt(digit-1), p+1);
        result += r;
    } else {
        return 0;
    }
    
    // two digits
    if (p+1 < arr.length) {
        var digits = arr[p]*10 + arr[p+1];
        if (digits > 0 && digits <= 26) {
            var r = buildDecodedStrings(arr, decoded + letters.charAt(digits-1), p+2); 
            result += r;
        }
    }
    return result;
}

    var numDecodings = function(s) {
	var arrDigits = s.split("").map(function(d) {
		return parseInt(d);
	    });
	var counter = buildDecodedStrings(arrDigits, "", 0);
	return counter;
    };