/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    arr = s.split('');
    var rows = [];
    var currRow = 0;
    var direction = 1;
    for (var i=0; i<arr.length; i++) {
        if (!rows[currRow])
            rows[currRow] = [];
        rows[currRow].push(arr[i]);
        if (currRow == (numRows-1))
            direction = -1;
        if (currRow == 0)
            direction = 1;    
        currRow += direction;
    }
    var str = '';
    for (var j=0; j<rows.length; j++) {
        str += rows[j].join('');
    }
    return str;
};
