/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function isInnerElement(board, i, j) {
    var numRows = board.length;
    var numCols = board[0].length;
    
    // Border element, return false
    if (i == 0 || i == numRows - 1 || j == 0 || j == numCols -1) {
        return false;
    }
 
    return true;
}

function hasONeighbor(board, i, j) {
    var top = board[i-1][j];
    var bottom = board[i+1][j];
    var left = board[i][j-1];
    var right = board[i][j+1];
    if (top == 'O' || bottom == 'O' || left == 'O' || right == 'O')
        return true;

    return false;
}

var solve = function(board) {
    if (board.length == 0)
        return [];
    
    var numRows = board.length;
    var numCols = board[0].length;
    
    // First pass
    for (var i=0; i<numRows; i++) {
        for (var j=0; j<numCols; j++) {
            var elem = board[i][j];
            if (elem == 'O') {
                if (isInnerElement(board, i, j)) {
                    board[i][j] = 'a';
                }
            }
        }
    }
    
    // Turns a's into 'o's if they have an o neighbor
    var flips = 100000;
    while (flips > 0) {
        flips = 0;
        for (var i=0; i<numRows; i++) {
            for (var j=0; j<numCols; j++) {
                var elem = board[i][j];
                if (elem == 'a') {
                    if (hasONeighbor(board, i, j)) {
                        board[i][j] = 'O';
                        flips++;
                    }  
                }
            }
        }
    }
    
    // Final pass: turn 'a's into x's
    for (var i=0; i<numRows; i++) {
        for (var j=0; j<numCols; j++) {
            var elem = board[i][j];
            if (elem == 'a') {
                board[i][j] = 'X';
            }
        }
    }    
};

/*
- First pass: turn inner o's into a.
- Further passes: turn a's into o's if they have an o neighbor until there are no flips.
- Final pass: turn a's into x's
*/