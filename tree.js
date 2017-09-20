function Node(name) {
    this.name = name;
    this.children = [];
    this.height = -1;
}
Node.prototype.addChild = function(node) {
    this.children.push(node);
}

var nodeG = new Node("G")
var nodeF = new Node("F")
nodeF.addChild(nodeG);
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

function printTreeDF(node) {
    console.log(node.name + "-" + node.height)
    
    if (node.children.length === 0)
        return;
    
    node.children.forEach(function(child) {
        printTreeDF(child);
    })
}

function printTreeBF(node) {
    var queue = [];
    queue.push(node);
    
    while(queue.length > 0) {
        var n = queue.shift();
        console.log(n.name);
        
        n.children.forEach(function(child) {
            queue.push(child);
        })
    }
}

function addHeightDF(node) {
    if (node.children.length === 0) {
        node.height = 0;
        return node.height;
    }
    
    node.children.forEach(function(child) {
        var height = addHeightDF(child);
        if (height >= node.height) {
            node.height = height+1;
        }
    })
    return node.height;
}

function checkBalance(node) {
    if (node.children.length === 0)
        return;
    
    var heightMax = -1;
    var heightMin = 10000;
    node.children.forEach(function(child) {
        if (child.height > heightMax)
            heightMax = child.height;
        if (child.height < heightMin)
            heightMin = child.height;
        checkBalance(child);
    })
    if (heightMax - heightMin > 1)
        console.log("Unbalanced");
}

addHeightDF(nodeA);
printTreeDF(nodeA);
checkBalance(nodeA);