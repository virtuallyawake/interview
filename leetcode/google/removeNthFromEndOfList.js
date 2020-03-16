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
var removeNthFromEnd = function(head, n) {
    var fakeHead = new ListNode("0");
    fakeHead.next = head;
    var p1 = fakeHead;
    
    var counter = 0;
    while (counter < n) {
        p1 = p1.next;
        counter++;
    }
    var p2 = fakeHead;
    
    // advance until p1 points to tail
    while (p1.next !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    
    // SPECIAL CASE: check if we are about to remove head
    if (p2.next === head) {
        if (p2.next.next !== null)
            return p2.next.next; // new head
        else
            return null;
    }
    
    // remove node in front of p2
    p2.next = p2.next.next
    
    return head;
};
