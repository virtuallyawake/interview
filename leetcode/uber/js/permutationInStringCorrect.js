/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var genFrequencyTable = function(s) {
    var arr = s.split("");
    var table = {};
    arr.forEach(function(c) {
	    if (c in table) {
		table[c]++;
	    } else {
		table[c] = 1;
	    }
	});
    
    return table;
}

    var compareTables = function(t1, t2) {
	if (Object.keys(t1).length !== Object.keys(t2).length)
	    return false;
    
	var keysT1 = Object.keys(t1);
	for (var i=0; i< keysT1.length; i++) {
	    var key = keysT1[i];
	    if (key in t2) {
		if (t1[key] !== t2[key]) {
		    return false;
		}
	    } else {
		return false;
	    }
	}
    
	return true;
    }

	var checkInclusion = function(s1, s2) {
	    if (s1.length > s2.length)
		return false;
    
	    var s1FreqTable = genFrequencyTable(s1);
    
	    for (var i=0; i<=(s2.length-s1.length);i++) {
		var substr = s2.slice(i, i+s1.length);
		var substrFreqTable = genFrequencyTable(substr);
		if (compareTables(s1FreqTable, substrFreqTable)) {
		    return true;
		}
	    }
    
	    return false;
	};