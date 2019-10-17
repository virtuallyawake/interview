"""
Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.
The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.
Note: You can only put the bomb at an empty cell.

Example:

Input: [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
Output: 3 
Explanation: For the given grid,

0 E 0 0 
E 0 W E 
0 E 0 0

Placing a bomb at (1,1) kills 3 enemies.
"""

class Solution(object):
    def maxKilledEnemies(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """        
        # grid is NxM: N rows, M columns
        if len(grid) == 0:
            return 0;
        
        N = len(grid);
        M = len(grid[0]);

        
        def getKills(pi, pj):
            numKillsRow = 0;
            numKillsCol = 0;

            for i in xrange(N):
                if grid[i][pj] == 'E':
                    numKillsRow = numKillsRow + 1;
                    continue;
                if grid[i][pj] == 'W':
                    if i > pi:
                        break;
                    else:
                        numKillsRow = 0;
        
            for j in xrange(M):
                if grid[pi][j] == 'E':
                    numKillsCol = numKillsCol + 1;
                    continue;
                if grid[pi][j] == 'W':
                    if j > pj:
                        break;
                    else:
                        numKillsCol = 0;
                    
            return numKillsRow + numKillsCol;
        
        maxKills = 0;
        
        for i in xrange(N):
            for j in xrange(M):
                if grid[i][j] == '0':
                    numKills = getKills(i, j);
                    if numKills > maxKills:
                        maxKills = numKills;
                        
        return maxKills;
