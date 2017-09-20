/* Check if binary tree is a binary search tree */

function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.level = -1;
}

var node7 = new TreeNode(7);
var node5 = new TreeNode(5);
var node2 = new TreeNode(2);
var node8 = new TreeNode(8);
var node6 = new TreeNode(6);
var node9 = new TreeNode(9);
node7.left = node5;
node5.left = node2;
node7.right = node8;
node8.left = node6;
node8.right = node9;
/*
Tree
    7 
  5   8 
2    6  9
*/

function checkIfSearchTree(node) {
    if (node == null)
        return true;

    if (node.left && (node.left.value > node.value)) {
        return false;
    }
    if (node.right && (node.right.value <= node.value)) {
        return false;
    }

    return (checkIfSearchTree(node.left) && checkIfSearchTree(node.right));
}

var result = checkIfSearchTree(node7);
console.log(result);