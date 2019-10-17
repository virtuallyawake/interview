/*
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

Example :
Input: 
S = "cba"
T = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
 

Note:

S has length at most 26, and no character is repeated in S.
T has length at most 200.
S and T consist of lowercase letters only.
 */

var customSortString = function(S, T) {
    var tableT = {};
    var tArray = T.split('');
    tArray.forEach(function (letter) {
	    if (letter in tableT) {
		tableT[letter]++;
	    } else {
		tableT[letter] = 1;
	    }
	});
    
    var sArray = S.split("");
    var result = "";
    sArray.forEach(function (letter) {
	    if (letter in tableT) {
		for (var i=0; i<tableT[letter]; i++) {
		    result += letter;
		}
		// OR: result += letter.repeat(tableT[letter]);
		delete tableT[letter];
	    }
	});
    
    Object.keys(tableT).forEach(function (key) {
	    for (var i=0; i<tableT[key]; i++) {
		result += key;
	    }
	    // OR: result += letter.repeat(tableT[letter]); 
	});
    
    return result;
};