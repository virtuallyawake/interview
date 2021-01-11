/*
32. Longest Valid Parentheses

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let arr = s.split('');
    let maxLength = 0;
    
    for (let i=0; i<arr.length; i++) {
        let stack = [];
        for (let j=i; j<arr.length; j++) {
            let c = arr[j];
            if (c === '(') {  // c is opening parenthesis
                stack.push(c);
            } else {  // c is closing parenthesis
                let popped = stack.pop();
                if (popped === undefined) {
                    break;
                }
                if (stack.length === 0) { // valid substring
                    let substringLength = j-i+1;
                    if (substringLength > maxLength) {
                        maxLength = substringLength;
                    }
                }
            }
        }
    }
    
    return maxLength;
};
