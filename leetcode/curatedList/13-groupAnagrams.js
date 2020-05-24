/*
49. Group Anagrams

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Use sorted version of string as key
var groupAnagrams = function(strs) {
    var anagrams = {};  // key: sorted string, value: [] of words
    
    strs.forEach(function(s) {
        var arr = s.split("");
        arr.sort();
        var key = arr.join("");

        if (key in anagrams) {
            anagrams[key].push(s);
        } else {
            anagrams[key] = [s];
        }
    });
    
    return Object.values(anagrams);
}

// Using frequency key. Count occurrences of each letter in the alphabet
function getFrequencies(s) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var freq = new Array(alphabet.length).fill(0);
    
    for(var i=0; i<s.length; i++) {
        var c = s.charAt(i);
        freq[alphabet.indexOf(c)]++;
    }
    
    return freq.join("");
}

var groupAnagrams = function(strs) {
    var anagrams = {};
    
    strs.forEach(function(s) {
        var key = getFrequencies(s);
        if (key in anagrams) {
            anagrams[key].push(s);
        } else {
            anagrams[key] = [s];
        }
    });
    
    return Object.values(anagrams);
};
