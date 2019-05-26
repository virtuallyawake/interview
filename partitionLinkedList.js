/*
partition list around value x.
(less than x) -> x -> (greater or equal to x)
5 -> 2 -> 7 -> 3 -> 9
x = 3
3 -> 2 -> 7 -> 5 -> 9

2 -> 3 -> 5 -> 7 -> 9 
*/

function Node(value) {
  this.value = value;
  this.next = null;
}

var nodeA = new Node(5);
var nodeB = new Node(2);
var nodeC = new Node(7);
var nodeD = new Node(3);
var nodeE = new Node(9);
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

function swap(node1, node2) {
  var tmp = node1.value;
  node1.value = node2.value;
  node2.value = tmp;
}

function partitionAroundX(head, x) {
  var n = head;
  while (n !== null) {
    if (n.value === x) {
      swap(n, head);
      break;
    }
    n = n.next;
  }

  var pX = head;
  var pBorder = head.next; // everything to the left is < x

  n = pBorder;
  while (n !== null) {
    if (n.value < x) {
      swap(pBorder, n);
      pX = pBorder;
      pBorder = pBorder.next;
    }
    n = n.next;
  }

  swap(pX, head);
}

function partitionAroundX2(head, x) {
  var n = head;
  var pHead = head;
  var pTail = head;

  while (n !== null) {
    var next = n.next;
    if (n.value < x) { // Goes to head
      n.next = pHead;
      pHead = n;
      console.log("pHead.value: " + pHead.value);
    } else { // Goes to tail
      pTail.next = n;
      pTail = n;
      console.log("pTail.value: " + pTail.value);
    }
    n = next;
  }
  pTail.next = null;

  return pHead;
}


printList(nodeA);
//partitionAroundX(nodeA, 9);
var newHead = partitionAroundX2(nodeA, 3);
printList(newHead);
