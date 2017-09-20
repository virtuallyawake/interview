/*
Route between 2 nodes in directed graph
nodeA -> ... -> nodeD
   A
  / \
 B   C
      \
       D -> A 
 
*/

function Node(name) {
    this.name = name;
    this.children = [];
    this.addChild = function(child) {
        this.children.push(child);
    }
    this.visited = false;
}

var nodeA = new Node("A");
var nodeB = new Node("B");
var nodeC = new Node("C");
var nodeD = new Node("D");
nodeA.addChild(nodeB);
nodeA.addChild(nodeC);
nodeC.addChild(nodeD);
nodeD.addChild(nodeA);



function isThereRoute(nodeA, nodeB) {
    if (nodeA == null || nodeB == null)
        return false;

    if (nodeA.visited)
        return false;

    nodeA.visited = true;
    
    if (nodeA == nodeB) {
        return true;
    }

    var result = false;
    nodeA.children.forEach(function(child) {
        result |= isThereRoute(child, nodeB);
    });
    
    return result;
}
var nodeX = new Node("X");
console.log(isThereRoute(nodeA, nodeB));
console.log(false | false);