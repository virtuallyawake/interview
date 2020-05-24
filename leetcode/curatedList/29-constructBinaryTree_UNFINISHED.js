/*
105. Construct Binary Tree from Preorder and Inorder Traversal

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

in-order: left, node, right
pre-order: node, left, right
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// I don't get it. Try again someday:
//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/

function BFS(inorder, index) {

    // left
    var left = BFS(inorder, index-1);
    // node
    var node = new TreeNode(inorder[index]);
    // right
    BFS(node.right);
}

var buildTree = function(preorder, inorder) {
    BFS(inorder, 1);
};
