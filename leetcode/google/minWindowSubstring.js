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

function evaluateSubstring(freqT, freqSubstr) {
    var keys = Object.keys(freqT);
    for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        if (key in freqSubstr) {
            if (freqSubstr[key] < freqT[key]) {
                return false;
            }
        } else {
            return false;
        }
    }
    
    return true;
}

function getFrequencyTable(str) {
    var table = {};
    for (var i=0; i<str.length; i++) {
        var char = str.charAt(i);
        if (char in table) {
            table[char]++;
        } else {
            table[char] = 1;
        }
    }
    
    return table;
}

var minWindow = function(s, t) {
    var left = 0;
    var right = 0;
    var isDesirable = false;
    var minLength = 100000000000;
    var minSubstr = "";
    var freqT = getFrequencyTable(t);
    var freqSubstr = getFrequencyTable(s.slice(0,1));

    while (true) {
        isDesirable = evaluateSubstring(freqT, freqSubstr);
        //console.log(isDesirable);
        //console.log(s.slice(left, right+1));
        if (isDesirable) {
            if (right-left+1 < minLength) {
                minSubstr = s.slice(left, right+1);
                minLength = minSubstr.length;
            }
            freqSubstr[s.charAt(left)]--;
            left++;
        } else {
            if (right < s.length-1) {
                right++;
                var newChar = s.charAt(right);
                if (newChar in freqSubstr) {
                    freqSubstr[newChar]++;
                } else {
                    freqSubstr[newChar] = 1;
                }
            } else {
                if (!isDesirable) {
                    break;
                }
            }
        }
    }
    
    return minSubstr;
};

