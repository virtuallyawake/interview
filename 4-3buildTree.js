/*
[1 3 4 7 8 11]
   3              7         4
  1 4            4 8       3 7
     7          3   11    1   8
      8        1               11
       11
     7
  3    11
1  4  8
*/

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function buildTree(arr) {
    var midPoint = Math.floor(arr.length/2);
    var rootValue = arr[midPoint];
    var root = new Node(rootValue);
    var node = root;
    for(var i = midPoint+1; i<arr.length; i++) {
        var n = new Node(arr[i]);
        node.right = n;
        node = n;
    }
    node = root;
    for(var i = midPoint-1; i>-1; i--) {
        var n = new Node(arr[i]);
        node.left = n;
        node = n;
    }
    return root;
}


function buildTree2(arr) {
    if (arr.length === 0)
        return null;
    if (arr.length === 1)
        return new Node(arr[0]);

    var midPoint = Math.floor(arr.length/2);
    var root = new Node(arr[midPoint]);
    var arrLeft = arr.slice(0, midPoint);
    var arrRight = arr.slice(midPoint+1);
    root.left = buildTree2(arrLeft);
    root.right = buildTree2(arrRight);

    return root;
}

var arr = [1, 3, 4, 7, 8, 11];
var rootNode = buildTree2(arr);
console.dir(rootNode);
function printTree(node) {
    var queue = [];
    queue.push(node);
    while (queue.length > 0) {
        var n = queue.shift();
        console.log(n.value);

        if (n.left)
            queue.push(n.left);
        if (n.right)
            queue.push(n.right);
    }
}
printTree(rootNode);