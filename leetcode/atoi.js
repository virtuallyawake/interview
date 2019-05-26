/*
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
Example 1:

Input: "42"
Output: 42
Example 2:

Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
Example 3:

Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
Example 4:

Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.
Example 5:

Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
*/

/**
 * @param {string} str
 * @return {number}
 */


function isNumber(n) {
    var table = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
    }

    if (table[n] || table[n] === 0)
        return table[n];
    else
        return false;
}
var INT_MIN = -Math.pow(2, 31);
var INT_MAX = Math.pow(2, 31)-1;

var myAtoi = function(str) {
    var arr = str.trim().split('');
    var number = 0
    var numberFound = false;
    var multiple = 1;
    var sign = null;
    var leftIndex = 0;
    if (arr[0] === '+')
        sign = 1;
    if (arr[0] === '-')
        sign = -1;
    if (sign)
        leftIndex = 1
    for (var i=arr.length-1; i>=leftIndex; i--) {
        var char = arr[i];
        num = isNumber(char);
        if (num || num === 0) {
            if (!numberFound)
                numberFound = true;
            number += num*multiple;
            multiple *= 10;
        } else {
            if (numberFound) {
                number = 0;
                multiple = 1;
                numberFound = false;
            }
        }
    }
    if (sign)
        number *= sign;
    if (number > INT_MAX)
        return INT_MAX;
    if (number < INT_MIN)
        return INT_MIN;

    return number;
};
