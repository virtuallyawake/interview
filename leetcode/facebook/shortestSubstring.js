/*
Write a function that takes an input string and an alphabet, and returns the shortest substring of the input which contains every letter of the alphabet at least once.

Example:

Input:  "aaccbc"
Alphabet: "abc"
Output:  "accb"
*/

function containsAlphabet(s, start, end, alphabet) {
    var map = {};
    for (var i=start; i<=end; i++) {
	var c = s.charAt(i);
	if (c in map) {
    	    map[c]++;
	} else {
    	    map[c] = 1;
	}
    }
    
    for (var i=0; i<alphabet.length; i++) {
  	if (!(alphabet.charAt(i) in map)) {
    	    return false;
	}
    }
    
    return true;
}

function shortestSubstring(s, alphabet) {
    // Substring pointers
    var start = 0;
    var end = 0;
    
    // shortest substring
    var shortestLength = 1000000000;
    var shortestStart = -1;
    var shortestEnd = -1;
    
    while (true) {
  	if (containsAlphabet(s, start, end, alphabet)) {
	    var length = end-start+1;
	    if (length < shortestLength) {
      		shortestLength = length;
		shortestStart = start;
		shortestEnd = end;
	    }
	    start++;
	} else {
    	    if (end === s.length - 1) {
    		break;
	    }
	    end++;
	}
    }
    
    return s.slice(shortestStart, shortestEnd+1);
}

var input = "aaccbc";
var alphabet = "abc";
console.log(shortestSubstring(input, alphabet));  // accb

// Updating table at each iteration
function containsAlphabet(map, alphabet) {
    for (var i=0; i<alphabet.length; i++) {
  	if (!(alphabet.charAt(i) in map)) {
    	    return false;
	}
    }
    
    return true;
}

function addToMap(map, c) {
    if (c in map) {
  	map[c]++;
    } else {
  	map[c] = 1;
    }
}

function removeFromMap(map, c) {
    if (map[c] === 1) {
  	delete map[c];
    } else {
  	map[c]--;
    }
}

function shortestSubstring(s, alphabet) {
    // Substring pointers
    var start = 0;
    var end = 0;
    
    // shortest substring
    var shortestLength = 1000000000;
    var shortestStart = -1;
    var shortestEnd = -1;
    
    var substrMap = {};
    substrMap[s.charAt(0)] = 1;
    
    while (true) {
  	if (containsAlphabet(substrMap, alphabet)) {
	    var length = end-start+1;
	    if (length < shortestLength) {
      		shortestLength = length;
		shortestStart = start;
		shortestEnd = end;
	    }
	    removeFromMap(substrMap, s.charAt(start))
	    start++;
	} else {
    	    if (end === s.length - 1) {
    		break;
	    }
	    end++;
	    addToMap(substrMap, s.charAt(end));
	}
    }
    
    return s.slice(shortestStart, shortestEnd+1);
}

