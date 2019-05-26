/*
  is binary tree a binary search tree?
input: binary tree
binary search tree condition:
left <= current < right
all nodes to the left should be <= current node
all nodes to the right should be > current node
         9
      6     16
    4  7   13  21
  1

*/

function TreeNode(value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
}

var input = [1,4,6,7,9,13,16,21]

function createBalancedTree(A, begin, end) {
//  console.log("begin: " + begin + ", end:" + end);
  if (begin === end) {  // [1]
    return new TreeNode(A[begin]);
  }
  // [1,4]
  var midPoint = begin + Math.floor((end-begin+1)/2);

  // left subtree
  var leftNode = null;
  if (begin < midPoint)
    leftNode = createBalancedTree(A, begin, midPoint-1);  

  // right subtree
  var rightNode = null;
  if (midPoint < end)
    rightNode = createBalancedTree(A, midPoint+1, end);

  return new TreeNode(A[midPoint], leftNode, rightNode);
}

var root = createBalancedTree(input, 0, input.length-1);

// Not right: should check that ALL nodes in the subtrees 
// follow BST condition
function checkIfBST(node) {
  if (node === null)
    return true;

  var result = true;
  console.log("Node " + node.value);
  if (node.left) {
    if (node.left.value > node.value) {
      console.log(node.left.value + " > " + node.value);
      result = false;
    }
  }
  if (node.right) {
    if (node.right.value <= node.value) {
      console.log(node.right.value + " <= " + node.value);
      result = false;
    }
  }

  console.log("Result:" + result);
  return result && checkIfBST(node.left) && checkIfBST(node.right);
}

// Min/max approach
// Pass min and max to subtrees
function checkIfBST2(node, min, max) {
  if (node === null)
    return true;

  if ((node.value < min) || (node.value > max)) {
    return false;
  }

  var leftIsBST = checkIfBST2(node.left, -10000, node.value);
  var rightIsBST = checkIfBST2(node.right, node.value+1, 10000);

  return leftIsBST && rightIsBST;
}

var isBST = checkIfBST2(root, -10000, 10000);
console.log(isBST);
