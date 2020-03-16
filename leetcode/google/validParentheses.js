/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */

/*
Due to the mix of brackets, counting opening and closing brackets won't work
Need to use stack.
*/
var isValid = function(s) {
    if (s.length === 0) // empty string
        return true;
    
    if (s.length % 2 !== 0)
        return false;
    
    var brackets = []
    var opening = ['(', '[', '{'];
    var closing = [')', ']', '}'];
    var complements = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    };
    
    for (var i=0; i<s.length; i++) {
        var c = s.charAt(i);
        if (opening.includes(c))
            brackets.push(c);
        if (closing.includes(c)) {
            var popped = brackets.pop();
            if (popped !== complements[c])
                return false;
        }    
    }

    return brackets.length === 0;
};
