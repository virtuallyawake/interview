"""
# Definition for a QuadTree node.
class Node(object):
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight
"""
class Solution(object):
    def construct(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: Node
        """
        
        def processQuadrant(i, j, N):
            initial = grid[i][j];
            
            for p1 in xrange(i, i+N):
                for p2 in xrange(j, j+N):
                    if grid[p1][p2] != initial:
                        return Node('*', False);

            return Node(initial, True);
            
        def buildTree(i, j, N):
            node = processQuadrant(i, j, N);
            if node.isLeaf:
                return node;
            
            # TopLeft
            node.topLeft = buildTree(i, j, N/2);
            # TopRight
            node.topRight = buildTree(i, j+N/2, N/2);
            # BottomLeft
            node.bottomLeft = buildTree(i+N/2, j, N/2);
            # BottomRight
            node.bottomRight = buildTree(i+N/2, j+N/2, N/2);

            return node;
        
        return buildTree(0, 0, len(grid));
