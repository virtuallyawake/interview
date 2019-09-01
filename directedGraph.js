function Node(name) {
    this.name = name;
    this.children = [];
    this.visited = false;
}
Node.prototype.addChild = function(node) {
    this.children.push(node);
}

var nodeG = new Node("G")
var nodeF = new Node("F")
//nodeF.addChild(nodeG);
var nodeE = new Node("E");
nodeE.addChild(nodeF);
var nodeD = new Node("D");
var nodeC = new Node("C");
nodeC.addChild(nodeE);
var nodeB = new Node("B");
nodeB.addChild(nodeD);
var nodeA = new Node("A");
nodeA.addChild(nodeB);
nodeA.addChild(nodeC);

function isPath(nA, nB) {
    if (nA === nB) {
        console.log("Yes");
        return true;
    }
    
    if (nA.visited || nA.children.length === 0)
        return false;
    
    var connected = false;
    for(var i=0; i<nA.children.length; i++){
        var child = nA.children[i];
        if (!child.visited)
            if(isPath(child, nB))
                return true
        child.visited = true;
    }
    
    return connected;
}

function isPathBF(nA, nB) {
    var queue = [];
    // enqueue
    queue.push(nA);
    
    while(queue.length > 0) {
        console.dir(queue);
        var n = queue.shift();
	// visit
	if (n == nB)
	    return true;
	// visited
	n.visited = true;

        for(var i=0; i<n.children.length; i++) {
            var child = n.children[i];
            console.log(child.name);
            if (!child.visited) {
                queue.push(child);
            }
        };
    }
    
    return false;
}

// IF YOU WANT TO RETURN IN A LOOP, DO NOT USE FOREACH!!!!
var nodeX = new Node("X");
console.log(isPathBF(nodeA, nodeX));