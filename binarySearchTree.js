var input = [1,5,7,8,9,13,15];

function Node(name) {
    this.name = name;
    this.left = null;
    this.right = null;
}

function createTree(arr) {
    var idx = Math.floor(arr.length/2);
    var n = new Node(arr[idx]);
    populateLeft(arr, n, idx);
    populateRight(arr, n, idx);
    return n;
}

function populateRight(arr, n, idx) {
    if (idx+1 < arr.length) {
        n.right = new Node(arr[idx+1]);
        populateRight(arr, n.right, idx+1);
    }
}

function populateLeft(arr, n, idx) {
    if (idx-1 >= 0) {
        n.left = new Node(arr[idx-1]);
        populateLeft(arr, n.left,  idx-1);
    }
}

function printTreeDF(node) {
    if (node === null)
        return;
    console.log(node.name);
    printTreeDF(node.left);
    printTreeDF(node.right);
}

function createTree2(arr, start, end) {
    if (end < start)
        return null;
    var mid = Math.floor((start+end)/2);
    var n = new Node(arr[mid]);
    n.right = createTree2(arr, mid+1, end);
    n.left = createTree2(arr, start, mid-1);
    return n;
}

var root = createTree2(input, 0, input.length-1);
printTreeDF(root);