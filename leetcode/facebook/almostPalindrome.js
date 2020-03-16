/*
Given a string S consisting of lowercase English characters determine if you can make it a palindrome by removing at most 1 character.

var str = "madam" or "nurses run."
*/


/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s, left, right) {
    if (s.length <= 1) {
        return true;
    }
    
    while (left <= right) {
        if (s.charAt(left) !== s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

function validPalindrome(s) {
    var left = 0;
    var right = s.length-1;
    
    while (left <= right) {
        if (s.charAt(left) !== s.charAt(right)) {
            return isPalindrome(s, left+1, right) ||
                isPalindrome(s, left, right-1);
        }
        left++;
        right--;
    }
    
    return true;
}

/*function validPalindrome(s) {
    return validPalindromeGeneric(s, 0, s.length-1, 1);
}*/

function validPalindromeGeneric(s, left, right, skipCounter) {
    if (s.length <= 1) {
        return true;
    }
    
    while (left <= right) {
        if (s.charAt(left) !== s.charAt(right)) {
            if (skipCounter > 0) {
                skipCounter--;
                return validPalindromeGeneric(s, left+1, right, skipCounter) ||
                    validPalindromeGeneric(s, left, right-1, skipCounter);
            }
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}
