/*
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

 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function findNeighbor(i, j, nextLetter, board, used) {
    var numRows = board.length;
    var numCols = board[0].length;

    if (i < 0 || j < 0 || i >= numRows || j >= numCols)
        return false;

    var key = i + ',' + j;
    console.log(key);

    if (key in used) {
        return false;
    }

    if (board[i][j] == nextLetter) {
        used[key] = true;
        return true;
    }

    return false;
}

function findWord(i, j, index, word, tmp, board, used) {
    console.log(tmp);
    if (tmp === word) {
        return true;
    }

    if (index >= word.length) {
        return false;
    }

    var nextLetter = word.charAt(index);

    var usedClone = { ...used };
    if (findNeighbor(i-1, j, nextLetter, board, usedClone)) {  // top
        if (findWord(i-1, j, index+1, word, tmp+nextLetter, board, usedClone))
            return true;
    }

    usedClone = { ...used };
    if (findNeighbor(i+1, j, nextLetter, board, usedClone)) {  // bottom
        if (findWord(i+1, j, index+1, word, tmp+nextLetter, board,  usedClone))
            return true;
    }

    usedClone = { ...used };
    if (findNeighbor(i, j-1, nextLetter, board, usedClone)) {  // left
        if (findWord(i, j-1, index+1, word, tmp+nextLetter, board,  usedClone))
            return true;
    }

    usedClone = { ...used };
    if (findNeighbor(i, j+1, nextLetter, board, usedClone)) {   // right
        if (findWord(i, j+1, index+1, word, tmp+nextLetter, board,  usedClone))
            return true;
    }

    return false;
}

var exist = function(board, word) {
    var firstLetter = word.charAt(0);
    var numRows= board.length;
    var numCols = board[0].length;

    if (word.length == 0)
        return false;
    if (board.length == 0)
        return false;
    if (board[0].length == 0)
        return false;

    for (var i=0; i<numRows; i++) {
        for (var j=0; j<numCols; j++) {
            if (board[i][j] === firstLetter) {
                var key = i+','+j;
                var used = {};
                used[key] = true;
                var found = findWord(i, j, 1, word, firstLetter, board, used);
                if (found)
                    return true;
            }
        }
    }

    return false;
};

var board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

var word = "ABCCED";
console.log(exist(board, word));
