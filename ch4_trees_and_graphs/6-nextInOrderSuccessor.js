/*
Find the next node (in-order successor) in a binary search tree
         9
      6     16
    4  7   13  21
  1
*/

function TreeNode(value, left, right, parent) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
  this.parent = parent || null;
}

var input = [1,4,6,7,9,13,16,21]

function createBalancedTree(A, begin, end, parent) {
//  console.log("begin: " + begin + ", end:" + end);
  if (begin === end) {  // [1]
    return new TreeNode(A[begin], null, null, parent);
  }
  // [1,4]
  var midPoint = begin + Math.floor((end-begin+1)/2);

  var currentNode = new TreeNode(A[midPoint], null, null, parent);

  // left subtree
  var leftNode = null;
  if (begin < midPoint)
    leftNode = createBalancedTree(A, begin, midPoint-1, currentNode);  

  // right subtree
  var rightNode = null;
  if (midPoint < end)
    rightNode = createBalancedTree(A, midPoint+1, end, currentNode);

  currentNode.left = leftNode;
  currentNode.right = rightNode;
  return currentNode;
}

var root = createBalancedTree(input, 0, input.length-1);

function printTree(node) {
  if (node === null) {
    return;
  }

  printTree(node.left);
  var leftValue = (node.left) ? node.left.value : null;
  var rightValue = (node.right) ? node.right.value : null;
  var parentValue = (node.parent) ? node.parent.value : null;
  console.log("Node " + node.value + ", left: " + leftValue +
	     ", right: " + rightValue + ", parent: " + parentValue);
  printTree(node.right);
}

printTree(root);

function findNode(node, value) {
  if (node === null)
    return null;

  if (node.value === value)
    return node;

  if (value < node.value)
    return findNode(node.left, value);
  else
    return findNode(node.right, value);
}

function getLeftmostNode(node) {
  if (node === null)
    return null;

  if (node.left)
    return getLeftmostNode(node.left);
  else
    return node;
}

function getFirstAncestorToTheRight(node) {
  var parent = node.parent;

  if (parent.right === node)
    return getFirstAncestorToTheRight(parent);
  else
    return parent;
}

function returnSuccessor(root, value) {
  // Find the node
  var startingNode = findNode(root, value);
  if (!startingNode)
    return "Node doesn't exist";

  console.log(startingNode.value);
  // if right subtree, return left-most node
  // Otherwise, return first ancestor to the right
  if (startingNode.right)
    return getLeftmostNode(startingNode.right);
  else
    return getFirstAncestorToTheRight(startingNode);
}

var successor = returnSuccessor(root, 7);  // expect 9
console.log(successor.value);
