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

function rotNeighbors(i, j, grid, queue) {
    // top
    if (i-1 >=0 && grid[i-1][j] === 1) {
        grid[i-1][j] = 2;
        queue.push([i-1, j]);
    }
    // bottom
    if (i+1 < grid.length && grid[i+1][j] === 1) {
        grid[i+1][j] = 2;
        queue.push([i+1, j]);
    }    
    // left
        if (j-1 >=0 && grid[i][j-1] === 1) {
        grid[i][j-1] = 2;
        queue.push([i, j-1]);
    }
    // right
    if (j+1 < grid[0].length && grid[i][j+1] === 1) {
        grid[i][j+1] = 2;
        queue.push([i, j+1]);
    }
}

var orangesRotting = function(grid) {
    let queue = []; // for rotten oranges
    // Put rotten oranges in queue
    const rows = grid.length;
    const cols = grid[0].length;
    
    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }
    
    let counter = 0;
    const delimiter = [-1,-1];
    queue.push(delimiter);
    
    while(queue.length !== 0) {
        let orange = queue.shift();
        //console.log(orange);
        if (orange[0] === -1) {
            if (queue.length === 0) {
                break;
            }
            counter++;
            queue.push(delimiter);
            continue;
        }
        rotNeighbors(orange[0], orange[1], grid, queue);
    }

     // If there are fresh oranges, return -1
    for(let i=0; i<rows; i++) {
        for (j=0; j<cols; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    
    return counter;
};
