/* 
Remove duplicates from an unsorted linked list
 2 -> 5 -> 1 -> 2 -> 5
 2 -> 5 -> 1
*/

function Node(value) {
  this.value = value;
  this.next = null;
}

var nodeA = new Node(2);
var nodeB = new Node(5);
var nodeC = new Node(1);
var nodeD = new Node(2);
var nodeE = new Node(5);
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

function removeNode(prev, curr) {
}

function removeDuplicates(head) {
  var values = {};
  var prev = null;
  var curr = head;

  while (curr !== null) {
    if (!values[curr.value]) {
      values[curr.value] = true;
      prev = curr;
      curr = curr.next;
    } else { // remove curr
      prev.next = curr.next;
      curr = curr.next;
    }
  }
}

function removeDups2(head) {
  var values = {};
  var n = head;
  values[n.value] = true;
  while(n.next !== null) {
    if (values[n.next.value]) {
      n.next = n.next.next;
    } else {
      values[n.next.value] = true;
      n = n.next;
    }
  }
}

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

printList(nodeA);
removeDups2(nodeA);
printList(nodeA);

