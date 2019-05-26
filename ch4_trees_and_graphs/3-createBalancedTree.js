/*
input:
[1,4,6,7,9,13,16,21]
output:
binary search tree with minimal height
         9
      6     16
    4  7   13  21
  1
*/

function TreeNode(value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
}

var input = [1,4,6,7,9,13,16,21]

function createBalancedTree(A, begin, end) {
//  console.log("begin: " + begin + ", end:" + end);
  if (begin === end) {  // [1]
    return new TreeNode(A[begin]);
  }
  // [1,4]
  var midPoint = begin + Math.floor((end-begin+1)/2);

  // left subtree
  var leftNode = null;
  if (begin < midPoint)
    leftNode = createBalancedTree(A, begin, midPoint-1);  

  // right subtree
  var rightNode = null;
  if (midPoint < end)
    rightNode = createBalancedTree(A, midPoint+1, end);

  return new TreeNode(A[midPoint], leftNode, rightNode);
}

function printBFS(root) {
  var queue = [];  // FIFO
  queue.push(root);

  while (queue.length !== 0) {
    var n = queue.shift();
    console.log("Node: " + n.value + 
		", left: " + ((n.left) ? n.left.value : null) + 
		", right: " + ((n.right) ? n.right.value : null));
    if (n.left)
      queue.push(n.left);
    if (n.right)
      queue.push(n.right);
  }
}

var root = createBalancedTree(input, 0, input.length-1);
printBFS(root);

/* 4.4
Create linked lists for all the nodes at each depth
         9
      6     16
    4  7   13  21
  1

list1: 9
list2: 6 -> 16
list3: 4 -> 7 -> 13 -> 21
list4: 1

output: [ListNode(9), ListNode(6), ListNode(4), ListNode(1)]
*/

function ListNode(value) {
  this.value = value;
  this.next = null;
}

var lists = {};

function addToTail(head, node) {
  var n = head;
  while (n !== null) {
    if (n.next === null) { // tail
      n.next = node;
      n = node;
    }
    n = n.next;
  }
}

/* Linked lists for nodes at each height */
function traverseTreeDFS(node) {
  if (node === null)
    return 0;

  var heightLeft = traverseTreeDFS(node.left);
  var heightRight = traverseTreeDFS(node.right);

  var height = Math.max(heightLeft, heightRight) + 1;
  var listHead = lists[height];
  var listNode = new ListNode(node.value);
  if (listHead) {
    addToTail(listHead, listNode)
  } else {
    lists[height] = listNode;
  }
  return height;
}

function traverseTreeDFS2(node, depth) {
  if (node === null) {
    return null;
  }

  var listNode = new ListNode(node.value);
  var listHead = lists[depth];
  if (listHead)
    addToTail(listHead, listNode);
  else
    lists[depth] = listNode;

  traverseTreeDFS2(node.left, depth+1);
  traverseTreeDFS2(node.right, depth+1);
}

function printLinkedList(head) {
  var n = head;
  var buffer = [];
  while (n !== null) {
    buffer.push(n.value + ((n.next) ? " -> " : ""));
    n = n.next;
  }
  console.log(buffer.join(""));
}

function createLinkedLists(root) {
  traverseTreeDFS2(root, 0);
}

createLinkedLists(root);

Object.keys(lists).forEach(function(key) {
  console.log("depth: " + key);
  printLinkedList(lists[key]);
});
