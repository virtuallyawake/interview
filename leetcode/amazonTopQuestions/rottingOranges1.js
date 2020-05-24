/*
994. Rotting Oranges
https://leetcode.com/problems/rotting-oranges/

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.
*/

// My own attempt by scanning through the grid

function startRotting(i, j, grid) {
    if (i < 0 || i >= grid.length) {
        return;
    }
    
    if (j < 0 || j >= grid[0].length) {
        return;
    }
    
    if (grid[i][j] === 1) {
        grid[i][j] = 3; // orange starts to rot
    }
}

function rotNeighbors(grid) {
    // 1. Neighbors of rotten orange start to rot
    const rows = grid.length;
    const cols = grid[0].length;
    
    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            let orange = grid[i][j];
            if (orange === 2) { // rotten orange
                startRotting(i-1, j, grid); // top
                startRotting(i, j+1, grid); // right
                startRotting(i+1, j, grid); // bottom
                startRotting(i, j-1, grid); // left
            }
        }
    }
    
    // 2. Rotting oranges become rotten
    let freshOranges = 0;
    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            let orange = grid[i][j];
            if (orange === 3) { // rotting orange
                grid[i][j] = 2; // rotten
            }
            if (orange === 1) {
                freshOranges++;
            }
        }
    }
    
    return freshOranges;
}

function getNumberFreshOranges(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let freshOranges = 0;
    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            let orange = grid[i][j];
            if (orange === 1) {
                freshOranges++;
            }
        }
    }
    
    return freshOranges;
}

var orangesRotting = function(grid) {
    let prevFreshOranges = getNumberFreshOranges(grid);
    let currFreshOranges = null;
    let counter = 0;
    while(true) {
        currFreshOranges = rotNeighbors(grid);
        if (prevFreshOranges === currFreshOranges) {
            break;
        }
        prevFreshOranges = currFreshOranges;
        counter++;
    }
    
    return (currFreshOranges > 0) ? -1 : counter;
};
