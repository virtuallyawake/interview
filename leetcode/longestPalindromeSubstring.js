/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
*/
/**
 * @param {string} s
 * @return {string}
 */

function isPalindrome(arr, front, back) {
    while (front <= back) {
        if (arr[front] !== arr[back]) {
            return false;
        }
        front++;
        back--;
    }
    return true;
}

var longestPalindrome = function(s) {
    var arr = s.split('');
    var longest = '';
    
    for (var i=0; i<arr.length; i++) {
        for (var j=i; j<arr.length; j++) {
            if (isPalindrome(arr, i, j)) {
                var length = j-i+1;
                if (length > longest.length) {
                    longest = s.slice(i, j+1);
                }
            }
        }
    }
    
    return longest;
};


console.log(longestPalindrome("babad"));