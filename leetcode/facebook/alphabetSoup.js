/*
Write a function that returns whether a list of strings is sorted given a specific alphabet.
A list of N words and the K-sized alphabet are given.

input:  words =    ["cat", "bat", "tab"]
        alphabet = ['c', 'b', 'a', 't']
output: True
*/

/*
Write a function that returns whether a list of strings is sorted given a specific alphabet.
A list of N words and the K-sized alphabet are given.

input:  words =    ["cat", "bat", "tab"]
        alphabet = ['c', 'b', 'a', 't']
output: True
*/

/*
time: O(N * M + K)
space: O(K)
*/
function compareStrings(A, B, alphabet) {
    // return 1 if A > B
    // return 0 if A == B
    // return -1 if A < B
    // Create a mapping from char to index
    var map = {};
    alphabet.forEach(function(char, i) {
  	map[char] = i;
    })
    
    var p = 0;
    while(p < A.length && p < B.length) {
  	var a = A.charAt(p);
	var b = B.charAt(p);
  	if (map[a] > map[b]) {
    	    return 1;
	}
	if (map[a] < map[b]) {
    	    return -1;
	}
	p++;
    }
    
    if (A.length === B.length) {
  	return 0;
    }
    if (A.length > B.length) {
  	return 1;
    } else {
  	return -1;
    }
}

function isSorted(words, alphabet) {  
    for (var i=1; i<words.length; i++) {
  	if (compareStrings(words[i-1], words[i], alphabet) > 0) {
    	    return false;
	}
    }
    return  true;
}

var words = ["ccb", "ccc", "cba"];
var alphabet = ['c', 'b', 'a', 't'];

console.log(isSorted(words, alphabet));

