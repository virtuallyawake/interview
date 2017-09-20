function Node(name, left, right) {
    this.name = name;
    this.left = left;
    this.right = right;
}
/*
     "A"
    /  \
  "B"   "C"
  /    /
"D"   "E"
       \
        "F"
*/
var nodeG = new Node("G", null, null);
var nodeF = new Node("F", null, null);
var nodeE = new Node("E", null, nodeF);
var nodeD = new Node("D", null, null);
var nodeC = new Node("C", nodeE, null);
var nodeB = new Node("B", nodeD, null);
var nodeA = new Node("A", nodeB, nodeC);

function ListNode(name) {
    this.name = name;
    this.next = null;
}

function treeToList(node, level, lists) {
    if (node === null)
        return;
    console.log(node.name);
    var n = new ListNode(node.name);
    if (!lists[level])
        lists[level] = n;
    else
        appendToList(lists[level], n);
    
    level++;
    if (node.left)
        treeToList(node.left, level, lists);
    if (node.right)
        treeToList(node.right, level, lists);
}

function appendToList(head, node) {
    console.log("appendToList");
    console.log(head);
    console.log(node);
    var curr = head;
    while(curr !== null) {
        if (!curr.next) {
            curr.next = node;
            break;
        }
        curr = curr.next;
    }
    console.log("done appending");
}

var lists = [];
treeToList(nodeA, 0, lists);
console.dir(lists);