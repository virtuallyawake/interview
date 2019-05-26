/*
k-th to last element.
A -> B -> C -> D -> E
1    2    3    4    5
4    3    2    1    0

k = 0 -> E
k = 2 -> C
k = 4 -> 5 - 4 = 1 -> A

1st approach: 
 Go through list, put elements in array. Return element at length-k
 Space: O(n)
 Complexity: O(n)

2nd apprach:
 Go through list, get length.
 Go thtough list, get element at length-k
 Space: O(1)
 Complexity: O(n)

3rd approach: 
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

function getLengthOfList(head) {
  var length = 0;
  var n = head;

  while (n !== null) {
    length++;
    n = n.next;
  }

  return length;
}

function getKthElement(head, k) {
  console.log("k: " + k)
  if (k < 1)
    return null;

  var pos = 1;
  var n = head;
  while (n !== null) {
    if (pos == k)
      return n;
    n = n.next;
    pos++;
  }
}

function getKthToLastElement(head, k) {
  var length = getLengthOfList(head);
  var elem = getKthElement(head, length-k);
  return (elem) ? elem.value: null;
}

function getKthToLastElement3(head, k) {
  var p1 = head;
  var p2 = head;  // Points to pos k+1
  var pos = 1;
  while (p2 !== null) {
    if (pos === (k+1)) {
      break;
    }
    pos++;
    p2 = p2.next;
  }

  while (p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return (p1) ? p1.value: null;
}

console.log(getKthToLastElement3(nodeA, 4));
