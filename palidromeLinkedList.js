/*
Check if linked list is a palidrome
ana
anna
hannah
*/

function Node(value) {
  this.value = value;
  this.next = null;
}

var nodeA = new Node('h');
var nodeB = new Node('a');
var nodeC = new Node('n');
var nodeD = new Node('n');
var nodeE = new Node('a');
var nodeF = new Node('h');
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeF;

function printList(head) {
  var node = head;
  var output = [];
  while(node !== null) {
    var arrow = (node.next) ? ' -> ' : '';
    output.push(node.value + arrow);
    node = node.next;
  }
  console.log(output.join(''));
}

function isPalindrome(head) {
  var pHead = head;
  var pTail = null;
  var n = head;
  var length = 0;
  while (n !== null) {
    if (!n.next)
      pTail = n;
    length++;
    n = n.next;
  }
  console.log("length: " + length);
  nodeA = head;
  var posNodeA = 0;
  while (nodeA !== null) {
    var posNodeB = length - 1 - posNodeA;
    var nodeB = getNode(head, posNodeB);
    console.log("nodeA: " + nodeA.value + ", nodeB: " + nodeB.value);
    if (nodeA.value !== nodeB.value) {
      return false;
    }
    nodeA = nodeA.next;
    posNodeA++;
  }
  return true;
}

function getNode(head, pos) {
  var n = head;
  var counter = 0;
  while (n !== null) {
    if (counter === pos)
      return n;

    counter++;
    n = n.next;
  }
  return null;
}

printList(nodeA)
var result = isPalindrome(nodeA);
console.log(result);
