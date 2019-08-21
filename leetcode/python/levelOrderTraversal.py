"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def levelOrder(self, root):
        """
        :type root: Node
        :rtype: List[List[int]]

        We use a queue to traverse breadth search first for each level 
        from left to right. In order to result one list per level, we 
        add the level in the tuple when building the queue.
        """
        
        result = [];
        
        def traverseBSF(node):
            if node == None:
                return [];
            
            queue = [(0, node)];

            while len(queue):
                (currLevel, currNode) = queue.pop(0);
                if len(result) == currLevel:
                    result.append([currNode.val]);
                else:
                    result[currLevel].append(currNode.val);
                
                for child in currNode.children:
                    queue.append((currLevel+1, child));
            
        traverseBSF(root);
        
        return result;
