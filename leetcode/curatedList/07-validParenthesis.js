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

function isOpeningCharacter(c) {
    return (c === '(' || c === '[' || c === '{');
}

function getClosingCharacter(c) {
    var table = {
	'(' : ')',
	'[' : ']',
	'{' : '}'
    };

    return table[c];
}

var isValid = function(s) {
    var stack = []; // contains opening characters

    for (var i=0; i<s.length; i++) {
	var c = s.charAt(i);
	if (isOpeningCharacter(c)) {
	    stack.push(c);
	} else {  // c is a closing character
	    var popped = stack.pop();
	    if (c !== getClosingCharacter(popped)) {
		// string is not valid
		return false;
	    }
	}
    }

    return stack.length === 0;
}
