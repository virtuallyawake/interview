/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function getLength(head) {
    var n = head;
    var length = 0
    while (n !== null) {
        length++;
        n = n.next;
    }
    return length;
}

function removeNthNode(head, index) {
    var prev = head;
    var n = prev.next;

    if (index == 1) {
        head = head.next;
        return head;
    }
    var idx = 2;
    while (n !== null) {
        if (index == idx) {
            prev.next = n.next;
            return head;
        }
        idx++;
        prev = n;
        n = n.next;
    }
}

var removeNthFromEnd = function(head, n) {
    var length = getLength(head);
    var index = length - n + 1;
    return removeNthNode(head, index);
};

// In one pass
var removeNthFromEnd = function(head, n) {
    if (head.next === null)
        return null;
    var dummy = new ListNode(0);
    dummy.next = head;
    var index = n + 1;
    var pos = 0;
    var front = dummy;
    var back = null;
    while (front !== null) {
        if (pos === index) {
            back = dummy;
        }
        front = front.next;
        if (back)
            back = back.next;
        pos++;
    }
    if (pos === index) {
        return head.next;  // the head was the one to be removed
    } else { // remove intermediate node
        back.next = back.next.next;
    }
    return head;
};
