# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def postorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        # post-order: left, right, root
        # uses: delete the tree
        result = [];

        def depthSearchFirst(node):
            if node == None:
                return;
            
            depthSearchFirst(node.left);
            depthSearchFirst(node.right);
            result.append(node.val)
            
        depthSearchFirst(root);
        return result;
