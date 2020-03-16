/*
98. Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

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
 * @return {boolean}
 */

function isBST(node, min, max) {
    if (node === null)
        return true;
    
    if (node.val <= min || node.val >= max)
        return false;
    
    if (node.left) {
        if (!isBST(node.left, min, node.val)) {
            return false;
        }
    }
    
    if (node.right) {
        if (!isBST(node.right, node.val, max)) {
            return false;
        }
    }
    
    return true;
}

function inOrderDFS(node, results) {
    // left, node, right: in-order traversal
    if (node === null)
        return true;
    
    if (!inOrderDFS(node.left, results))
        return false;

    
    if (results.length > 0 && results[results.length-1] >= node.val) {
        return false;
    }
    results.push(node.val);
    
    if (!inOrderDFS(node.right, results))
       return false;
    
    return true;
}

// incomplete
function inOrderBFS(node) {
    var queue = [];  // FIFO
queue.push(node);

while (queue.length > 0) {
    var n = queue.shift();

    if (n.left) {
	queue.push(n.left);
    }

    if (n.right) {
	queue.push(n.right);
    }
}
}

var isValidBST = function(root) {
    return inOrderDFS(root, []);
};

var isValidBST1 = function(root) {
    var MIN = -100000000000000;
    var MAX = 1000000000000000;
    return isBST(root, MIN, MAX);
};
