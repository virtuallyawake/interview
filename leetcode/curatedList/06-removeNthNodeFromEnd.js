/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
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
var removeNthFromEnd = function(head, n) {
    // Two pointers separanted by n nodes
    // Point p1 to fake head
    var fakeHead = new ListNode(0);
    fakeHead.next = head;
    var p1 = fakeHead;

    // Advance p2 to position n+1 (1-based)
    var p2 = head;
    var counter = 0;
    while (counter < n && p2 !== null) {
	p2 = p2.next;
	counter++;
    }

    // Move p1 and p2 together until p2 points to null
    while (p2 !== null) {
	p1 = p1.next;
	p2 = p2.next;
    }

    // Remove node that follows p1
    p1.next = p1.next.next;

    // Return head
    if (p1 === fakeHead) {
	return head.next;
    }
 
    return head;
}
