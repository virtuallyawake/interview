/*
125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */

function isAlphaNumeric(lcc) {
    if (lcc >= 'a' && lcc <= 'z' || lcc >= '0' && lcc <= '9') {
        return true;
    }
    
    return false;
}

var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        const leftChar = s.charAt(left).toLowerCase();
        if (!isAlphaNumeric(leftChar)) {
            left++;
            continue;
        }
        
        const rightChar = s.charAt(right).toLowerCase();
        if (!isAlphaNumeric(rightChar)) {
            right--;
            continue;
        }
        
        if (leftChar !== rightChar) {
            return false;
        }

        left++;
        right--;
    }
    
    return true;
};
