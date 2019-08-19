# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        # in-order: left, root, right
        # use: get nodes in non-decreasing order
        result = [];
        def depthSearchFirst(node):
            if node == None:
                return;
            
            depthSearchFirst(node.left);
            result.append(node.val);
            depthSearchFirst(node.right);
                    
        depthSearchFirst(root);

        return result;
