function ListNode(treeNode) {
    this.value = treeNode;
    this.next = null;
}

function addToTail(listNode, tailNode) {
    var n = listNode;
    while(n.next != null) {
        n = n.next;
    }
    n.next = tailNode;
    tailNode.next = null;
}

function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.level = -1;
}

var node7 = new TreeNode(7);
var node5 = new TreeNode(5);
var node2 = new TreeNode(2);
var node8 = new TreeNode(8);
var node6 = new TreeNode(6);
var node9 = new TreeNode(9);
node7.left = node5;
node5.left = node2;
node7.right = node8;
node8.left = node6;
node8.right = node9;
/*
Tree -> array of linked list
    7          ->   7
  5   8        ->   5 -> 8
2    6  9      ->   2 -> 6 -> 9
*/

function traverseTree(node, height, lists) {
    node.height = height;
    // Add to linked list
    if (lists[height]) {
        addToTail(lists[height], new ListNode(node));
    } else {
        var listNode = new ListNode(node);
        lists[height] = listNode;
    }
    if (node.left)
        traverseTree(node.left, height+1, lists);
    if (node.right)
        traverseTree(node.right, height+1, lists);
}

var lists = [];
traverseTree(node7, 0, lists);
//console.dir(lists);

function printList(head) {
    var n = head; // 5 -> 8
    console.log(n.value.value);
    while(n.next != null) {
        n = n.next;
        console.log(n.value.value);
    }
}

lists.forEach(function(head) {
   printList(head);
   console.log("====");
});