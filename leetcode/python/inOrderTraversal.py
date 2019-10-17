# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
"""
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
"""
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
