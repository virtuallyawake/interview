/*
Check if tree is balaced.
Balanced: height of the subtrees differs by 1 or less.
           A
         /   \
	B     C
       / \   / 
      D   E  F
*/

function TreeNode(value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
  this.height = null;
}

var nodeG = new TreeNode('G');
var nodeF = new TreeNode('F', nodeG);
var nodeE = new TreeNode('E');
var nodeD = new TreeNode('D');
var nodeC = new TreeNode('C', nodeF);
var nodeB = new TreeNode('B', nodeD, nodeE);
var nodeA = new TreeNode('A', nodeB, nodeC);


function checkHeight(node) {
  if (node === null)
    return 0;

  var heightLeft = checkHeight(node.left);
  var heightRight = checkHeight(node.right);

  if ((heightLeft === false) || (heightRight === false))
    return false;

  if (Math.abs(heightLeft - heightRight) > 1) {
    console.log("Not balanced");
    return false;
  }

  return Math.max(heightLeft, heightRight) + 1;
}


console.log(checkHeight(nodeA));
