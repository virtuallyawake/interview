/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

function isPalindrome(arr, left, right) {
    while(left < right) {
        if (arr[left] === arr[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    
    return true;
}


var longestPalindrome2 = function(s) {
    var arr = s.split("");
    var longest = "";
    for(var i=0; i<arr.length; i++) {
        for(var j=i; j<arr.length; j++) {
            if (isPalindrome(arr, i, j)) {
                var substringLength = j-i+1;
                if (substringLength > longest.length) {
                    longest = s.slice(i, j+1);
                }
            }
        }
    }
    
    return longest;
};

// aba, center = 1,  abba, center = 1.5
function expandFromCenter(s, i) {
    // expanding around letter at position i
    var left = i;
    var right = i;
    while (left >= 0 && right < s.length) {
        if (s.charAt(left) === s.charAt(right)) {
            left--;
            right++;
        } else {
            break;
        }
    }
    
    left++;
    right--;
    var palindrome1 = s.slice(left, right+1);
    if (palindrome1.length === 0)
        palindrome1 = s.charAt(i);
    
    // expanding around middle
    left = i;
    right = i+1;
    while (left >= 0 && right < s.length) {
        if (s.charAt(left) === s.charAt(right)) {
            left--;
            right++;
        } else {
            break;
        }
    }
    
    left++;
    right--;
    var palindrome2 = "";
    if (right-left+1 >= 2)
        palindrome2 = s.slice(left, right+1);

    return (palindrome1.length > palindrome2.length) ? palindrome1 : palindrome2;
}

// expand around center
var longestPalindrome = function(s) {
    var longest = "";
    for (var i=0; i<s.length; i++) {
        var palindrome = expandFromCenter(s, i);
        //console.log("p: " + palindrome)
        if (palindrome.length > longest.length)
            longest = palindrome;
    }

    return longest;
}
