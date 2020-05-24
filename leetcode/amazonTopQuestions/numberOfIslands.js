/*
200. Number of Islands
https://leetcode.com/problems/number-of-islands/

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

function explore(i, j, grid) {
    if (i < 0 || i >= grid.length) {
        return;
    }
    
    if (j < 0 || j >= grid[0].length) {
        return;
    } 

    if (grid[i][j] !== '1') {
        return;
    } else {
        grid[i][j] = 'x';
    }
    
    explore(i-1, j, grid);  // top
    explore(i, j-1, grid);  // left
    explore(i+1, j, grid);  // bottom
    explore(i, j+1, grid);  // right
}

var numIslands = function(grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }
    
    const rows = grid.length;
    const cols = grid[0].length;
    let counter = 0;
    
    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            let elem = grid[i][j];
            if (elem === '1') {
                explore(i, j, grid);
                counter++;
            }
        }
    }

    return counter;
}
