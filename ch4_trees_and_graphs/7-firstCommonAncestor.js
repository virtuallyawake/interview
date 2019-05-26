/*
Find the first common ancestor of 2 nodes in a binary tree (not BST)
            4
        2        5
     1   3    6    8
      7      9 10

Input: 2 nodes
Output: 1st common ancestor
Example
input: 8, 9
output: 5

*/

function TreeNode(value, right, left, parent) {
  this.value = value;
  this.right = right || null;
  this.left = left || null;
  this.parent = parent || null;
  this.visited = false;
}

var node7 = new TreeNode(7);
var node1 = new TreeNode(1, node7);
var node3 = new TreeNode(3);
var node2 = new TreeNode(2, node3, node1);
var node9 = new TreeNode(9);
var node10 = new TreeNode(10);
var node6 = new TreeNode(6, node10, node9);
var node8 = new TreeNode(8);
var node5 = new TreeNode(5, node8, node6);
var node4 = new TreeNode(4, node5, node2);
node7.parent = node1;
node1.parent = node2;
node3.parent = node2;
node2.parent = node4;
node9.parent = node6;
node10.parent = node6;
node6.parent = node5;
node8.parent = node5;
node5.parent = node4;

function findCommonAncestor(node, nodeB) {
  if (node === null) {
    return false;
  }

  if (node.visited) {
    return false;
  }

  if (node === nodeB) {
    return true;
  }

  node.visited = true;

  var left = findCommonAncestor(node.left, nodeB);
  var right = findCommonAncestor(node.right, nodeB);
  var parent = findCommonAncestor(node.parent, nodeB);


  if (parent)
    console.log("Common ancestor: " + node.parent.value);

  return left || right || parent;
}


findCommonAncestor(node7, node5);
