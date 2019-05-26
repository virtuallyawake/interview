/*
Check if there is a route between two nodes in a directed graph
           A
         /   \
	B     C
       / \   / 
      D   E  F
            /
           G
*/

function GraphNode(value, children) {
  this.value = value;
  this.children = children;
  this.visited = false;
}

var nodeG = new GraphNode('G', []);
var nodeF = new GraphNode('F', [nodeG]);
var nodeE = new GraphNode('E', []);
var nodeD = new GraphNode('D', []);
var nodeC = new GraphNode('C', [nodeF]);
var nodeB = new GraphNode('B', [nodeD, nodeE]);
var nodeA = new GraphNode('A', [nodeB, nodeC]);

function areNodesConnected(nA, nB) {
  if (nA === null)
    return false;

  nA.visited = true;

  if (nA === nB) {
    return true;
  }

  var foundRoute = false;
  nA.children.forEach(function (child) {
    if (!child.visited)
      foundRoute |= areNodesConnected(child, nB);
  });

  return foundRoute;
}

console.log(areNodesConnected(nodeA, nodeF));
