class Solution(object):
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        N = len(matrix[0]) - 1;

        def moveElement(value, x, y):
            overwritten = matrix[y][N-x];
            matrix[y][N-x] = value;
            return (overwritten, y, N-x);
        
        def rotateSquare(i, j, lastIndex):
            for x in xrange(i, lastIndex):
                elem = matrix[x][j];
                (overwritten, xx, yy) = moveElement(elem, x, j);
                (overwritten, xx, yy) = moveElement(overwritten, xx, yy);
                (overwritten, xx, yy) = moveElement(overwritten, xx, yy);
                (overwritten, xx, yy) = moveElement(overwritten, xx, yy);
                
        i = 0;
        lastIndex = N
        while i < lastIndex:
            rotateSquare(i, i, lastIndex);
            i = i + 1;
            lastIndex = lastIndex - 1;
        
        return;
