/*
DIDN'T PASS

Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
/*

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var genPermutation = function(options, tmp, s2) {
    if (options.length > s2.length) {
        return false;
    }
    
    if (!s2.includes(tmp)) {
        return false;
    } else {
        if (options.length == 0) {
            return true;
        }
    }
    
    for (var i=0; i<options.length; i++) {
        var copyOptions = options.slice();
        copyOptions.splice(i, 1);
        var includesPerm = genPermutation(copyOptions, tmp.concat(options[i]), s2);
        if (includesPerm) {
            return true;
        }
    }
    
    return false;
}

    var checkInclusion = function(s1, s2) {
	var arr1 = s1.split('');
	return genPermutation(arr1, "", s2);
    };