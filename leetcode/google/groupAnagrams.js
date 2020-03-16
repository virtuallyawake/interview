/*
49.
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
};
