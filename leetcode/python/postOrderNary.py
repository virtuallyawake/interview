"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def postorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        
        result = [];
        
        def traversePostorder(node):
            if node == None:
                return;
            
            for child in node.children:
                traversePostorder(child);

            result.append(node.val);
            
        """
        Using a stack explores the tree breadth search first
        (level-by-level, top-to-bottom), but from right to left. We want to 
        start from the bottom and left to right, so we reverse
        the result at the end.
        """
        def traversePostorderIterative(node):
            if node is None:
                return [];
            
            stack = [node];
            
            while len(stack) != 0:
                current = stack.pop();
                result.append(current.val);
                
                for child in current.children:
                    stack.append(child);
            
            result.reverse();

        traversePostorder(root);
        return result;
