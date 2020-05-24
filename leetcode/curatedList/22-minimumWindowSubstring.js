/*
76. Minimum Window Substring

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// TIP: Ask if t is the alphabet, if s can contain other letters not in t, if letters are repeated in t
// If letters an be repeated in t, then frequency matters. Otherwise, only presence matters.
// letters in t are a subset of letters in s
function containsMap(map, tMap) {
    var tKeys = Object.keys(tMap);
    for (var i=0; i<tKeys.length; i++) {
        var c = tKeys[i];
        if (!(c in map) || map[c] < tMap[c]) {
            return false;
        }
    }
    
    return true;
}


var minWindow = function(s, t) {
    var start = 0; // substring [start, end)                                                                                               
    var end = 0;
    var minLength = Number.MAX_VALUE;
    var minStart = -1;
    var minEnd = -1;
    var subStrMap = {};
    var tMap = {};
    for (var i=0; i<t.length; i++) {
        var c = t.charAt(i);
        if (c in tMap) {
            tMap[c]++;
        } else {
            tMap[c] = 1;
        }
    }
    
    while (true) {
        if (containsMap(subStrMap, tMap)) {
            var length = end-start;
	        if (length < minLength) {
                minLength = length;
                minStart = start;
                minEnd = end;
            }
            removeFromMap(subStrMap, s.charAt(start));
            start++;
        } else {
	    if (end === s.length) {
                break;
            }
            addToMap(subStrMap, s.charAt(end));
            end++
        }
    }

    if (minLength > s.length) {
        return "";
    }

    return s.slice(minStart, minEnd);
}

function removeFromMap(map, c) {
    map[c]--;
    if (map[c] === 0) {
        delete map[c];
    }
}

function addToMap(map, c) {
    if (c in map) {
        map[c]++;
    } else {
        map[c] = 1;
    }
}
