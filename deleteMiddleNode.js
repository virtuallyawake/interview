/*
Delete node given node.
A -> B -> C -> D -> E

Delete C given C.

outcome:
A -> B -> D -> E
*/

function Node(value) {
  this.value = value;
  this.next = null;
}

var nodeA = new Node("A");
var nodeB = new Node("B");
var nodeC = new Node("C");
var nodeD = new Node("D");
var nodeE = new Node("E");
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

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

function copyContent(n1, n2) {
  n1.value = n2.value;
}

function deleteNode(node) {
  var p1 = node;
  var p2 = node.next;
  
  if (p1 === null)
    return;
  if (p2 === null)
    return;

  while (p2 !== null) {
    copyContent(p1, p2);
    if (p2.next === null) {
      p1.next = null;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
}

function deleteNode2(node) {
  var p1 = node;
  var p2 = node.next;
  
  if (p1 === null)
    return;
  if (p2 === null)
    return;

  copyContent(p1, p2);
  p1.next = p2.next;
}

printList(nodeA);
deleteNode2(nodeC);
printList(nodeA);
