/*
Given a string with alpha-numeric characters and parentheses, return a string with balanced parentheses by removing the fewest characters possible. You cannot add anything to the string.

s = "lee(t(c)o)de)"
s = "(()(()"
counter = #opening - #closing
counter >= 0

valid string: counter = 0
*/

// Better solution: O(N). Space O(1) in-place (sort of)
var minRemoveToMakeValid = function(s) {
    var counter = 0;
    var arr = s.split('');
    // Go front to back and remove extra ')'                                                                                                  
    for (var i=0; i<arr.length; i++) {
        var c = arr[i];
        if (c === '(') {
            counter++;
        }
        if (c === ')') {
            counter--;
        }
        if (counter < 0) {
            counter = 0;
            arr[i] = '*';
            continue;
        }
    }

    // counter > 0  => too many '('         
    // Go back to front and remove 'counter' '('                                      
    for (var i = arr.length-1; i>=0; i--) {
        var c = arr[i];
        if (c === '(' && counter > 0) {
            counter--;
            arr[i] = '*';
            continue;
        }
    }

    // remove '*'
    var j = 0;  // points to characters to keep
    for (var i=0; i<arr.length; i++) {
        if (arr[i] !== '*') {
  	  //swap(arr, i, j);  // swapping works if you want to have the '*' at the end
          arr[j] = arr[i];
          j++;
        }
    }
    return arr.slice(0, j).join('');
};

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

// Approach creating additional strings

function balanceParentheses(s) {
    var counter = 0;
    // Go front to back and remove extra ')'
    var tmp1 = '';
    for (var i=0; i<s.length; i++) {
	var c = s.charAt(i);
	if (c === '(') {
	    counter++;
	}
	if (c === ')') {
	    counter--;
	}
	if (counter < 0) {
	    counter = 0;
	    continue;
	}
	tmp1 += c;
    }

    if (counter === 0) {
	return tmp1;
    }

    // counter > 0  => too many '('
    // Go back to front and remove 'counter' '('
    var tmp2 = '';
    for (var i = tmp1.length-1; i>=0; i--) {
	var c = tmp1.charAt(i);
	if (c === '(' && counter > 0) {
	    counter--;
	    continue;
	}
	tmp2 = c + tmp2;
    }

    return tmp2;
}

var s = "lee(t(c)o)de)";
