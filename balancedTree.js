function Node(name, left, right) {
    this.name = name;
    this.left = left;
    this.right = right;
}

var nodeG = new Node("G", null, null);
var nodeF = new Node("F", null, null);
var nodeE = new Node("E", null, nodeF);
var nodeD = new Node("D", null, null);
var nodeC = new Node("C", nodeE, null);
var nodeB = new Node("B", nodeD, null);
var nodeA = new Node("A", nodeB, nodeC);

function getHeight(node) {
    if (node === null)
        return 0;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

function isBalanced(node) {
    if (node === null)
        return true;
    console.log(node.name + "-" + getHeight(node));
        
    if (Math.abs(getHeight(node.left) - getHeight(node.right)) > 1)
        return false;
    else
        return isBalanced(node.left) && isBalanced(node.right);
}

console.log(isBalanced(nodeA));