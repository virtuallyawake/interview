/*
79. Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 

Constraints:

board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
*/

function findWord(board, i, j, word, tmp, letterIndex) {
    if (word === tmp) {
	return true;
    }

    if (i < 0 || i >= board.length) {
    	return false;
    }

    if (j < 0 || j >= board[0].length) {
    	return false;
    }

    var	currLetter = word.charAt(letterIndex);
    
    if (board[i][j] === currLetter) {
        board[i][j] = '#';

        // top                             
        if (findWord(board, i-1, j, word, tmp+currLetter, letterIndex+1))
            return true;

        // bottom                                  
        if (findWord(board, i+1, j, word, tmp+currLetter, letterIndex+1))
            return true;

    	// left                              
	    if (findWord(board, i, j+1, word, tmp+currLetter, letterIndex+1))
            return true;

        // right
        if (findWord(board, i, j-1, word, tmp+currLetter, letterIndex+1))
            return true;
        board[i][j] = currLetter;
    }

    return false;
}


var exist = function(board, word) {
    var rows = board.length;
    var cols = board[0].length;
    var firstLetter = word.charAt(0)

    for (var i=0; i<rows; i++) {
        for (var j=0; j<cols; j++) {
            if (board[i][j] === firstLetter) {
                if (findWord(board, i, j, word, "", 0)) {
                    return true;
                }
            }
        }
    }

    return false;
};
