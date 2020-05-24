/*
104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function traverseBFS1(node, level) {
    if (node === null) {
	return level;
    }

    return Math.max(traverseBFS(node.left, level+1), traverseBFS(node.right, level+1));
}

function traverseBFS2(node) {
    if (node === null) {
	return 0;
    }

    return Math.max(traverseBFS2(node.left), traverseBFS2(node.right)) + 1;
}

var maxDepth = function(root) {
    return traverseBFS1(root, 0);
    return traverseBFS2(root);
};
