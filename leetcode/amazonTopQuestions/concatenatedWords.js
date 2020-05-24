/*
472. Concatenated Words
https://leetcode.com/problems/concatenated-words/submissions/

Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example:
Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
 "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
Note:
The number of elements of the given array will not exceed 10,000
The length sum of elements in the given array will not exceed 600,000.
All the input string will only include lower case letters.
The returned elements order does not matter.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */

function isConcatenated(word, p, unique, wordCounter) {
    if (p === word.length && wordCounter >= 2) {
        return true;
    }
    
    for (let i=p; i<word.length; i++) {
        let prefix = word.slice(p, i+1);
        if (unique.has(prefix) && isConcatenated(word, i+1, unique, wordCounter+1)) {
            return true;
        }
    }
    
    return false;
}

var findAllConcatenatedWordsInADict = function(words) {
    let unique = new Set(words);

    return words.filter(word => {
        return isConcatenated(word, 0, unique, 0);
    });
};
