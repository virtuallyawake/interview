/*
1110. Delete Nodes And Return Forest
https://leetcode.com/problems/delete-nodes-and-return-forest/

Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest.  You may return the result in any order.

Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]
 

Constraints:

The number of nodes in the given tree is at most 1000.
Each node has a distinct value between 1 and 1000.
to_delete.length <= 1000
to_delete contains distinct values between 1 and 1000.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

function dfsDelete(n, parent, to_delete, result) {
    if (n === null) {
        return;
    }
    
    const nodeDeleted = to_delete.includes(n.val);
    if (nodeDeleted) {
        if (parent) { // remove node reference from parent
            if (parent.left && parent.left.val === n.val) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        }
    } else { // save roots of trees
        if (parent === null) {
            result.push(n);
        }
    }

    // If the node was deleted, let the children know
    parent = nodeDeleted ? null : n; 
    dfsDelete(n.left, parent, to_delete, result);
    dfsDelete(n.right, parent, to_delete, result);   
}

var delNodes = function(root, to_delete) {
    let result = [];
    dfsDelete(root, null, to_delete, result);
    return result;
};
