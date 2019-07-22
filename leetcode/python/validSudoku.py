class Solution(object):
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
        def isValid(arr):
            # Check valid digit
            for d in arr:
                if not (d == '.' or (int(d) >= 1 and int(d) <= 9)):
                    return False;
                    
            # Check digit not repeated
            digits = [d for d in arr if d != '.'];
            return len(digits) == len(set(digits));
        
        def getSubBox(board, x, y):
            arr = [];
            for i in xrange(3):
                for j in xrange(3):
                    arr.append(board[x+i][y+j]);
            return arr;
            
        # Loop through rows
        for row in board:
            if not isValid(row):
                return False;
        
        # Loop through columns
        for i in xrange(9):
            col = [row[i] for row in board];
            if not isValid(col):
                return False;
        
        # Loop through sub-boxes
        for i in xrange(3):
            for j in xrange(3):
                subBoxArray = getSubBox(board, i*3, j*3);
                if not isValid(subBoxArray):
                    return False;
        
        return True;
