/*
1249. Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
Example 4:

Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"
 

Constraints:

1 <= s.length <= 10^5
s[i] is one of  '(' , ')' and lowercase English letters.

*/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    var counter = 0;
    var tmp1 = "";
    
    for (var i=0; i<s.length; i++) {
        var c = s.charAt(i);
        if (c === '(') {
            counter++;
        }
        if (c === ')') {
            counter--;
        }
        if (counter < 0) {
            counter++; // 0
            continue;
        }
        tmp1 = tmp1 + c;
    }
    
    if (counter === 0) {
        return tmp1;
    }

    // Removing opening parentheses from the right to left
    var result = "";
    for (var i=tmp1.length-1; i>=0; i--) {
        var c = tmp1.charAt(i);
        if (counter === 0) {
            result = tmp1.slice(0, i+1) + result;
            break;
        }
        if (c === '(') {
            counter--;  //1
            continue;
        }

        result = c + result;
    }
        
    return result;
};
