/*
num1 = 123
3 -> 2 -> 1
num2 = 28
8 -> 2
sum: 151
1 -> 5 -> 1
*/

function Node(value) {
  this.value = value;
  this.next = null;
}

// num1 = 123
var node1A = new Node(3);
var node1B = new Node(2);
var node1C = new Node(1);

node1A.next = node1B;
node1B.next = node1C;

// num2 = 28
var node2A = new Node(8);
var node2B = new Node(2);

node2A.next = node2B;

function sumLists(headNum1, headNum2) {
  p1 = headNum1;
  p2 = headNum2;
  pSumHead = null;
  pSumTail = null;
  var carry = 0;
  var prev = null;
  while ((p1 || p2) !== null) {
    var p1Value = (p1) ? p1.value : 0;
    var p2Value = (p2) ? p2.value : 0;
    console.log(p1Value + " + " + p2Value + " + " + carry );
    var sum = p1Value + p2Value + carry;
    carry = Math.floor(sum / 10);
    var digit = new Node(sum % 10);
    if (!pSumHead) 
      pSumHead = digit;

    if (prev)
      prev.next = digit;
    pSumTail = digit;

    if (p1)
      p1 = p1.next;

    if (p2)
      p2 = p2.next;
    prev = digit;
  }
  return pSumHead;
}

var sum = sumLists(node1A, node2A);

printList(sum);

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

// leetcode
var addTwoNumbers = function(l1, l2) {
    var l3 = null;
    var t3 = null;
    var carry = 0;
    while (l1 !== null || l2 !== null || carry) {
        var val1 = l1 ? l1.val : 0;
        var val2 = l2 ? l2.val : 0;
        var sum = val1 + val2 + carry;
        carry = (sum > 9) ? 1 : 0;
        
        if (l3 === null) {
            l3 = new ListNode(sum % 10);
            t3 = l3;
        } else {
            t3.next = new ListNode(sum % 10);
            t3 = t3.next;
        }
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
    }
    
    return l3;
};
