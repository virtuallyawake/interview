/*
102. Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */

function traverseBreadth(root) {
    if (root === null)
        return [];

    var levels = [];
    var queue = [];  // FIFO
    queue.push([root, 0]);

    while(queue.length > 0) {
	[n, level] = queue.shift();
	
	if (level <= levels.length-1) { // level already exists
	    levels[level].push(n.val);
	} else {
	    levels.push([n.val]);
	}

	if (n.left) {
	    queue.push([n.left, level+1]);
	}

	if (n.right) {
	    queue.push([n.right, level+1]);
	}
    }

    return levels;
}

var levelOrder = function(root) {
    return traverseBreadth(root, levels);
};
