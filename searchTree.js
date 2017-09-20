/*
DFS
---

1.   A
    /  \
2. B    C
          \
3.         D
       
Output: A - B - C - D
*/

function Node(name) {
    this.name = name;
    this.children = [];
    this.addChild = function(child) {
        this.children.push(child);
    }
}

var nodeA = new Node("A");
nodeA.addChild(new Node("B"));
var nodeC = new Node("C");
nodeC.addChild(new Node("D"));
nodeA.addChild(nodeC);


function dfs(node) {
    if (node == null) return;
    console.log(node.name);
    node.children.forEach(function(child) {
        dfs(child);
    });
}

dfs(nodeA);
console.log("Done");

dfs(null);
console.log("Done");

/*
BFS
---
Output: A - B - C - D
        A - B - C - D
Queue: 
*/

function bfs(node) {
    var queue = [];
    queue.push(node);
    while(queue.length > 0) {
        // Pop first thing from the queue
        var n = queue.shift();
        console.log(n.name);
        // Add children to queue
        n.children.forEach(function(child) {
            queue.push(child);
        });
    }
}

bfs(nodeA);

/*
Balanced binary Tree
abs(heightLeft - heightRight) <= 1
*/

function nn(name) {
    this.name = name;
    this.left = null;
    this.right = null;
    this.heightLeft = -1;
    this.heightRight = -1;
}

var nnE = new nn("E");
var nnD = new nn("D");
nnD.right = nnE;
var nnC = new nn("C");
nnC.right = nnD;
var nnB = new nn("B");
var nnA = new nn("A");
nnA.right = nnC;
nnA.left = nnB;

function binaryDFS(node) {
    if (node.left == null && node.right == null)
        return 0;
    
    var heightLeft = -1;
    var heightRight = -1;
    if (node.left) {
        heightLeft = binaryDFS(node.left);
    }
    if (node.right) {
        heightRight = binaryDFS(node.right);
    }
    if (Math.abs(heightLeft - heightRight) > 1) {
        console.log("UNBALANCED");    
    }
    var myHeight = Math.max(heightLeft, heightRight) + 1;

    console.log(node.name);
    console.log("heightLeft: " + heightLeft);
    console.log("heightRight: " + heightRight);
    console.log("My height: " + myHeight);
    console.log("====");
    
    return myHeight;
}

binaryDFS(nnA);

//console.dir(nnA);