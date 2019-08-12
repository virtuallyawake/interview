"""
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
"""
class Solution(object):
    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """        
        # min_row, max_col, max_row, min_col
        # row 0, col n-1, row m-1 (reversed), col 0 (reversed)
        # row 1,
        
        if len(matrix) == 0:
            return [];
        min_row = 0;
        max_col = len(matrix[0])-1;
        max_row = len(matrix)-1;
        min_col = 0;
        
        output = [];
        while min_row <= max_row and min_col <= max_col:
            # min_row
            for j in xrange(min_col, max_col+1):  #1, 
                output.append(matrix[min_row][j]);
            min_row = min_row + 1;
            if min_row > max_row:
                break;
            
            # max_col
            for i in xrange(min_row, max_row+1):
                output.append(matrix[i][max_col]);
            max_col = max_col - 1;
            if min_col > max_col:
                break;
            
            # max_row
            for j in xrange(max_col, min_col-1,-1):
                output.append(matrix[max_row][j]);
            max_row = max_row - 1;
            if min_row > max_row:
                break;
            
            # min_col
            for i in xrange(max_row, min_row-1, -1):
                output.append(matrix[i][min_col]);  
            min_col = min_col + 1;
            if min_col > max_col:
                break

        return output
